import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { ROIData } from '../data/ROIData';
import ROIFormGroup from './ROIFormGroup';
import {
  FrameWrapper,
  CalculatorFrame,
  CalculatedResult,
} from '../styles/ROICalculator';
import { calculateROI } from '../utils/ROIFormula';
import CallToAction from '../../CallToAction';

const ROICalculator = () => {
  const { t } = useTranslation();
  const [teamsize, setTeamsize] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [hourlyCost, setHourlyCost] = useState('');
  const [downtimeHours, setDowntimeHours] = useState('');
  const formData = { teamsize, hourlyRate, hourlyCost, downtimeHours };

  const setHandleInput = value => {
    switch (value) {
      case 'teamsize':
        return setTeamsize;
      case 'hourlyrate':
        return setHourlyRate;
      case 'hourlycost':
        return setHourlyCost;
      case 'downtimehours':
        return setDowntimeHours;
      default:
        break;
    }
  };

  const setInput = value => {
    switch (value) {
      case 'teamsize':
        return teamsize;
      case 'hourlyrate':
        return hourlyRate;
      case 'hourlycost':
        return hourlyCost;
      case 'downtimehours':
        return downtimeHours;
      default:
        break;
    }
  };
  return (
    <FrameWrapper>
      <CalculatorFrame>
        {ROIData.map(data => (
          <ROIFormGroup
            key={data.value}
            question={data.question(t)}
            required={data.required}
            value={data.value}
            label={data.label(t)}
            type={data.type}
            prompt={data.prompt(t)}
            input={setInput(data.value)}
            setInput={setHandleInput(data.value)}
          />
        ))}
        <CalculatedResult>
          <h3 className="results_kicker">{t('Projected yearly Savings')}</h3>
          <h1 className="results_amount">${calculateROI(formData)}</h1>
          <Link to="/demo" className="results_demoBtn">
            {t('Schedule a Tour')}
          </Link>
          <div className="w-100 d-flex justify-content-center">
            <CallToAction
              url="/demo"
              label={t('Free Trial Signup')}
              variant="Red-Arrow-Link"
              icon="fa-solid fa-chevron-right"
            />
          </div>
        </CalculatedResult>
      </CalculatorFrame>
    </FrameWrapper>
  );
};

export default ROICalculator;
