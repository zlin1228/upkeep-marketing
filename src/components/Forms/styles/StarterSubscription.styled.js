import styled from 'styled-components';

export const FormStyles = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: auto;
  padding: 0px 15px;
  @media (max-width: 991px) {
    padding: 15px 0px;
  }
  .error-msg {
    color: red;
    font-size: 10px;
  }
  form {
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    background: #ffffff;
    border: 1px solid #e6f2ff;
    box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
    border-radius: 4px;
    @media (max-width: 991px) {
      max-width: 100%;
      width: 100%;
    }
  }
  .form-title {
    font-size: 31.1px;
    line-height: 41px;
  }
  .form-row {
    display: flex;
    margin: 0px;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  input,
  select,
  textarea {
    height: 46px;
    -webkit-appearance: none;
    appearance: none;
    -webkit-focus-ring-color: none;
    outline: none;
    background-color: #ffffff;
  }
  .psuedo-astericks {
    color: #992019;
    position: absolute;
    top: 21.75px;
    left: 15.75px;
    font-size: 12px;
  }
  .form-control {
    display: block;
    position: relative;
    z-index: 10;

    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 13px;
    color: #515667;
    height: 44px;
    padding: 12px 64px 12px 16px;
    margin: 0.5rem auto;
    background: #ffffff;
    border: 1px solid #515667 !important;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05) !important;
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
  .invalid-feedback {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #992019;
  }
  input[type='email'] {
    width: 100%;
  }
  input[name='firstname'],
  input[name='lastname'],
  input[name='phone'],
  input[name='jobtitle'],
  input[name='companyname'],
  input[name='teamsize'] {
    width: 100%;
  }
  input[type='submit'] {
    width: 99%;
    height: auto;
    height: 44px;
    background: #006de6;
    border-radius: 6px;
    padding: 0px;
    margin: 0.5rem auto;
    &:hover {
      background: #0063ce;
    }
  }
  label[for='firstname'],
  label[for='lastname'],
  label[for='phone'],
  label[for='jobtitle'],
  label[for='companyname'],
  label[for='teamsize'] {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  label {
    position: relative;
    font-size: 15px;
    line-height: 21px;

    font-weight: 600;
    color: #707481;
    padding: 0px 4px;
    margin: 0px;
    .astericks::before {
      width: 100px;
      height: fit-content;
      content: '*';
      color: #992019;
      position: absolute;
      top: 19.75px;
      left: 13.75px;
      font-size: 12px;
    }
    .form-control:focus + .astericks {
      display: none;
    }
  }
  .focus label {
    color: #007bff;
  }
  .invalid label {
    color: #ff3b30;
  }

  /* React Tel Input */
  .react-tel-input {
    padding: 0px 4px;
    display: block;
    @media (max-width: 768px) {
      width: 100%;
    }

    input.form-control {
      display: block;
      width: 100% !important;
      position: relative;
      z-index: 10;

      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 13px;
      color: #515667;
      height: 44px;
      background: #ffffff;
      border: 1px solid #515667;
      box-sizing: border-box;
      border-radius: 6px;
      box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05) !important;
      &.is-invalid {
        border-color: #992019 !important;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23992019' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: 97% 12px;
        background-size: 17px;
      }
      &.is-valid {
        border-color: #004a99 !important;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23004a99' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: 97% 12px;
        background-size: 17px;
      }
    }
    .flag-dropdown {
      z-index: 30;
      display: none;
    }
    .special-label {
      display: none;
    }
  }

  .invalid-policy {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 9px;
    color: #992019;
    margin: 0px 0px 0px 3px;
  }

  /* Zoom Info Styling */
  form[data-zi-mapped-form]
    input:not([type='email']):not([type='submit']):not([type='password']):not([type='checkbox']):not([name='numberofusers']),
  .flag-dropdown {
    display: none;
  }

  form[data-zi-mapped-form] h6 {
    display: block !important;
  }

  form[data-zi-mapped-form] input[data-zi-input-enriched='false'] {
    display: block !important;
  }
  form[data-zi-mapped-form] input[data-zi-input-enriched='true'] {
    display: none;
  }

  /* Hidden Fields - All Forms */
  form[data-zi-mapped-form] input[name='country'],
  form[data-zi-mapped-form] input[name='state'],
  form[data-zi-mapped-form] input[name='industry'],
  form[data-zi-mapped-form] input[name='industrydetail'] {
    display: none !important;
  }

  /* Hidden Fields - Download Form */
  #download-form[data-zi-mapped-form] .react-tel-input {
    display: none !important;
  }

  #trial-form[data-zi-mapped-form] .policy-label {
    margin-left: 4px;
  }
`;
export const FreeTrialWrapper = styled.div`
  div:first-child {
    padding: 0px !important;
    margin: 8px 0px 0px 3px !important;
  }
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
export const NetworkError = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 9px;
  color: #992019;
  padding: 0.5rem;
`;
export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  .spinner-border {
    color: #007bff;
  }
`;
