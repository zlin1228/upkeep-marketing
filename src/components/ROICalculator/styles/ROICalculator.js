import styled from 'styled-components';
import { shadow } from '../../../atoms/shadows';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const FrameWrapper = styled.div`
  padding: 0px 32px;
  background: ${color.darkGrey[50]};
`;

export const CalculatorFrame = styled.div`
  max-width: 673.75px;
  height: auto;
  padding: 42px;
  background: ${color.common.white};
  transform: translateY(-125px);
  ${shadow('lg', 'dark')}
  margin: 0 auto;
  border-radius: 16px;
  @media (max-width: 576px) {
    transform: translateY(-100px);
  }
`;
export const CalculatedResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 589.75px;
  border: 1px solid ${color.mediumGrey[100]};
  border-radius: 8px;
  padding: 32px;
  ${atMinWidth.sm`
    height: 273px;
   `}
  .results_kicker {
    ${font('overline', 'lg', '700')};
    color: ${color.primary[700]};
    text-align: center;
  }
  .results_amount {
    ${font('display', 'xs', '700')};
    color: ${color.darkBlue[900]};
    text-align: center;
    ${atMinWidth.sm`
     ${font('display', 'xl', '700')};
   `}
  }
  .results_demoBtn {
    display: grid;
    place-items: center;
    padding: 16px 0px;
    margin: 0 auto 16px auto;
    background: ${color.primary[700]};
    border: 1px solid ${color.primary[700]};
    border-radius: 5px;
    width: 100%;
    ${font('text', 'lg', '700')};
    text-align: center;
    color: ${color.common.white};
    opacity: 1;
    &:hover {
      opacity: 0.75;
    }
    @media (max-width: 499px) {
      font-size: 12px;
    }
  }
  @media (max-width: 499px) {
    font-size: 12px;
  }
`;
export const FormInput = styled.div`
  margin-bottom: 1.5rem;
  .form-group {
    position: relative;
    margin-bottom: 16px !important;
    label.mat-input-label {
      position: absolute;
      z-index: 0;
      top: 17px;
      left: 15px;
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      transform-origin: left top;
      pointer-events: none;
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[900]} !important;
    }
  }
  .form-control {
    position: relative;
    z-index: 10;
    height: 60px;
    max-width: 100%;
    ${font('display', 'xs', '700')}
    border: 1px solid ${color.mediumGrey[900]};
    color: ${color.darkBlue[900]};
    border-radius: 8px;
    ${shadow('xs', 'dark')}
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    background-color: transparent;
    &:focus {
      box-shadow: unset;
      border-color: ${color.primary[700]} !important;
    }
    &.is-invalid {
      border-color: #ff3b30;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    }
    &.is-valid {
      border-color: #a1debc;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    }
    &:valid + label.mat-input-label,
    &:focus + label.mat-input-label {
      display: none;
    }
    &:focus + label.mat-input-label {
      display: none;
    }
  }
  .question {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[900]};
    margin-bottom: 16px;
    .required_asterisk {
      color: red;
    }
  }
  .prompt {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[600]};
  }
  .optional_field {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[300]};
  }
`;
