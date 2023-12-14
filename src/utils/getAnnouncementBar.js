const getAnnouncementBar = componentsArray => {
  const announcementBar = componentsArray?.filter(
    component => component?.internal?.type === 'DatoCmsAnnouncementBarComponent'
  );
  if (announcementBar?.length > 0) return announcementBar;
  return false;
};

export default getAnnouncementBar;
