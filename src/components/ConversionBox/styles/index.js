import styled from 'styled-components';
import UpKeepLogoWhite from '../../../assets/upkeep-logo-white.svg';
import UpKeepLogoColorLight from '../../../assets/upkeep-logo-color-light.svg';
import UpKeepLogoColorDark from '../../../assets/upkeep-logo-color-dark.svg';
import lightBackground from '../../../assets/background/conversion-box-light-bg.svg';
import darkBackground from '../../../assets/background/conversion-box-dark-bg.svg';
import blueBackground from '../../../assets/background/conversion-box-blue-bg.svg';

export const themes = {
  Light: {
    background: `background-color: #ffffff; background-image: url(${lightBackground});`,
    text: `color: #0B1A2B;`,
    logo: UpKeepLogoColorDark,
    button: {
      background: `background: #007bff !important;`,
      color: `color: #ffffff;`,
    },
  },
  Dark: {
    background: `background: #1A1F31;  background-image: url(${darkBackground});`,
    text: `color: #ffffff;`,
    logo: UpKeepLogoColorLight,
    button: {
      background: `background: #007bff !important;`,
      color: `color: #ffffff;`,
    },
  },
  Blue: {
    background: `background: #007bff;  background-image: url(${blueBackground});`,
    text: `color: #ffffff;`,
    logo: UpKeepLogoWhite,
    button: {
      background: `background: white !important;`,
      color: `color: #007bff;`,
    },
  },
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  ${props => themes[props?.theme]?.background}
  background-repeat: no-repeat;
  background-position: 0 0, 100% 100%;
  background-size: cover;
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  border-radius: 8px;
  padding: 32px;
  margin: 0px;
  @media (max-width: 991px) {
    padding: 24px;
  }
`;
export const Logo = styled.div`
  width: 132.2px;
  height: 34.69px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Heading = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 31.1px;
  line-height: 40px;
  ${props => themes[props?.theme]?.text}
  margin: 16px 0px;
  @media (max-width: 991px) {
    font-size: 26px;
    line-height: initial;
  }
`;
export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .subscription-form {
    flex-direction: row !important;
    @media (max-width: 991px) {
      flex-direction: column !important;
      flex-wrap: initial !important;
    }
    input {
      display: block;
      position: relative;
      flex-basis: 60%;
      height: auto;
      min-height: 56px;
      margin: 0px;
      padding: 8px 24px;
      background: white !important;
      border: 1px solid #eaeaec !important;
      box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
      border-radius: 8px;
      &:focus + .mat-input-label {
        color: #ffffff !important;
      }
      @media (max-width: 991px) {
        margin-bottom: 16px;
      }
    }
    label {
      top: 13px;

      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      text-align: justify;
      color: #515667;
    }
    .mat-input-label {
      color: inherit !important;
    }

    button {
      display: block;
      position: relative;
      flex-basis: 40%;
      height: 100%;
      max-height: 100%;
      min-height: 56px;
      padding: 0px;
      margin: 0px 8px !important;
      border: none;
      padding: 8px 24px;
      border-radius: 8px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-align: justify;
      ${props => themes[props?.theme]?.button?.background}
      ${props => themes[props?.theme]?.button?.color}
    @media (max-width: 991px) {
        text-align: center;
      }
    }
  }
`;
