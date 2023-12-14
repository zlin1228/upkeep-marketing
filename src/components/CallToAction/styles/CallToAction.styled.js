import styled from 'styled-components';
import { Link } from 'gatsby';
import { Link as CustomScrollLink } from 'react-scroll';

import {
  defaultStyles,
  deprecatedVariants,
  variants,
  sizes,
} from './theme.styled';

const applySharedStyles = component => styled(component)`
  ${defaultStyles}
  ${props => sizes[props?.size]}
  ${props => deprecatedVariants[props?.variant]}
  ${props => variants[props?.variant]}
  ${props => props.styles}
`;

export const InternalLink = applySharedStyles(Link);
export const ExternalLink = applySharedStyles('a');
export const ScrollLink = applySharedStyles(CustomScrollLink);
export const LightboxButton = applySharedStyles('button');

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export { defaultStyles, deprecatedVariants, variants, sizes };
