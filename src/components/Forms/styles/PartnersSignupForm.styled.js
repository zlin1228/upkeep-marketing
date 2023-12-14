import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 570px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin: 0px auto;
  background: #ffffff;
  border: 1px solid #e6f2ff;
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  border-radius: 4px;
  ${props =>
    props.loading === 'true'
      ? `.loader { display: block; } form { display: none; }`
      : `.loader { display: none; } form { display: flex; }`}

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;
export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  label {
    position: relative;
    font-size: 15px;
    line-height: 21px;

    font-weight: 600;
    color: #707481;
    margin: 0px;
    .astericks::before {
      width: 100px;
      height: fit-content;
      content: '*';
      color: #992019;
      position: absolute;
      top: 19.75px;
      left: 8.75px;
      font-size: 12px;
    }
    .form-control:focus + .astericks {
      display: none;
    }
    .invalid-feedback {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: #992019;
    }
  }
  input,
  select,
  textarea,
  .react-tel-input {
    width: 100%;
    height: 46px;
    -webkit-appearance: none;
    appearance: none;
    -webkit-focus-ring-color: none;
    outline: none;
    background-color: #ffffff;
    &.form-control {
      position: relative;
      display: block;
      width: 100%;
      height: 44px;
      padding: 12px 64px 12px 16px;
      margin: 0.5rem auto;
      background: #ffffff;
      border: 1px solid #eaeaec !important;
      border-radius: 6px;
      box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
      z-index: 10;

      font-size: 13px;
      line-height: 13px;
      color: #515667;
      &:focus {
        box-shadow: unset;
        border: 1px solid #006de6 !important;
        box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
        &::placeholder {
          color: #006de6 !important;
        }
      }
      background-repeat: no-repeat;
      background-position: right calc(0.375em + 0.1875rem) center;
      background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
      background-color: transparent;
      &.is-invalid {
        border-color: #992019 !important;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23992019' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        &::placeholder {
          color: #992019 !important;
        }
      }
      &.is-valid {
        border-color: #004a99 !important;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23004a99' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        &::placeholder {
          color: #004a99 !important;
        }
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
    .flag-dropdown {
      z-index: 30;
      display: none;
    }
    .special-label {
      display: none;
    }
    .invalid-feedback {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: #992019;
    }
  }
  .react-tel-input {
    height: auto;
    .astericks::before {
      width: 100px;
      height: fit-content;
      content: '*';
      color: #992019;
      position: absolute;
      top: 19.75px;
      left: 8.75px;
      font-size: 12px;
    }
    .form-control:focus + .astericks {
      display: none;
    }
  }
  input[type='submit'] {
    margin: 8px 0px;
  }
`;
export const NetworkError = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 9px;
  color: #992019;
  padding: 0.5rem;
`;
export const PrivacyPolicy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
  input[type='checkbox'] {
    appearance: auto;
    -webkit-appearance: checkbox;
    height: fit-content;
    min-height: 13px;
    margin: 3px 16px 0px 6px;
    cursor: pointer;
  }
  h6 {
    font-weight: normal;

    font-size: 0.8rem !important;
    margin-top: 0px;
    margin-bottom: 0 !important;
    line-height: 1.1rem;
  }
`;
