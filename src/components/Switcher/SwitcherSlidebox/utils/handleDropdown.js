const handleDropdown = ({
  index,
  activeDropdownIndex,
  setActiveDropdownIndex,
}) => {
  setActiveDropdownIndex(null);
  if (activeDropdownIndex === index) {
    return;
  }
  setTimeout(() => {
    setActiveDropdownIndex(index);
  }, 250);
};

export default handleDropdown;
