import styled, { css } from 'styled-components';

import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';
import { spacing } from '../../../../../atoms/spacing';
import { atMinWidth } from '../../../../../atoms/breakpoints';

const backgroundMap = {
  white: css`
    background: linear-gradient(
        220deg,
        rgba(110, 160, 203, 0.06) 6.78%,
        rgba(216, 223, 228, 0) 102.94%
      ),
      #fff;
  `,
  darkBlue: css`
    background: linear-gradient(
        220deg,
        rgba(110, 160, 203, 0.35) 6.78%,
        rgba(216, 223, 228, 0) 102.94%
      ),
      #fff;
  `,
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${spacing[24]};
  border-radius: ${spacing[16]};
  border: 1px solid ${color.steel[100]};
  ${({ theme }) => backgroundMap[theme]}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[24]};
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  ${atMinWidth.lg`
    min-height: 146px;
  `}

  .header {
    display: flex;
    flex-direction: column;
  }

  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
  }

  .subhead {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[600]};
  }

  .price {
    display: flex;
    align-items: center;
    gap: ${spacing[4]};
    ${font('display', 'xl', '700')}
    color: ${color.steel[700]};
  }

  .period {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[8]};

  ${font('text', 'md', '700')}
  color: ${color.darkBlue[1000]};
`;

export const Bottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spacing[24]};

  .description {
    width: auto;
    display: flex;
    align-items: center;

    ${atMinWidth.xl`
        width: 100%;
    `}

    ul {
      display: flex;
      flex-direction: column;
      gap: ${spacing[12]};
      list-style: none;
      padding: ${spacing[0]};
      margin: ${spacing[0]};
    }

    ul li {
      position: relative;
      display: flex;
      align-items: flex-start;
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
      padding-left: ${spacing[36]};
    }

    ul li::before {
      content: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7.5%2012L10.5%2015L16.5%209M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z%22%20stroke%3D%22%23007CB0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E');
      position: absolute;
      left: ${spacing[0]};
    }

    p {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[8]};

  a {
    width: 100%;
  }

  .disclaimer {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[500]};
  }
`;
