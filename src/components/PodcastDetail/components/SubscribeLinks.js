import React from 'react';
import applePodcastLogo from '../../../assets/applePodcast_logo.svg';
import spotifyLogo from '../../../assets/spotify_logo.svg';
import youtubeLogo from '../../../assets/youtube_logo.svg';

const SubscribeLinks = () => (
  <div className="subscirbe_links_wrapper">
    <a
      href="https://open.spotify.com/show/5PlLSyIsOYTgtoHuOhDxJD?si=ES7ROVpyT0S2XP6ft0ctJA"
      target="_blank"
      rel="noreferrer"
      className="subscribe_link"
    >
      <span className="d-none">Spotify</span>
      <img src={spotifyLogo} alt="Spotify" />
    </a>
    <a
      href="https://www.youtube.com/channel/UC4ewS5K1zt6TOpZBfXx8Yfw"
      target="_blank"
      rel="noreferrer"
      className="subscribe_link"
    >
      <span className="d-none">Spotify</span>
      <img src={youtubeLogo} alt="Youtube" />
    </a>
    <a
      href="https://podcasts.apple.com/us/podcast/masterminds-in-maintenance/id1358003075"
      target="_blank"
      rel="noreferrer"
      className="subscribe_link"
    >
      <span className="d-none">Spotify</span>
      <img src={applePodcastLogo} alt="Apple Podcasts" />
    </a>
  </div>
);

export default SubscribeLinks;
