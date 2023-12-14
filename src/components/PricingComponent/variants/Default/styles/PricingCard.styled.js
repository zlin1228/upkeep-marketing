import styled from 'styled-components';

import { font } from '../../../../../atoms/typography';
import { atMinWidth } from '../../../../../atoms/breakpoints';
import { spacing } from '../../../../../atoms/spacing';
import { color } from '../../../../../atoms/colors';

const colorBarMap = {
  'red-500': color.primary[500],
  'green-500': color.green[500],
  'yellow-700': color.yellow[700],
  'steel-700': color.steel[700],
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: ${spacing[24]};
  background: radial-gradient(
    57.88% 98.14% at 111.64% 45.29%,
    rgba(253, 254, 255, 0.79) 0%,
    #fdfeff 100%
  );
  box-shadow: 0px 26.61335px 53.22671px -13.30668px rgba(0, 124, 176, 0.25);
  backdrop-filter: blur(12.415656089782715px);
  overflow: hidden;

  ${atMinWidth.xl`
    max-width: 394px;
    transform: translateY(${({ mostPopular }) =>
      mostPopular ? '0px' : spacing[24]});
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spacing[16]};
  padding: ${spacing[24]};
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
`;

export const ColorBar = styled.div`
  width: 100%;
  height: ${({ mostPopular }) => (mostPopular ? '32px' : '8px')};
  display: block;
  background-color: ${({ theme }) => colorBarMap[theme]};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ mostPopular }) => mostPopular && `padding: 4px 0px;`}
  ${font('text', 'md', '700')}
  color: ${color.common.white};
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};

  .name {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[1000]};
  }
`;

export const Eyebrow = styled.div`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};

  strong {
    ${font('text', 'md', '700')}
  }
`;

export const Description = styled.div`
  ${font('text', 'xs', '400')}
  color: ${color.darkBlue[600]};
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${spacing[4]};

  .cost {
    ${font('display', 'lg', '700')}
    color: ${color.darkBlue[1000]};
  }

  .duration {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[600]};
  }
`;

export const Features = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};

  p,
  li,
  span {
    ${font('text', 'xs', '400')}
    color: ${color.darkBlue[600]};
  }

  strong {
    ${font('text', 'xs', '700')}
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${spacing[8]};
    list-style: none;
    padding: ${spacing[0]};
    margin: ${spacing[0]};
  }

  ul li {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: ${spacing[8]};
  }

  ul li::before {
    content: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"%3E%3Crect width="24" height="24" rx="12" fill="%23007CB0"/%3E%3Cpath d="M7.5 12L10.5 15L16.5 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
    width: 16px;
    height: 16px;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[8]};

  .disclaimer {
    ${font('text', 'xs', '400')}
    color: ${color.darkBlue[600]}
    text-align: center;
  }

  a {
    width: 100%;
  }
`;
