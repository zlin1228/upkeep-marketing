import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Form, Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import { formData } from './formData';

const MaintenanceCalculator = ({ type }) => {
  const { t } = useTranslation();
  const [validated, setValidated] = useState(false);
  const [calc, setCalc] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    let param1 = form.param0.value;
    let param2 = form.param1.value;
    let param3 = form.param2?.value;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    let calVal = 0;
    if (
      type === 'compliance' ||
      type === 'downtime' ||
      type === 'quality' ||
      type === 'planned'
    ) {
      calVal = (param1 * 100) / param2;
      setCalc(Math.round(calVal * 100) / 100);
    } else if (type === 'availability') {
      calVal = ((param1 - param2) * 100) / param1;
      setCalc(Math.round(calVal * 100) / 100);
    } else if (type === 'efficiency') {
      calVal = (param1 * param2 * 1000) / param3;
      setCalc(Math.round(calVal * 100) / 100);
    } else if (type === 'effectiveness') {
      calVal = (param1 * param2 * param3) / 10000;
      setCalc(Math.round(calVal * 100) / 100);
    } else if (type === 'repair' || type === 'failure') {
      calVal = param1 / param2;
      setCalc(Math.round(calVal * 100) / 100);
    }
    return;
  };
  return (
    <Calculator>
      <h4>{formData[type].title(t)}</h4>
      <div className="cal-desc">[{formData[type].desc(t)}]</div>
      <div className="form-wrapper">
        <Form validated={validated} onSubmit={handleSubmit} noValidate>
          {formData[type].inputs.map((input, i) => {
            return (
              <Form.Group controlId="num-order" key={'formgroup_' + type + i}>
                <TextField
                  type="number"
                  label={input.label(t)}
                  variant="outlined"
                  name={'param' + i}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid number
                </Form.Control.Feedback>
              </Form.Group>
            );
          })}
          <div className="text-center">
            <Button variant="primary" type="submit">
              {formData[type].submit(t)}
            </Button>
          </div>
        </Form>
        {!isNaN(parseFloat(calc)) && parseFloat(calc) !== 0 && (
          <div className="result-wrapper">
            {formData[type].result(t)}{' '}
            <span className="calc-value">
              {calc}
              {formData[type].unit(t)}
            </span>
            .
          </div>
        )}
      </div>
    </Calculator>
  );
};

export default MaintenanceCalculator;

export const Calculator = styled.div`
  width: 500px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 50px 30px;
  background: #fff;
  box-shadow: 0 2px 8px 0 #00000029;
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
  .result-wrapper {
    margin-top: 20px;
    text-align: center;
    .calc-value {
      font-weight: bold;
      font-size: 1.1em;
      color: #007bff;
    }
  }
  .MuiFormControl-root {
    width: 100%;
  }
  button {
    margin-top: 10px;
    width: 100%;
  }
`;
