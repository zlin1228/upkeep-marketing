import React from 'react';
import ModalVideoItem from '../components/VideoOverview/ModalVideoItem';
import { getYoutubeId } from './getYoutubeId';

export const getFirstImage = string => {
  const getImages = str => {
    const imgRex = /<img.*?src="(.*?)"[^>]+>/g;
    const images = [];
    let img;
    while ((img = imgRex.exec(str))) {
      images.push(img);
    }
    return images;
  };
  let firstImgString = getImages(string)?.[0];
  if (firstImgString) {
    let returnString = string.replace(firstImgString[0], '');
    firstImgString = firstImgString[1].replace(/-[\d]+x[\d]+/, '');
    return [firstImgString, returnString];
  } else return ['', string];
};

export const generateAlertCards = content => {
  if (content === '') return '';
  const seq1 = content?.replace(
    /\[alert type="info" icon-size="normal"]/g,
    '<div class="alert alert-info"><i class="fa fa-info pr-4"></i>'
  );
  const seq2 = seq1?.replace(
    /\[alert type="success" icon-size="normal"]/g,
    '<div class="alert alert-success"><i class="fa fa-check pr-4"></i>'
  );
  const seq3 = seq2?.replace(
    /\[alert type="danger" icon-size="normal"]/g,
    '<div class="alert alert-warning"><i class="fa fa-exclamation-triangle pr-4"></i>'
  );
  const seq4 = seq3?.replace(
    /\[alert type="warning" icon-size="normal"]/g,
    '<div class="alert alert-warning"><i class="fa fa-exclamation-triangle pr-4"></i>'
  );
  const seq5 = seq4?.replace(
    /\[caption.*]/g,
    '<div class="image-wrapper mb-4">'
  );
  const seq6 = seq5?.replace(/\[\/alert]/g, '</div>');
  return seq6?.replace(/\[\/caption]/g, '</div>');
};

export const getIntroText = string => {
  const getParagraph = str => {
    const pRex = /<p.*?>(.*?)<\/p>/g;
    const paragraph = [];
    let p;
    while ((p = pRex.exec(str))) {
      if (
        !p[1].includes?.('[alert') &&
        !p[1].includes?.('[video') &&
        !p[1].includes?.('<img')
      )
        paragraph.push(p[1]);
    }
    return paragraph;
  };
  return getParagraph(string)?.[0];
};

export const generateAlertCard = content => {
  if (!content || content === '') return '';
  const wpregex = /\[alert[^\]]*\](.*?)\[\/alert\]/g;
  const wptags = [...content.matchAll(wpregex)];
  const captionregex = /\[caption[^\]]*\](.*?)\[\/caption\]/g;
  const captiontags = [...content.matchAll(captionregex)];
  let html = '';
  wptags.forEach(wptag => {
    if (
      wptag[0].indexOf('&#8221;info&#8221;') > -1 ||
      wptag[0].indexOf('"info"') > -1
    ) {
      html = `<div class="alert alert-info"><i class="fa fa-info pr-4"></i> ${wptag[1]}</div>`;
    } else if (
      wptag[0].indexOf('&#8221;success&#8221;') > -1 ||
      wptag[0].indexOf('"success"') > -1
    ) {
      html = `<div class="alert alert-success"><i class="fa fa-check pr-4"></i> ${wptag[1]}</div>`;
    } else {
      html = `<div class="alert alert-warning"><i class="fa fa-exclamation-triangle pr-4"></i> ${wptag[1]}</div>`;
    }
    content = content.replace(wptag[0], html);
  });
  captiontags.forEach(wptag => {
    html = `<div class="text-center image-wrapper mb-4">${wptag[1]}</div>`;
    content = content.replace(wptag[0], html);
  });

  const buttonregex = /\[maxbutton[^\]]*\]/g;
  const buttontags = [...content.matchAll(buttonregex)];
  buttontags.forEach(wptag => {
    if (wptag.length > 0) {
      let urlRegex = /url=\"(.*?)\"/g;
      let textRegex = /text=\"(.*?)\"/g;
      let urlmatch = [...wptag[0].matchAll(urlRegex)];
      let textmatch = [...wptag[0].matchAll(textRegex)];
      let url = urlmatch[0] ? urlmatch[0][1] : '';
      let text = textmatch[0] ? textmatch[0][1] : url;
      html = `<div class="text-center"><a class="btn btn-primary px-4 maxbutton" href="${url}">${text}</a></div>`;
      content = content.replace(wptag[0], html);
    }
  });
  return content ? content.replace(/https\:\/\/www.onupkeep\.com/g, '') : '';
};

export const generateVideoContent = content => {
  let html = '';
  const embedregex = /\[embed[^\]]*\](.*?)\[\/embed\]/g;
  const embedtags = [...content.matchAll(embedregex)];

  if (embedtags && embedtags.length > 0) {
    embedtags.forEach(wptag => {
      let youtubeId = getYoutubeId(wptag[1]);
      html = (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: content.substr(0, wptag['index']),
            }}
          />
          <ModalVideoItem youtubeId={youtubeId} />
          <div
            dangerouslySetInnerHTML={{
              __html: content.substr(
                wptag['index'] + wptag[0].length,
                content.length
              ),
            }}
          />
        </>
      );
    });
  } else {
    html = <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
  return html;
};

export const replaceH1s = htmlString => {
  const replaceOpenH1Tag = htmlString.replace(/<h1/g, '<h2');
  const replaceCloseH1Tag = replaceOpenH1Tag.replace(/<\/h1/g, '</h2');
  return replaceCloseH1Tag;
};
