import React from 'react';
import styled from 'styled-components';
import UpKeepIcon from '../../assets/UpKeepIcon';

const sprites = {
  brands: '/sprites/brands.svg',
  duotone: '/sprites/duotone.svg',
  light: '/sprites/light.svg',
  regular: '/sprites/regular.svg',
  'sharp-solid': '/sprites/sharp-solid.svg',
  solid: '/sprites/solid.svg',
  thin: '/sprites/thin.svg',
  custom: '/sprites/custom.svg',
};

const Icon = ({
  id,
  className,
  width,
  height,
  fillColor,
  strokeColor,
  styles,
  role,
}) => {
  if (!id) return null;

  if (id === 'upkeep' || id === 'upkeep-icon') {
    return <UpKeepIcon color={fillColor} />;
  }

  const isCustomIcon = !id?.includes('fa-');

  const spriteFile = isCustomIcon
    ? sprites.custom
    : sprites[id.split('fa-')[1].split(' ').join('')] || sprites.solid;

  const iconId = isCustomIcon ? id : id.split('fa-')[2];

  return (
    <Container
      width={width}
      height={height}
      className={className}
      styles={styles}
      fillColor={fillColor}
      strokeColor={strokeColor}
      role={role || 'presentation'}
    >
      <use href={`${spriteFile}#${iconId}`} />
    </Container>
  );
};

export default Icon;

const Container = styled.svg`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  ${props => props.styles}
  use {
    width: 100%;
    height: 100%;
    fill: ${props => props?.fillColor || 'inherit'};
    stroke: ${props => props?.strokeColor || 'inherit'};
    color: ${props => props?.fillColor || 'inherit'};
  }
`;
