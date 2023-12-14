import styled from 'styled-components';

export const FormStyles = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  margin: 0px;
  padding: 0px;
  form {
    width: 100%;
    max-width: 600px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(230, 242, 255);
    box-shadow: rgb(10 16 34 / 10%) 0px 2px 40px;
    border-radius: 4px;
    @media (max-width: 991px) {
      max-width: 100%;
      width: 100%;
    }
    h3 {
      font-weight: bold;
      font-size: 32;
      line-height: 40px;
      text-align: left;
      margin-bottom: 21px;
      span {
        color: #00254c;
      }
      @media (max-width: 499px) {
        font-size: 19px;
        line-height: 22px;
        text-align: center !important;
      }
    }
  }
  input {
    width: 100%;
    height: 46px;
    -webkit-appearance: none;
    appearance: none;
    -webkit-focus-ring-color: none;
    display: block;
    position: relative;
    z-index: 10;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #7e828a;
    height: 44px;
    padding: 10px 12px;
    margin: 4px auto 24px;
    background: #ffffff;
    border: 1px solid #a9acb1 !important;
    outline: none;
    box-sizing: border-box;
    border-radius: 3px;
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
  input[type='submit'] {
    height: auto;
    height: 44px;
    background: #006de6;
    color: white;
    border-radius: 6px;
    border: none !important;
    outline: none;
    padding: 0px;
    margin: 0px 0px 8px;
    &:hover {
      background: #0063ce;
    }
  }
  label {
    width: 100%;
    position: relative;
    font-size: 15px;
    line-height: 21px;

    font-weight: 600;
    color: #707481;
    padding: 0px;
    margin: 0px;
  }
  .focus label {
    color: #007bff;
  }
  .invalid label {
    color: #ff3b30;
  }
  .validation-feedback {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #992019;
    transform: translateY(-15px);
  }
  .error-msg {
    color: red;
    font-size: 10px;
  }
  .invalid-policy {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 9px;
    color: #992019;
    margin: 0px 0px 0px 3px;
  }
`;
export const PrivacyPolicy = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-start;
  padding: 8px 0px;
  margin: 0px auto;
  h6 {
    font-weight: normal;

    font-size: 0.8rem !important;
    margin-top: 0px;
    margin-bottom: 0 !important;
    line-height: 1.1rem;
  }
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
