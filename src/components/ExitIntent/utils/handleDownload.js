const handleDownload = (e, download) => {
  e.preventDefault();
  if (typeof window !== 'undefined' && download) {
    window.open(download, '_blank');
  }
};

export default handleDownload;
