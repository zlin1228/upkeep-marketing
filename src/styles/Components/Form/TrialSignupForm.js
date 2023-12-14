import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const FormStyles = styled.div`
  position: relative;
  color: #707481;
  background: #fff;
  padding: 40px;
  text-align: left;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
  .form-title {
    font-size: 31.1px;
    line-height: 41px;
  }
  label {
    font-size: 15px;
    line-height: 21px;

    font-weight: 600;
    color: #707481;
  }
  .focus label {
    color: #007bff;
  }
  .invalid label {
    color: #ff3b30;
  }
  .form-group {
    position: relative;
    label.mat-input-label {
      position: absolute;
      z-index: 0;
      top: 18px;
      left: 15px;
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      transform-origin: left top;
      pointer-events: none;
    }
  }
  .form-control {
    position: relative;
    z-index: 10;
    font-size: 15px;
    height: 56px;
    max-width: 100%;
    border: 1px solid #eaeaec;
    border-radius: 0;
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05) !important;
    &:focus {
      box-shadow: unset;
      border-color: #007bff !important;
      box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
    }
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    background-color: transparent;
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
      transform: translate(0, -28px) scale(0.75);
      background: #fff;
      padding: 2px 10px;
      border: 1px solid #eaeaec;
      z-index: 20;
    }
    &:focus + label.mat-input-label {
      background: #007bff;
      color: #fff;
      border-color: #007bff;
    }
  }
  .react-tel-input {
    input.form-control {
      width: 100% !important;
    }
    .flag-dropdown {
      z-index: 30;
    }
  }

  &.hero-form {
    background: #fff;
    padding: 35px 24px 32px;
    .btn {
      width: 100%;
    }
  }

  label {
    font-size: 15px;
    line-height: 21px;

    font-weight: 600;
    color: #707481;
    &.mat-label {
      top: 0;
      left: 0;
      position: absolute;
      transform: translate(50px, 16px) scale(1);
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      z-index: 0;
    }
  }
  .phone-wrapper {
    position: relative;
    &.filled {
      .mat-label {
        transform: translate(-6px, -12px) scale(0.75);
        background: #fff;
        padding: 2px 10px;
        border: 1px solid #eaeaec;
        z-index: 10;
      }
      &.active .mat-label {
        background: #0b7bff;
        color: #fff;
      }
    }
    .special-label {
      display: none;
    }
  }
  .sticky-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 -15px 20px 0 rgba(0, 0, 0, 0.1);
    transition: 0.7s cubic-bezier(0.19, 1, 0.22, 1);
    transform: translateY(130%);
    &.is-away {
      transform: translateY(0);
    }
    a {
      width: 100%;
    }
  }
`;
export const FormRow = styled(Form.Row)`
  flex-wrap: nowrap;
  padding: 0px 5px;
  gap: 15px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 0px;
  }
`;
export const PrivacyPolicy = styled.h6`
  font-weight: normal;

  font-size: 0.8rem !important;
  margin-top: 1rem;
  margin-bottom: 0 !important;
  line-height: 1.1rem;
`;
export const NetworkError = styled.div`
  color: #ff6259;
  margin: 16px 0px;
  font-size: 16px;
`;
