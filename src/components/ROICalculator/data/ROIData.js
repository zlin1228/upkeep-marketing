export const ROIData = [
  {
    question: t => t('How many people are on your team?'),
    required: true,
    value: 'teamsize',
    label: t => t('Team Size'),
    type: 'text',
    prompt: t =>
      t(
        'This includes all managers and employees, whether or not they have the potential to use or come in contact with the UpKeep app.'
      ),
  },
  {
    question: t => t(`What's the average hourly rate per team member?`),
    required: true,
    value: 'hourlyrate',
    label: t => t('Hourly Rate'),
    type: 'text',
    prompt: t =>
      t(
        'This is to be the calculated average. If you are not sure of the average hourly rate of your team members, enter the median amount.'
      ),
  },
  {
    question: t => t('What is the average hourly cost of downtime?'),

    required: false,
    value: 'hourlycost',
    label: t => t('Hourly Cost'),
    type: 'text',
    prompt: t =>
      t(
        'This is to be the calculated average. If you are not sure of the average hourly rate of downtime, enter the median amount.'
      ),
  },
  {
    question: t => t('How many hours of downtime do you have per year?'),
    required: false,
    value: 'downtimehours',
    label: t => t('Downtime Hours'),
    type: 'text',
    prompt: () => null,
  },
];
