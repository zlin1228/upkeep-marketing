const handleZoomInfo = async (formId, setLoading) => {
  const intervalId = setInterval(() => {
    if (window._zi?.formId === formId) {
      setLoading(false);
      clearInterval(intervalId);
    }
  }, 100);
  setTimeout(() => clearInterval(intervalId), 10000);
};

export default handleZoomInfo;
