const openSocialLink = url => {
  const left = (window.innerWidth - 570) / 2;
  const top = (window.innerHeight - 570) / 2;
  const params = `menubar=no,toolbar=no,status=no,width=570,height=570,top=${top},left=${left}`;
  window.open(url, 'NewWindow', params);
};

export default openSocialLink;
