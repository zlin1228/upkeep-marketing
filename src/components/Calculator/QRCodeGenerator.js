import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Form, Button } from 'react-bootstrap';

const QRCodeGenerator = props => {
  const { t } = useTranslation();
  const [validated, setValidated] = useState(false);
  const [codeArray, setCodeArray] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const param = form.param.value;
    const param_arr = param.split(',');
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setCodeArray(param_arr);
    setValidated(true);
  };
  return (
    <Calculator className={props.className}>
      <div className="form-wrapper">
        <Form validated={validated} onSubmit={handleSubmit} noValidate>
          <Form.Group controlId="num-order">
            <Form.Label>
              {t('Input or paste your serial number(s) here...')}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="9"
              placeholder={t('Input or paste your serial number(s) here...')}
              name="param"
              required
            />
          </Form.Group>
          <div>
            <Button variant="primary" type="submit">
              {t('Generate')}
            </Button>
          </div>
        </Form>
        {codeArray.length > 0 && (
          <div className="result-wrapper row">
            {codeArray.map((code, i) => {
              return (
                <div className="code-item" key={'code' + i}>
                  <img
                    src={`https://chart.googleapis.com/chart?cht=qr&chs=150x150&choe=UTF-8&chld=L|0&chl=${code}`}
                    alt={'code' + i}
                  />
                  <p>{code}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Calculator>
  );
};

export default QRCodeGenerator;

export const Calculator = styled.div`
  max-width: 770px;
  width: 100%;
  margin: 10px auto 50px;
  padding: 30px 40px 40px;
  background: #fff;
  box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
  transform: translateY(-50px);
  h4 {
    text-align: center;
    margin-bottom: 0;
  }
  .cal-desc {
    color: #5b5e6d;
    font-style: italic;
    font-size: 14px;
    margin-bottom: 20px;
    text-align: center;
  }
  label {
    font-size: 15px;
    font-weight: 500;
  }
  input {
    font-size: 15px;
  }
  textarea {
    font-size: 15px;
    border-radius: 0;
    &::placeholder {
      color: #a9acb1;
      opacity: 1;
    }
  }
  .result-wrapper {
    margin-top: 20px;
    text-align: center;
    .calc-value {
      font-weight: bold;
      font-size: 1.1em;
      color: #007bff;
    }
  }
  .code-item {
    margin: 15px;
  }
  .btn {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
