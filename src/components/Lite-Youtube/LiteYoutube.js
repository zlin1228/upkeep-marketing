import React, { useEffect } from 'react';

const LiteYoutube = ({ videoId, autoplay }) => {
  useEffect(() => {
    import('./index');
  }, []);
  return (
    <lite-youtube data-preload-iframe={autoplay} videoid={videoId || ''} />
  );
};

export default LiteYoutube;
