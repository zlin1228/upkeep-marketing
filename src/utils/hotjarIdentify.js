const hotjarIdentifyAPI = data => {
  if (typeof window !== `undefined`) {
    if (window.hj && typeof window.hj === 'function') {
      const userId = data.email || null;
      const userAttributes = {
        companyName: data.companyname || '',
        jobTitle: data.jobtitle || '',
        teamsize: data.teamsize || '',
        submissionURL: data.url || '',
      };
      window.hj('identify', userId, userAttributes);
    }
  }
};

export default hotjarIdentifyAPI;
