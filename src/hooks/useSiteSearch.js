import { useState } from 'react';
import { marked } from 'marked';

/**
 * Handles the response stream from the server, parsing and displaying the data.
 *
 * @param {ReadableStreamDefaultReader} reader The reader to read the response data.
 * @param {TextDecoder} decoder The decoder to decode the response data.
 * @param {object} ref A React ref object pointing to the element where the results will be displayed.
 * @param {RegExp} linkRegex A regular expression to match Markdown links in the response data.
 * @returns {Promise<void>} Returns a promise that resolves when the stream has been fully read and displayed.
 */
const handleStream = async (reader, decoder, ref, linkRegex, cancelStream) => {
  let buffer = '';
  while (true) {
    if (cancelStream) {
      reader.cancel();
      console.log('Stream cancelled');
      return;
    }

    const { done, value } = await reader.read();

    if (done) {
      const html = marked.parse(buffer);
      ref.current.innerHTML = html;
      break;
    }
    const chunk = decoder.decode(value, { stream: true });
    buffer += chunk;

    if (linkRegex.test(buffer)) {
      const parsed = marked.parseInline(buffer);
      ref.current.innerHTML = parsed;
    } else {
      ref.current.innerHTML += chunk;
    }
  }
};

/**
 * Fetches search results from a remote server.
 *
 * @param {string} input The search input.
 * @returns {ReadableStreamDefaultReader} Returns a reader that can be used to read the response data.
 */
const fetchSearchResults = async input => {
  const abortController = new AbortController();

  const res = await fetch(
    'https://upkeep-search-server.herokuapp.com/stream-search',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
      signal: abortController.signal,
    }
  );
  return {
    reader: res.body.getReader(),
    controller: abortController,
  };
};

/**
 * A React hook that provides site search functionality.
 *
 * @param {object} ref A React ref object pointing to the element where the search results will be displayed.
 * @returns {object} Returns an object with the following properties:
 *   - searchValue: The current search value.
 *   - setSearchValue: A function to update the search value.
 *   - renderResults: A boolean indicating if results should be rendered.
 *   - loading: A boolean indicating if the search is in progress.
 *   - error: Any error that occurred during the search.
 *   - setError: A function to set the error state.
 *   - handleSiteSearch: A function to handle the site search.
 */
const useSiteSearch = ref => {
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [renderResults, setRenderResults] = useState(false);

  const [abortController, setAbortController] = useState(null);
  const [cancelStream, setCancelStream] = useState(false);

  const handleSiteSearch = async (e, value) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (abortController) {
        ref.current.innerHTML = '';
        abortController.abort();
      }

      if (!value || value === '') {
        setError('Please enter a search term');
        setLoading(false);
        return;
      }

      const { reader, controller } = await fetchSearchResults(value);

      setAbortController(controller);
      setLoading(false);
      setRenderResults(true);

      const decoder = new TextDecoder('utf-8');
      const linkRegex = /\[[^\]]*\]\([^)]*\)/; // Matches Markdown links

      await handleStream(reader, decoder, ref, linkRegex, cancelStream);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch request cancelled');
      } else {
        console.error(err);
      }
    }
  };

  const handleCancelSearch = () => {
    setCancelStream(true);
    setRenderResults(false);
    setSearchValue('');
    ref.current.innerHTML = '';

    setTimeout(() => {
      setCancelStream(false);
    }, 1000);
  };

  return {
    searchValue,
    setSearchValue,
    renderResults,
    setRenderResults,
    loading,
    error,
    setError,
    handleSiteSearch,
    handleCancelSearch,
  };
};

export default useSiteSearch;
