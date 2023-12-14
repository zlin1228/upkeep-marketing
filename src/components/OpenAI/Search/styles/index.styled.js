import styled, { css } from 'styled-components';

import { containers } from '../../../../atoms/containers';
import { spacing } from '../../../../atoms/spacing';
import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';
import { shadow } from '../../../../atoms/shadows';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  max-width: ${containers.md};
  padding: ${spacing[0]} ${spacing[8]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.xl`
    max-width: ${containers.lg};
  `}
`;

export const Container = styled.div`
  width: 100%;
  min-height: 434px;
  display: flex;
  flex-direction: column;

  background-color: ${color.common.white};
  border: 1px solid ${color.darkBlue[100]};
  ${shadow('xl', 'dark')}
  border-radius: 16px;

  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 653px 1fr;
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  padding: ${spacing[24]} ${spacing[16]};

  ${atMinWidth.md`
    gap: ${spacing[24]};
    padding: ${spacing[24]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[32]};
  `}
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  ${atMinWidth.md`
    gap: ${spacing[24]};
  `}

  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[1000]};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};

  .c-error {
    ${font('text', 'xs', '600')}
    color: ${color.primary[700]};
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing[16]};
  background: ${color.common.white};
  ${atMinWidth.sm`
    flex-direction: row;
    gap: ${spacing[0]};
  `}
`;

export const FormControl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${color.common.white};
  border: 1px solid ${color.darkBlue[50]};
  border-radius: 64px;

  ${atMinWidth.sm`
    border-radius: 104px 0px 0px 104px;
  `}

  .gpt-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  input {
    width: 100%;
    max-width: 100%;
    height: auto !important;
    padding: ${spacing[8]} ${spacing[4]};
    border: 0px solid ${color.common.transparent} !important;
    outline: none !important;
    border-radius: 64px;

    &,
    &::placeholder {
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[300]};
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[4]};
  padding: ${spacing[10]} ${spacing[12]};
  outline: none;
  border: 2px solid ${color.darkBlue[1000]};
  background-color: ${color.darkBlue[1000]};
  border-radius: 72px;
  ${font('display', 'tiny-xs', '700')}
  color: ${color.common.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${atMinWidth.sm`
    max-width: 136px;
    border-radius: 0px 72px 72px 0px;
  `}

  &:hover {
    background-color: ${color.darkBlue[800]};
    border: 2px solid ${color.darkBlue[800]};
  }
`;

export const Results = styled.div`
  width: 100%;
  height: 100%;
  min-height: 254px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing[16]} ${spacing[24]};
  background: ${color.common.white}};
  border: 1px solid ${color.darkBlue[50]};
  border-radius: 8px;

  ${({ loading }) =>
    loading &&
    css`
      .carrot {
        display: block;
      }
    `}

  .description, .description p {
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[800]};
    h1, h2, h3, h4,h5, h6 {
      ${font('display', 'tiny-sm', '700')}
    }
    a {
      display: contents;
      color: ${color.steel[700]};
    }
    ul, ol {
      padding-left: 40px;
    }
  }

  .limit-text {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    ${font('text', 'xs', '400')}
    color: ${color.darkBlue[300]};
  }
`;

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: ${spacing[32]} ${spacing[24]};
  background-color: ${color.darkBlue[1000]};
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;

  ${atMinWidth.xl`
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 0px;
  `}

  .sidebar-heading {
    ${font('display', 'xs', '700')}
    color: ${color.common.white};
  }

  .sidebar-recommendations {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacing[12]};
    padding: ${spacing[0]};
    margin: ${spacing[0]};
    list-style: none;
    ${atMinWidth.xl`
      gap: ${spacing[24]};
    `}

    .question {
      width: 100%;
      border: none;
      background-color: ${color.common.transparent};
      outline: none;
      cursor: pointer;
      padding: ${spacing[0]};
      text-align: left;

      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${spacing[16]};
        padding: ${spacing[4]} ${spacing[0]};
        ${font('text', 'md', '400')};
        color: ${color.darkBlue[100]};

        &:hover {
          span {
            text-decoration: underline;
          }
          .copy-button {
            opacity: 1;
          }
        }

        span {
          transition: text-decoration 0.2s ease-in-out;
        }

        .copy-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${color.darkBlue[100]};
          border: 1.5px solid ${color.darkBlue[50]};
          border-radius: 6px;
          padding: ${spacing[8]};
          opacity: 0;
          transition: opacity 0.2s ease-in-out;

          .c-tooltip {
            position: absolute;
            top: -30px;
            left: 30px;
            padding: ${spacing[6]};
            background-color: ${color.common.white};
            white-space: nowrap;
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            ${font('text', 'xs', '400')}
            color: ${color.darkBlue[1000]};
          }
        }
      }
    }
  }
`;

export const SearchSuggestions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  padding: ${spacing[16]} ${spacing[32]};
  background: ${color.common.neutral};
  border: 1px solid ${color.darkBlue[50]};
  border-radius: ${spacing[8]};

  p {
    ${font('text', 'lg', '800')}
    color: ${color.darkBlue[700]};
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacing[10]};
    margin: ${spacing[0]};
    padding: ${spacing[0]};
    list-style: none;

    li button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;
      background: none;
      outline: none;
      padding: ${spacing[0]};
      cursor: pointer;
      ${font('text', 'md', '400')}
      text-align: left;
      color: ${color.darkBlue[500]};

      &:hover {
        text-decoration: underline;
        .copy-button {
          opacity: 1;
        }
      }

      .copy-button {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${color.darkBlue[100]};
        border: 1.5px solid ${color.darkBlue[50]};
        border-radius: ${spacing[6]};
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }
    }
  }
`;
