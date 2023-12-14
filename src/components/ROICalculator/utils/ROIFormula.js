export const calculateROI = data => {
  const formattedValues = removeDollarSign(data);
  const teamsize = Number(formattedValues.teamsize);
  const hourlywage = Number(formattedValues.hourlyRate);
  const downtimeCost = Number(formattedValues.hourlyCost);
  const downtimeHours = Number(formattedValues.downtimeHours);
  const numberOfBusinessDays = 252;
  const fiftyPercentSavings = 0.5;
  if (downtimeCost && downtimeHours) {
    const downtime = downtimeCost * downtimeHours * fiftyPercentSavings;
    const ROI = teamsize * hourlywage * 1 * numberOfBusinessDays;
    const result = ROI + downtime;
    return result
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const ROI = teamsize * hourlywage * 1 * numberOfBusinessDays;
  return ROI.toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const removeDollarSign = data => {
  const dataArray = Object.values(data);
  const values = dataArray.map(value => {
    if (value.includes('$')) {
      return value.split('$')[1];
    }
    return value;
  });
  const formattedValues = {
    teamsize: values[0],
    hourlyRate: values[1],
    hourlyCost: values[2],
    downtimeHours: values[3],
  };
  return formattedValues;
};
