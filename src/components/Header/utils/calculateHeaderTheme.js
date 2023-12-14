const DEFAULT_THEME = 'Fill - Light';

const HERO_THEME_MAP = {
  Grid: 'Transparent - Dark',
  'Grid-Dark': 'Transparent - Light',
  'Grid-DarkBlue': 'Transparent - Light',
  Dark: 'Transparent - Light',
  Light: 'Transparent - Dark',
  Mixed: 'Transparent - Dark',
  Blue: 'Transparent - Light',
  Red: 'Transparent - Light',
  'Red-Light': 'Transparent - Dark',
  'Light-Gradient-Grid': 'Transparent - Dark',
};

const HERO_VARIANTS_MAP = {
  'home-page': 'Transparent - Dark',
  'learning-listing': 'Transparent - Dark',
  'resource-library': 'Transparent - Dark',
  'blog-listing': 'Transparent - Dark',
  'reviews-listing': 'Transparent - Dark',
  'roi-calculator': 'Transparent - Dark',
  'events-listing': 'Transparent - Dark',
  'downloads-listing': 'Transparent - Dark',
};

const NON_HERO_MAP = {
  DatoCmsFullWidthBanner: 'Transparent - Dark',
  DatoCmsPricingComponent: 'Transparent - Dark',
  DatoCmsEdgeHero: 'Transparent - Dark',
};

const calculateHeaderTheme = components => {
  if (!components) return DEFAULT_THEME;

  const nonHeroComponent = components.find(
    c => c?.internal?.type in NON_HERO_MAP
  );

  if (nonHeroComponent) {
    return NON_HERO_MAP[nonHeroComponent?.internal?.type] || DEFAULT_THEME;
  }

  const heroComponent = components.find(
    c => c?.internal?.type === 'DatoCmsHeroComponent'
  );

  const { internal, variant, theme } = heroComponent || {};

  return (
    HERO_VARIANTS_MAP[internal?.type] ||
    HERO_VARIANTS_MAP[variant] ||
    HERO_THEME_MAP[theme] ||
    DEFAULT_THEME
  );
};

export default calculateHeaderTheme;
