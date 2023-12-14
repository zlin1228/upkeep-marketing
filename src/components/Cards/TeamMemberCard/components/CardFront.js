import React from 'react';
import Image from '../../../Image/GatsbyImage';
import Icon from '../../../../molecules/Icon';
import { color } from '../../../../atoms/colors';
import {
  Container,
  Overlay,
  Details,
  Text,
  Button,
} from '../styles/CardFront.styled';

const CardFront = ({
  name,
  role,
  bio,
  linkedinProfile,
  image,
  frontVisible,
  setFrontVisible,
  setBackVisible,
}) => {
  const renderButton = bio || linkedinProfile;

  return (
    <Container className={frontVisible ? 'active' : ''}>
      <Overlay />
      <Image src={image?.image?.gatsbyImageData} alt={image?.image?.alt} />
      <Details>
        <Text>
          {name && <p className="name">{name}</p>}
          {role && <p className="role">{role}</p>}
        </Text>
        {renderButton && (
          <Button
            onClick={() => {
              setFrontVisible(false);
              setBackVisible(true);
            }}
          >
            <Icon
              id="fa-solid fa-chevron-up"
              width="20px"
              height="20px"
              fillColor={color.common.white}
            />
          </Button>
        )}
      </Details>
    </Container>
  );
};

export default CardFront;
