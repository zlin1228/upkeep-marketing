import React from 'react';
import MaintenanceCalculator from '../../Calculator/MaintenanceCalculator';

const MaintenanceCalculators = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="compliance" />
      </div>
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="downtime" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="availability" />
      </div>
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="efficiency" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="quality" />
      </div>
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="effectiveness" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="repair" />
      </div>
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="failure" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-auto mb-5">
        <MaintenanceCalculator type="planned" />
      </div>
    </div>
  </div>
);

export default MaintenanceCalculators;
