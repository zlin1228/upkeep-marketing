import React from 'react';
import { PlayButton } from '../styles/Play.styled';

const Play = ({ video, setVideoData, play, setPlay }) => (
  <PlayButton
    type="button"
    onClick={() => {
      setPlay(!play);
      setVideoData(video);
    }}
  >
    <svg
      width="95"
      height="95"
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="47.031" cy="47.1462" r="47.031" fill="#007BFF" />
      <path
        d="M41.0802 64.2557L63.7756 49.9259C65.8001 48.6514 65.8066 45.5099 63.7756 44.2354L41.0802 29.8988C39.2361 28.7345 36.4121 29.8643 36.4121 32.7441V61.4104C36.4121 63.9939 39.0363 65.5508 41.0802 64.2557Z"
        fill="white"
      />
    </svg>
  </PlayButton>
);

export default Play;
