import { useState } from 'react';

const usePodcastDetails = post => {
  const [activePost, setActivePost] = useState(post?.summaryShowNotes);

  const contentArray = [];
  if (post?.summaryShowNotes) {
    contentArray.push({
      label: 'Summary & Show Notes',
      value: post?.summaryShowNotes,
      className: `content-toggle ${
        activePost === post?.summaryShowNotes ? 'active' : ''
      }`,
    });
  }
  if (post?.fullTranscript) {
    contentArray.push({
      label: 'Transcript',
      value: post?.fullTranscript,
      className: `content-toggle ${
        activePost === post?.fullTranscript ? 'active' : ''
      }`,
    });
  }

  return { contentArray, activePost, setActivePost };
};

export default usePodcastDetails;
