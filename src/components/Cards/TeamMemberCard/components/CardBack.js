import React from 'react';
import Icon from '../../../../molecules/Icon';
import { color } from '../../../../atoms/colors';
import {
  Container,
  Wrapper,
  Details,
  Bio,
  Button,
} from '../styles/CardBack.styled';

const CardBack = ({
  name,
  role,
  bio,
  linkedinProfile,
  setFrontVisible,
  backVisible,
  setBackVisible,
}) => (
  <Container className={backVisible ? 'active' : ''}>
    <Wrapper>
      {linkedinProfile && (
        <a
          className="icon"
          href={linkedinProfile}
          aria-label="Linkedin Profile"
        >
          <Icon
            id="fa-brands fa-linkedin-in"
            width="20px"
            height="20px"
            fillColor={color.primary[700]}
          />
        </a>
      )}
      <Details>
        {name && <p className="name">{name}</p>}
        {role && <p className="role">{role}</p>}
      </Details>
      {bio && <Bio>{bio}</Bio>}
    </Wrapper>
    <Button
      onClick={() => {
        setBackVisible(false);
        setFrontVisible(true);
      }}
    >
      Close
      <Icon
        id="fa-solid fa-xmark"
        width="20px"
        height="20px"
        fillColor={color.darkBlue[900]}
      />
    </Button>
  </Container>
);

export default CardBack;
