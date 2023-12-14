const createPayloadForTrialSignUp = (data, location) => ({
  email: data?.email?.toLowerCase().trim(),
  password: data?.password?.replace(/%20/g, '+'),
  phoneNumber: data?.phone,
  platform: 'web',
  source: location,
  firstName: data?.firstname,
  lastName: data?.lastname,
  jobTitle: data?.jobtitle,
  companyName: data?.companyname,
});

export default createPayloadForTrialSignUp;
