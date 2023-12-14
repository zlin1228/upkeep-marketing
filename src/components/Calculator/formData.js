export const formData = {
  compliance: {
    title: t => t('Schedule Compliance Calculator'),
    desc: t =>
      t('# of completed scheduled WOs on time / total scheduled WOs * 100'),
    inputs: [
      {
        label: t => t('Number of completed scheduled work orders on time'),
      },
      {
        label: t => t('Total scheduled work orders'),
      },
    ],
    submit: t => t('Calculate Schedule Compliance'),
    result: t => t('Your schedule compliance is '),
    unit: () => '%',
  },
  downtime: {
    title: t => t('Equipment Downtime Calculator'),
    desc: t => t('(hours of downtime / total period measured) * 100'),
    inputs: [
      { label: t => t('Downtime (in hours)') },
      {
        label: t => t('Total Period Measured (in hours)'),
      },
    ],
    submit: t => t('Calculate Equipment Downtime'),
    result: t => t('Your Equipment Downtime is '),
    unit: () => '%',
  },
  availability: {
    title: t => t('Equipment Availability Calculator'),
    desc: t => t('(available time - planned downtime) / available time)'),
    inputs: [
      {
        label: t => t('Available Time (in hours)'),
      },
      {
        label: t => t('Planned Downtime (in hours)'),
      },
    ],
    submit: t => t('Calculate Equipment Availability'),
    result: t => t('Your equipment availability is '),
    unit: () => '%',
  },
  quality: {
    title: t => t('Rate of Quality Products Calculator'),
    desc: t => t('# units of acceptable quality / # units produced'),
    inputs: [
      {
        label: t => t('Number of units of acceptable quality'),
      },
      {
        label: t => t('Number of units produced'),
      },
    ],
    submit: t => t('Calculate Rate of Quality Products'),
    result: t => t('Your rate of quality products is '),
    unit: () => '%',
  },
  efficiency: {
    title: t => t('Equipment Performance Efficiency Calculator'),
    desc: t =>
      t('(# processed units * ideal cycle time) / actual operation time'),
    inputs: [
      {
        label: t => t('Number of processed units'),
      },
      {
        label: t => t('Ideal cycle time (minutes per unit)'),
      },
      {
        label: t => t('Actual operation time (in minutes)'),
      },
    ],
    submit: t => t('Calculate Equipment Performance Efficiency'),
    result: t => t('Your equipment performance efficiency is '),
    unit: () => '%',
  },
  effectiveness: {
    title: t => t('Overall Equipment Effectiveness Calculator'),
    desc: t => t('availability * performance * quality'),
    inputs: [
      {
        label: t => t('Equipment Availability %'),
      },
      {
        label: t => t('Equipment Performance Efficiency %'),
      },
      {
        label: t => t('Rate of Quality Products %'),
      },
    ],
    submit: t => t('Calculate Overall Equipment Effectiveness'),
    result: t => t('Your overall equipment effectiveness is '),
    unit: () => '%',
  },
  repair: {
    title: t => t('Mean Time To Repair (MTR) Calculator'),
    desc: t => t('total downtime / # occurrences of stoppages'),
    inputs: [
      {
        label: t => t('Total Downtime (in hours)'),
      },
      {
        label: t => t('Number of occurrences of stoppages'),
      },
    ],
    submit: t => t('Calculate Mean Time To Repair'),
    result: t => t('Your Mean Time To Repair is '),
    unit: t => t(' hours'),
  },
  failure: {
    title: t => t('Mean Time Between Failure (MTBF) Calculator'),
    desc: t => t('total uptime / # of breakdowns'),
    inputs: [
      {
        label: t => t('Total Uptime (in hours)'),
      },
      { label: t => t('Number of breakdowns') },
    ],
    submit: t => t('Calculate Mean Time Between Failure'),
    result: t => t('Your Mean Time Between Failure is '),
    unit: t => t(' hours'),
  },
  planned: {
    title: t => t('Planned Maintenance Percentage Calculator'),
    desc: t => t('(planned maintenance hours / total maintenance hours) * 100'),
    inputs: [
      {
        label: t => t('Planned Maintenance Hours'),
      },
      {
        label: t => t('Total Maintenance Hours'),
      },
    ],
    submit: t => t('Calculate Planned Maintenance Percentage'),
    result: t => t('Your Planned Maintenance Percentage is '),
    unit: () => '%',
  },
};
