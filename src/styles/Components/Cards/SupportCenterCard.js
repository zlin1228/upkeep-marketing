import styled from 'styled-components';

const backgroundMappings = {
  white: 'background: white;',
  transparent: 'background: transparent;',
};
export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  position: relative;
  width: 100%;
  height: auto;
  ${props => backgroundMappings[props.theme]}
  border: 1px solid #eaeaec;
  border-radius: 12px;
  box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
  transition: all 0.3s ease;
  ${props =>
    props.clickable &&
    `
    &:hover {
      box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
    }
    `}
`;
export const Clickable = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0px;
  z-index: 100;
`;
export const iconColors = {
  Purple: `background: #ECEEFF;`,
  Blue: `background: #E6F2FF;`,
  Yellow: `background: #FDF4DD;`,
  Green: `background: #EBF9F0;`,
  Pink: `background: rgba(246, 149, 206, 0.25);`,
  Teal: `background: rgba(114, 202, 216, 0.15);`,
  Red: `background: rgba(255, 235, 234);`,
  Orange: `background: rgba(255, 182, 137, 0.25);`,
};
export const Icon = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 0 1.05rem;
  align-items: center;
  justify-content: center;
  ${props => iconColors[props.color]};
  svg {
    width: 22px;
    height: 22px;
  }
`;
export const Heading = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 21.6px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 4px;
`;
export const Subhead = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 0px;
  span {
    font-weight: bold;
  }
`;
