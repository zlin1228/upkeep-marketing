import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BsFillPlayFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { getYoutubeId } from "../../utils/getYoutubeId";
import { VideoWrapper, Overlay, VideoImage, VideoPlayButton } from '../../styles/Components/Video/WebinarVideo';

const WebinarVideo = ({ previewVideo, fullVideo, webinarAccess }) => {
  const [play, setPlay] = useState(false);
  const [thumbnail, setThumbnail] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const previewThumnail = previewVideo?.videoThumbnail?.image?.url
  const fullVideoThumbnail = fullVideo?.videoThumbnail?.image?.url
  const previewUrl = fullVideo?.youtubeUrl
  const fullVideoUrl = fullVideo?.youtubeUrl

  useEffect(() => {
    // This will change once a decision is made on the preview videos
    if (webinarAccess){
      setThumbnail(fullVideoThumbnail !== null ? fullVideoThumbnail : `https://img.youtube.com/vi/${getYoutubeId(fullVideoUrl)}/maxresdefault.jpg`)
      setVideoUrl(`https://www.youtube.com/embed/${getYoutubeId(fullVideoUrl)}?${play ? 'autoplay=1&' : ''}showinfo=0&autohide=1`)
    } else if (!webinarAccess && previewUrl !== null) {
      setThumbnail(fullVideoThumbnail !== null ? fullVideoThumbnail : `https://img.youtube.com/vi/${getYoutubeId(fullVideoUrl)}/maxresdefault.jpg`)
      setVideoUrl(`https://www.youtube.com/embed/${getYoutubeId(fullVideoUrl)}?${play ? 'autoplay=1&' : ''}showinfo=0&autohide=1`)
    } else {
      setThumbnail(previewThumnail !== null ? previewThumnail : `https://img.youtube.com/vi/${getYoutubeId(previewUrl)}/maxresdefault.jpg`)
      setVideoUrl(`https://www.youtube.com/embed/${getYoutubeId(previewUrl)}?${play ? 'autoplay=1&' : ''}showinfo=0&autohide=1`)
    }
  }, [webinarAccess])

  return (
    <>
    <Overlay onClick={() => setPlay(false)} className={`${!play ? 'hidden' : ''}`}></Overlay>
    <Container>
      <VideoWrapper>
        <VideoImage src={thumbnail} fluid className={`mt-3 ${play ? 'hidden' : ''}`} />
        <iframe className={`${!play ? 'hidden' : ''}`} width="100%" height="100%" src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {!play ? (
          <IconContext.Provider
            value={{
              color: "#fff",
              className: "video-play",
              size: "45px",
            }}
          >
            {fullVideoUrl !== "" || previewUrl !== "" ? (
            <VideoPlayButton onClick={() => setPlay(true)}>
              <BsFillPlayFill />
            </VideoPlayButton>
            ) : null}
          </IconContext.Provider>
        ) : ''}
      </VideoWrapper>
    </Container>
  </>
  )
}

export default WebinarVideo