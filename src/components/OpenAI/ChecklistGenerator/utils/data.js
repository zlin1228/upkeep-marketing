export const formFields = [
  {
    type: 'select',
    name: 'checklistType',
    label: 'Select Checklist Type:',
    options: [
      { name: 'Select Checklist Type', value: '' },
      { name: 'Inspection', value: 'Inspection' },
      { name: 'Preventative Maintenance', value: 'Preventative Maintenance' },
      { name: 'Maintenance', value: 'Maintenance' },
      { name: 'Safety', value: 'Safety' },
      { name: 'Audit', value: 'Audit' },
    ],
  },
  {
    type: 'select',
    name: 'frequency',
    label: 'Select Frequency:',
    options: [
      { name: 'Select Frequency', value: '' },
      { name: 'Daily', value: 'Daily' },
      { name: 'Weekly', value: 'Weekly' },
      { name: 'Monthly', value: 'Monthly' },
      { name: 'Yearly', value: 'Yearly' },
    ],
  },
  {
    type: 'select',
    name: 'industry',
    label: 'Select an Industry:',
    options: [
      { name: 'Select Industry', value: '' },
      { name: 'Manufacturing', value: 'Manufacturing' },
      { name: 'Government', value: 'Government' },
      { name: 'Property Management', value: 'Property Management' },
      { name: 'Restaurant', value: 'restaurant' },
      { name: 'Fleet Management', value: 'Fleet Management' },
      {
        name: 'Food & Beverage Manufacturing',
        value: 'Food & Beverage Manufacturing',
      },
      { name: 'Facility Management', value: 'Facility Management' },
      { name: 'Agriculture', value: 'Agriculture' },
      { name: 'Hospitality', value: 'Hospitality' },
      { name: 'Church', value: 'Church' },
      { name: 'Non-Profit', value: 'Non-Profit' },
      { name: 'Energy & Utilities', value: 'Engergy & Utilities' },
      { name: 'Gym', value: 'Gym' },
      { name: 'Healthcare', value: 'Healthcare' },
      { name: 'School', value: 'School' },
      { name: 'Higher Education', value: 'Higher Education' },
    ],
  },
  {
    type: 'input',
    name: 'assetType',
    label: 'Enter Asset Type:',
    placeholder: 'e.g. Vehicle...',
  },
];

export const recommendations = [
  {
    checklistType: 'Inspection',
    frequency: 'Weekly',
    industry: 'Manufacturing',
    assetType: 'Conveyor Belt',
  },
  {
    checklistType: 'Preventative Maintenance',
    frequency: 'Monthly',
    industry: 'Property Management',
    assetType: 'HVAC System',
  },
  {
    checklistType: 'Inspection',
    frequency: 'Daily',
    industry: 'Facility Management',
    assetType: 'Elevator',
  },
  {
    checklistType: 'Maintenance',
    frequency: 'Monthly',
    industry: 'Hospitality',
    assetType: 'Generator',
  },
];
