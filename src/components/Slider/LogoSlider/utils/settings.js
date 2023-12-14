// note: can't use afterChange with adaptiveHeight due to bug
const basicSliderSettings = ({ setActiveSlide, setAnimateSlide }) => ({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  adaptiveHeight: false,
  beforeChange(current, newIndex) {
    setActiveSlide(newIndex);
    setAnimateSlide(newIndex);
  },
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        adaptiveHeight: true,
      },
    },
  ],
});

export default basicSliderSettings;
