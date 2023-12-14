import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import CogIcon from '../assets/cog-icon.svg';
import {
  Container,
  Control,
  List,
  ListItem,
  Icon,
} from '../styles/Controls.styled';

const Controls = ({ verticalSlides, showControls, activeSlideIndex }) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const cog = document.getElementById('cog');
      if (cog) {
        cog.style.transform = `translateX(50%) rotate(${
          window.scrollY / 10
        }deg)`;
      }
    });
  }, []);

  if (!showControls) return null;
  return (
    <Container>
      <Control>
        <List>
          {verticalSlides.map((slide, index) => (
            <ListItem key={slide?.id}>
              <Link
                to={`slide-${index}`}
                spy
                smooth
                duration={600}
                offset={-225}
                className={index === Number(activeSlideIndex) ? 'active' : ''}
              >
                {slide?.headingKicker}
              </Link>
            </ListItem>
          ))}
        </List>
        <Icon>
          <img id="cog" src={CogIcon} alt="cog icon" />
        </Icon>
      </Control>
    </Container>
  );
};

export default Controls;
