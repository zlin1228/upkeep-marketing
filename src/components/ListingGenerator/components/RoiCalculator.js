import React from 'react';
import ROIHero from '../../ROICalculator/components/ROHero';
import ROICalculatorv2 from '../../ROICalculator/components/ROICalculator';

const RoiCalculator = () => (
  <>
    <ROIHero theme="dark" className="page_banner" />
    <ROICalculatorv2 />
  </>
);

export default RoiCalculator;
