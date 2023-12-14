import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'

export const VideoWrapper = styled.div`
position: relative;
height: 600px;
margin: 0 auto;
transform: translateY(-75px);
@media(max-width: 991px) {
  height: 400px;
}
@media(max-width: 768px) {
  height: 300px;
}
img {
  position: absolute;
  margin: 0!important;
  width: 100%;
  height: 100%;
}
iframe {
  opacity: 1;
  transition: all 0.8s;
  &.hidden {
  opacity: 0;
  pointer-events: none;
}
}
`
export const Overlay = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
opacity: 1;
transition: all 0.5s;
transform: translateY(-75px);
&.hidden {
  opacity: 0;
  pointer-events: none;
}
`
export const VideoPlayButton = styled.div`
position: absolute;
top: 0;
left: -30px;
bottom: 0;
right: 0;
display: grid;
place-items: center;
margin: auto;
width: 100px;
height: 100px;
border-radius: 50%;
cursor: pointer;
transition: all 0.5s;
background: white;
opacity: 1;
transition: all 0.2s;
@media(max-width: 1024px) {
  left: 0;
}
:hover {
  opacity: .8;
}
svg {
  color: black!important;
  width: 60px;
  height: 60px;
  margin-left:.25rem;
}
.modal-video-close-btn {
  top: -40px;
  right: -50px;
  width: 10px;
  height: 40px;
  opacity: 1;
  &:hover {
  opacity: .5!important;
  background: transparent!important;
  }
}
`;
export const VideoImage = styled(Image)`
width: 500px;
height: 304px;
object-fit:cover;
opacity: 1;
transition: all .5s ease-in-out;
&.hidden {
  opacity: 0;
  pointer-events: none;
}
`