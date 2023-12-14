import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const ToggleSwitchContainer = styled.div`
  height: 64px;
  padding: 5px;
  width: 269px;
  position: relative;
  margin: 0 auto 16px auto;

  input {
    cursor: pointer;
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    z-index: 100;
  }

  label {
    background: #ffffff;
    border: 1px solid #e9eaed;
    border-radius: 12px;
    display: block;
    height: 100%;
    position: relative;
    transition: all 0.5s ease;
    width: 100%;
  }

  label .toggle-toggle {
    display: block;
    height: calc(100% - 10px);
    left: 6px;
    position: absolute;
    top: 6px;
    transition: all 0.5s ease;
    width: 47%;
    z-index: 3;
  }

  label .toggle-toggle:before {
    align-items: center;
    background: ${color.primary[900]};
    border-radius: 12px;
    bottom: 0;
    box-shadow: 0 3px 6px 1px rgba(160, 161, 188, 0.35);
    content: '';
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: -2px;
    transition: all 0.5s ease;
    width: auto;
  }

  label .toggle-toggle:before p {
    color: #ffffff;
  }

  input:checked ~ label .toggle-toggle {
    left: 50%;
  }

  .toggle-title {
    color: #7e828a;
    ${font('text', 'sm', '700')}
    text-align: center;
    z-index: 9;
    margin: 0;
  }

  .toggle-title.selected {
    color: ${color.common.white};
  }

  .toggle-title-container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 50%;
  }

  .toggle-titles {
    height: 100%;
    display: flex;
  }

  @media (max-width: 576px) {
    .toggle-title {
      padding: 0 10px;
    }
  }
`;
