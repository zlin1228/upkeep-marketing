const createPayloadForPardot = data => ({
  email: data?.email,
  firstname: data?.firstname,
  lastname: data?.lastname,
  phone: data?.phone,
  companyname: data?.companyname,
  jobtitle: data?.jobtitle,
  companysize: data?.companysize,
  numberofusers: data?.numberofusers,
  industry: data?.industry,
  industrydetail: data?.industrydetail,
  country: data?.country,
  state: data?.state,
});

export default createPayloadForPardot;
