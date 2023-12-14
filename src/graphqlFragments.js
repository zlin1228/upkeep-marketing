import { graphql } from 'gatsby';

// ------------------- System ------------------- //

export const datoCmsAsset = graphql`
  fragment datoCmsAsset on DatoCmsAsset {
    __typename
    gatsbyImageData(imgixParams: { fm: "webp", auto: "compress" })
    url
    height
    width
    filename
  }
`;

// ------------------- Section ------------------- //

export const layoutSectionQuery = graphql`
  fragment datoCmsSectionLayout on DatoCmsSectionLayout {
    internalName
    id: sectionId
    desktopPaddingTop
    desktopPaddingBottom
    tabletPaddingTop
    tabletPaddingBottom
    mobilePaddingTop
    mobilePaddingBottom
  }
`;

// ------------------- Molecules ------------------- //

export const callToActionMoleculeQuery = graphql`
  fragment datoCmsCallToAction on DatoCmsCallToAction {
    id
    internalName
    renderLightbox: openLightbox
    lightbox {
      ...datoCmsLightbox
    }
    label(locale: $language, fallbackLocales: "en")
    url
  }
`;

export const companyMoleculeQuery = graphql`
  fragment datoCmsCompany on DatoCmsCompany {
    id
    originalId
    name
    maintenanceTeamSize
    employees
    logo {
      ...datoCmsWebsiteImage
    }
    lightLogo {
      ...datoCmsWebsiteImage
    }
    icon {
      ...datoCmsWebsiteImage
    }
  }
`;

export const defaultCardMoleculeQuery = graphql`
  fragment datoCmsCardComponent on DatoCmsCardComponent {
    id
    theme
    alignment
    fontAwesomeIcon
    badge(locale: $language, fallbackLocales: "en")
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    thumbnail {
      ...datoCmsWebsiteImage
    }
    callToAction {
      ...datoCmsCallToAction
    }
  }
`;

export const industryMoleculeQuery = graphql`
  fragment datoCmsIndustry on DatoCmsIndustry {
    id
    name(locale: $language, fallbackLocales: "en")
    slug
    iconColor
    fontAwesome
    thumbnail {
      ...datoCmsWebsiteImage
    }
  }
`;

export const fullWidthTestimonialQuery = graphql`
  fragment datoCmsFullWidthTestimonial on DatoCmsFullWidthTestimonial {
    id: originalId
    __typename
    internal {
      type
    }
    internalName
    quote(locale: $language, fallbackLocales: "en")
    company {
      ...datoCmsCompany
    }
    person {
      ...datoCmsPerson
    }
    image {
      ...datoCmsFileField
    }
  }
`;

export const lightboxMoleculeQuery = graphql`
  fragment datoCmsLightbox on DatoCmsLightbox {
    id
    content {
      ...datoCmsWebsiteForm
    }
  }
`;

export const listItemMoleculeQuery = graphql`
  fragment datoCmsMoleculeListItem on DatoCmsMoleculeListItem {
    id: originalId
    __typename
    internal {
      type
    }
    internalName
    heading
    subhead
    icon
    callToAction {
      ...datoCmsCallToAction
    }
  }
`;

export const navItemMoleculeQuery = graphql`
  fragment datoCmsNavItem on DatoCmsNavItem {
    id
    name(locale: $language, fallbackLocales: "en")
    navItemType
    url
    menu {
      id
      internalName
      menuCard {
        id
        label(locale: $language, fallbackLocales: "en")
        description(locale: $language, fallbackLocales: "en")
        url
        fontAwesomeIcon
        image {
          ...datoCmsWebsiteImage
        }
      }
      menuItem {
        id
        name(locale: $language, fallbackLocales: "en")
        navLink {
          id
          label(locale: $language, fallbackLocales: "en")
          description(locale: $language, fallbackLocales: "en")
          url
          fontAwesomeIcon
          iconColor
          badge(locale: $language, fallbackLocales: "en")
        }
      }
    }
  }
`;

export const personMoleculeQuery = graphql`
  fragment datoCmsPerson on DatoCmsPerson {
    id
    originalId
    internalName
    firstName
    lastName
    role
    headshot {
      ...datoCmsWebsiteImage
    }
    company {
      ...datoCmsCompany
    }
  }
`;

export const simpleTestimonialMoleculeQuery = graphql`
  fragment datoCmsSimpleTestimonial on DatoCmsSimpleTestimonial {
    id: originalId
    __typename
    internal {
      type
    }
    internalName
    quote
    author {
      ...datoCmsPerson
    }
  }
`;

export const singleAssetMoleculeQuery = graphql`
  fragment datoCmsFileField on DatoCmsFileField {
    __typename
    gatsbyImageData(imgixParams: { fm: "webp", auto: "compress" })
    url
    alt
    title
    height
    width
    filename
  }
`;

export const statisticMoleculeQuery = graphql`
  fragment datoCmsStatisticsMolecule on DatoCmsStatisticsMolecule {
    id: originalId
    __typename
    internal {
      type
    }
    internalName
    statistics {
      id
      internalName
      heading(locale: $language, fallbackLocales: "en")
      subhead(locale: $language, fallbackLocales: "en")
    }
  }
`;

export const testimonialMoleculeQuery = graphql`
  fragment datoCmsTestimonial on DatoCmsTestimonial {
    id: originalId
    __typename
    internalName
    internal {
      type
    }
    title(locale: $language, fallbackLocales: "en")
    quote(locale: $language, fallbackLocales: "en")
    source(locale: $language, fallbackLocales: "en")
    hideStars
    company {
      ...datoCmsCompany
    }
    person {
      ...datoCmsPerson
    }
    button {
      ...datoCmsCallToAction
    }
  }
`;

export const verticalSliderSlideMoleculeQuery = graphql`
  fragment datoCmsVerticalSliderSlide on DatoCmsVerticalSliderSlide {
    id
    internalName
    headingKicker
    heading
    subhead {
      value
      blocks {
        id: originalId
        __typename
        percentageAmount
        description
      }
      links {
        id: originalId
        __typename
        internalName
        title
        quote
        company {
          id
          name
          logo {
            ...datoCmsWebsiteImage
          }
        }
      }
    }
    button {
      ...datoCmsCallToAction
    }
    image {
      id
      ...datoCmsWebsiteImage
    }
  }
`;

export const websiteImageMoleculeQuery = graphql`
  fragment datoCmsWebsiteImage on DatoCmsWebsiteImage {
    id
    internal {
      type
    }
    internalName
    image {
      ...datoCmsFileField
    }
  }
`;

export const websiteFormMoleculeQuery = graphql`
  fragment datoCmsWebsiteForm on DatoCmsWebsiteForm {
    id
    internalName
    internal {
      type
    }
    __typename
    variant
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    callToAction(locale: $language, fallbackLocales: "en")
    webinarId
    pardotFormHandler
    livestormFormEmbed
  }
`;

export const websiteVideoMoleculeQuery = graphql`
  fragment datoCmsWebsiteVideo on DatoCmsWebsiteVideo {
    id
    internal {
      type
    }
    internalName
    youtubeUrl
    videoThumbnail {
      id
      ...datoCmsWebsiteImage
    }
  }
`;

// ------------------- Components ------------------- //

export const allComponentsQuery = graphql`
  fragment datoCmsUnionForDatoCmsWebsitePageComponents on DatoCmsUnionForDatoCmsWebsitePageComponents {
    ... on DatoCmsAccordionComponent {
      ...datoCmsAccordionComponent
    }
    ... on DatoCmsAnnouncementBarComponent {
      ...datoCmsAnnouncementBarComponent
    }
    ... on DatoCmsBenefitsTableComponent {
      ...datoCmsBenefitsTableComponent
    }
    ... on DatoCmsCalloutComponent {
      ...datoCmsCalloutComponent
    }
    ... on DatoCmsCardDeckComponent {
      ...datoCmsCardDeckComponent
    }
    ... on DatoCmsCareersTable {
      ...datoCmsCareersTable
    }
    ... on DatoCmsCaseStudyComponent {
      ...datoCmsCaseStudyComponent
    }
    ... on DatoCmsConversionPanelComponent {
      ...datoCmsConversionPanelComponent
    }
    ... on DatoCmsComponentDownloadApp {
      ...datoCmsComponentDownloadApp
    }
    ... on DatoCmsEdgeConversionPanel {
      ...datoCmsEdgeConversionPanel
    }
    ... on DatoCmsEdgeHero {
      ...datoCmsEdgeHero
    }
    ... on DatoCmsComponentEdgeIllustration {
      ...datoCmsComponentEdgeIllustration
    }
    ... on DatoCmsEdgeSupportCardDeck {
      ...datoCmsEdgeSupportCardDeck
    }
    ... on DatoCmsExitIntentComponent {
      ...datoCmsExitIntentComponent
    }
    ... on DatoCmsGridComponent {
      ...datoCmsGridComponent
    }
    ... on DatoCmsHeader {
      ...datoCmsHeader
    }
    ... on DatoCmsFaqComponent {
      ...datoCmsFaqComponent
    }
    ... on DatoCmsFeaturedNewsComponent {
      ...datoCmsFeaturedNewsComponent
    }
    ... on DatoCmsFeaturesPanel {
      ...datoCmsFeaturesPanel
    }
    ... on DatoCmsFullWidthBanner {
      ...datoCmsFullWidthBanner
    }
    ... on DatoCmsFooterComponent {
      ...datoCmsFooterComponent
    }
    ... on DatoCmsHeroComponent {
      ...datoCmsHeroComponent
    }
    ... on DatoCmsHopscotchComponent {
      ...datoCmsHopscotchComponent
    }
    ... on DatoCmsIconGridComponent {
      ...datoCmsIconGridComponent
    }
    ... on DatoCmsIntegrationPanelComponent {
      ...datoCmsIntegrationPanelComponent
    }
    ... on DatoCmsComponentLearningCenterCardDeck {
      ...datoCmsComponentLearningCenterCardDeck
    }
    ... on DatoCmsListingComponent {
      ...datoCmsListingComponent
    }
    ... on DatoCmsComponentOffsetGrid {
      ...datoCmsComponentOffsetGrid
    }
    ... on DatoCmsOffsetSwitcherComponent {
      ...datoCmsOffsetSwitcherComponent
    }
    ... on DatoCmsPartnersForm {
      ...datoCmsPartnersForm
    }
    ... on DatoCmsPillarEmbedComponent {
      ...datoCmsPillarEmbedComponent
    }
    ... on DatoCmsPricingComponent {
      ...datoCmsPricingComponent
    }
    ... on DatoCmsRichTextComponent {
      ...datoCmsRichTextComponent
    }
    ... on DatoCmsReviewBarComponent {
      ...datoCmsReviewBarComponent
    }
    ... on DatoCmsSlideboxComponent {
      ...datoCmsSlideboxComponent
    }
    ... on DatoCmsSlider {
      ...datoCmsSlider
    }
    ... on DatoCmsSocialProofComponent {
      ...datoCmsSocialProofComponent
    }
    ... on DatoCmsStatsBarComponent {
      ...datoCmsStatsBarComponent
    }
    ... on DatoCmsStructuredTextComponent {
      ...datoCmsStructuredTextComponent
    }
    ... on DatoCmsSwitcherComponent {
      ...datoCmsSwitcherComponent
    }
    ... on DatoCmsTeamMembersComponent {
      ...datoCmsTeamMembersComponent
    }
    ... on DatoCmsTrustBarComponent {
      ...datoCmsTrustBarComponent
    }
    ... on DatoCmsTestimonialCarousel {
      ...datoCmsTestimonialCarousel
    }
    ... on DatoCmsTestimonialSlider {
      ...datoCmsTestimonialSlider
    }
    ... on DatoCmsVerticalSliderComponent {
      ...datoCmsVerticalSliderComponent
    }
    ... on DatoCmsVideoTestimonialsComponent {
      ...datoCmsVideoTestimonialsComponent
    }
    ... on DatoCmsVideoTestimonialSlider {
      ...datoCmsVideoTestimonialSlider
    }
  }
`;

export const accordionComponentQuery = graphql`
  fragment datoCmsAccordionComponent on DatoCmsAccordionComponent {
    id
    internal {
      type
    }
    layout
    showParallaxGrid
    showHeadingKicker
    headingKickerColor
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryCallToAction {
      ...datoCmsCallToAction
    }
    secondaryCallToAction {
      ...datoCmsCallToAction
    }
    accordion(locale: $language, fallbackLocales: "en") {
      id
      showFeaturedContent
      subhead
      heading
      featuredContent {
        ...datoCmsWebsiteImage
      }
    }
  }
`;

export const announcementBarComponentQuery = graphql`
  fragment datoCmsAnnouncementBarComponent on DatoCmsAnnouncementBarComponent {
    id
    internal {
      type
    }
    internalName
    theme
    variant
    theme
    icon
    body
    cta {
      label
      url
    }
  }
`;

export const benefitsTableComponentQuery = graphql`
  fragment datoCmsBenefitsTableComponent on DatoCmsBenefitsTableComponent {
    id
    internal {
      type
    }
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    disclaimer(locale: $language, fallbackLocales: "en")
    benefitCards {
      themeColor
      heading(locale: $language, fallbackLocales: "en")
      subhead(locale: $language, fallbackLocales: "en")
      benefitItem(locale: $language, fallbackLocales: "en") {
        heading
        subhead
      }
    }
  }
`;

export const calloutComponentQuery = graphql`
  fragment datoCmsCalloutComponent on DatoCmsCalloutComponent {
    id
    internal {
      type
    }
    backgroundColor
    headingKicker
    heading
    subhead
    calloutItems {
      heading
      subhead
      image {
        ...datoCmsFileField
      }
      callToAction {
        ...datoCmsCallToAction
      }
    }
  }
`;

export const cardDeckComponentQuery = graphql`
  fragment datoCmsCardDeckComponent on DatoCmsCardDeckComponent {
    id
    internal {
      type
    }
    variant
    showParallaxGrid
    offsetCards
    infiniteSlider
    backgroundColor
    headingAlignment
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryButton: callToAction {
      ...datoCmsCallToAction
    }
    secondaryButton: secondaryCallToAction {
      ...datoCmsCallToAction
    }
    card {
      ...datoCmsCardComponent
    }
  }
`;

export const caseStudyComponentQuery = graphql`
  fragment datoCmsCaseStudyComponent on DatoCmsCaseStudyComponent {
    id
    internalName(locale: $language, fallbackLocales: "en")
    internal {
      type
    }
    theme
    reversed
    fullWidthImage
    headingKicker(locale: $language, fallbackLocales: "en")
    headingKickerColor
    secondaryHeadingKicker(locale: $language, fallbackLocales: "en")
    secondaryHeadingKickerColor
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    callToAction {
      ...datoCmsCallToAction
    }
    author {
      ...datoCmsPerson
    }
    featuredImage {
      ...datoCmsWebsiteImage
    }
  }
`;

export const conversionPanelComponentQuery = graphql`
  fragment datoCmsConversionPanelComponent on DatoCmsConversionPanelComponent {
    id
    internal {
      type
    }
    variant
    theme
    layout
    addOns
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    fallbackText(locale: $language, fallbackLocales: "en")
    fontAwesomeIcon
    callToAction {
      ... on DatoCmsCallToAction {
        ...datoCmsCallToAction
      }
      ... on DatoCmsWebsiteForm {
        ...datoCmsWebsiteForm
      }
    }
    secondaryButton {
      ...datoCmsCallToAction
    }
    showFreeTrialLink
    conversionForm: form {
      ...datoCmsWebsiteForm
    }
    showTrustbar
    trustbarHeading
    logos {
      ...datoCmsWebsiteImage
    }
  }
`;

export const downloadAppComponentQuery = graphql`
  fragment datoCmsComponentDownloadApp on DatoCmsComponentDownloadApp {
    id
    internal {
      type
    }
    heading
    subhead
    callToAction {
      ...datoCmsCallToAction
    }
    featuredImage {
      ...datoCmsFileField
    }
  }
`;

export const edgeConversionPanelComponentQuery = graphql`
  fragment datoCmsEdgeConversionPanel on DatoCmsEdgeConversionPanel {
    id
    internal {
      type
    }
    internalName
    theme
    headingKicker
    heading
    subhead
    callToAction {
      ...datoCmsCallToAction
    }
  }
`;

export const edgeHeroComponentQuery = graphql`
  fragment datoCmsEdgeHero on DatoCmsEdgeHero {
    id
    internal {
      type
    }
    headingKicker
    heading
    subhead
    primaryButton {
      ...datoCmsCallToAction
    }
    backgroundImage {
      ...datoCmsFileField
    }
  }
`;

export const edgeIllustrationComponentQuery = graphql`
  fragment datoCmsComponentEdgeIllustration on DatoCmsComponentEdgeIllustration {
    id
    internal {
      type
    }
    internalName
    heading
    subhead
    listItem {
      ...datoCmsMoleculeEdgeIllustrationItem
    }
  }
`;

export const edgeIllustrationItemQuery = graphql`
  fragment datoCmsMoleculeEdgeIllustrationItem on DatoCmsMoleculeEdgeIllustrationItem {
    id
    internal {
      type
    }
    internalName
    showArrows
    arrowColor
    eyebrow
    heading
    subhead
    image {
      ...datoCmsWebsiteImage
    }
  }
`;

export const edgeSupportCardDeckComponentQuery = graphql`
  fragment datoCmsEdgeSupportCardDeck on DatoCmsEdgeSupportCardDeck {
    id
    internal {
      type
    }
    internalName
    theme
    heading
    subhead
    supportCards {
      id
      heading
      subhead
      callToAction {
        ...datoCmsCallToAction
      }
    }
  }
`;

export const exitIntentComponentQuery = graphql`
  fragment datoCmsExitIntentComponent on DatoCmsExitIntentComponent {
    id
    internal {
      type
    }
    internalName
    heading
    subhead
    form
    formLabel
    formHandler
    button
    label
    calltoaction
    link {
      ...datoCmsCallToAction
    }
    image {
      ...datoCmsWebsiteImage
    }
    downloadableAsset {
      url
    }
  }
`;

export const faqComponentQuery = graphql`
  fragment datoCmsFaqComponent on DatoCmsFaqComponent {
    id
    internal {
      type
    }
    headingKicker
    heading
    subhead
    primaryCallToAction {
      ...datoCmsCallToAction
    }
    secondaryCallToAction {
      ...datoCmsCallToAction
    }
    faqs {
      question
      answer
    }
  }
`;

export const featuredNewsComponentQuery = graphql`
  fragment datoCmsFeaturedNewsComponent on DatoCmsFeaturedNewsComponent {
    id
    internal {
      type
    }
    internalName
    heading
    callToAction {
      ...datoCmsCallToAction
    }
    news {
      title
      callToAction {
        ...datoCmsCallToAction
      }
      source {
        logo {
          ...datoCmsWebsiteImage
        }
      }
    }
  }
`;

export const featuresPanelComponentQuery = graphql`
  fragment datoCmsFeaturesPanel on DatoCmsFeaturesPanel {
    id
    internal {
      type
    }
    internalName
    backgroundColor
    showHeadingKicker
    headingKicker
    headingKickerColor
    heading
    subhead
    callToAction {
      ...datoCmsCallToAction
    }
    features {
      id
      heading
      headingKicker
      subhead
      callToAction {
        ...datoCmsCallToAction
      }
      featureImage {
        ...datoCmsWebsiteImage
      }
    }
  }
`;

export const fullWidthBannerComponentQuery = graphql`
  fragment datoCmsFullWidthBanner on DatoCmsFullWidthBanner {
    internalName
    internal {
      type
    }
    backgroundColor
    showHeadingKicker
    headingKickerIcon
    headingIconColor
    headingKicker
    headingKickerColor
    heading
    subhead
    showFreeTrialLink
    callToAction {
      ...datoCmsCallToAction
    }
    secondaryCallToAction {
      ...datoCmsCallToAction
    }
    showStatsBar
    stats {
      id
      percentageAmount
      description
    }
    showSocialProof
    socialProofLogos {
      ...datoCmsWebsiteImage
    }
    showLottieAnimations
    lottieAnimationLeft {
      url
    }
    lottieAnimationRight {
      url
    }
    showBackgroundImages
    imageLeft {
      ...datoCmsWebsiteImage
    }
    imageRight {
      ...datoCmsWebsiteImage
    }
  }
`;

export const footerComponentQuery = graphql`
  fragment datoCmsFooterComponent on DatoCmsFooterComponent {
    id
    internal {
      type
    }
    menu {
      menuItem {
        id
        label(locale: $language, fallbackLocales: "en")
        childMenuItem {
          id
          label(locale: $language, fallbackLocales: "en")
          icon: fontAwesome
          badge
          callToAction {
            ...datoCmsCallToAction
          }
        }
      }
    }
  }
`;

export const gridComponentQuery = graphql`
  fragment datoCmsGridComponent on DatoCmsGridComponent {
    id
    internal {
      type
    }
    theme
    fullWidth
    showParallaxGrid
    backgroundImage {
      ...datoCmsWebsiteImage
    }
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryCallToAction {
      ...datoCmsCallToAction
    }
    secondaryCallToAction {
      ...datoCmsCallToAction
    }
    fullwidthImage
    image {
      ...datoCmsWebsiteImage
    }
    video {
      ...datoCmsWebsiteVideo
    }
    contentBlock {
      ... on DatoCmsContentBlockComponent {
        ...datoCmsContentBlockComponent
      }
      ... on DatoCmsComponentSwitchback {
        ...datoCmsComponentSwitchback
      }
    }
  }
`;

export const headerComponentQuery = graphql`
  fragment datoCmsHeader on DatoCmsHeader {
    id
    internal {
      type
    }
    internalName
    navItems {
      ...datoCmsNavItem
    }
  }
`;

export const heroComponentQuery = graphql`
  fragment datoCmsHeroComponent on DatoCmsHeroComponent {
    id
    internal {
      type
    }
    variant
    theme
    showParallaxGrid
    hideBreadcrumbs
    backgroundImage {
      url
    }
    headingKicker(locale: $language, fallbackLocales: "en")
    headingSize
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    disclaimer(locale: $language, fallbackLocales: "en")
    callToAction {
      ... on DatoCmsCallToAction {
        ...datoCmsCallToAction
      }
      ... on DatoCmsWebsiteForm {
        ...datoCmsWebsiteForm
      }
    }
    secondCallToAction {
      ...datoCmsCallToAction
    }
    formCallToAction {
      label
      form {
        ...datoCmsWebsiteForm
      }
    }
    showTrustBar
    trustBar {
      ...datoCmsTrustBarComponent
    }
    showSocialProof
    heroSocialProof {
      ...datoCmsSocialProofComponent
    }
    showCardDeck
    card {
      ...datoCmsCardComponent
    }
    showPopupVideo
    videoModalComponent {
      ...datoCmsVideoModalComponent
    }
    featuredImage {
      ...datoCmsWebsiteImage
    }
    multipleImages {
      ...datoCmsWebsiteImage
    }
    featuredContent {
      ... on DatoCmsWebsiteImage {
        ...datoCmsWebsiteImage
      }
      ... on DatoCmsWebsiteVideo {
        ...datoCmsWebsiteVideo
      }
      ... on DatoCmsWebsiteForm {
        ...datoCmsWebsiteForm
      }
      ... on DatoCmsVideoModalComponent {
        ...datoCmsVideoModalComponent
      }
    }
    featuredBlogPost {
      ...datoCmsBlogPost
    }
    featuredLearningArticles {
      ...datoCmsLearningPost
    }
    featuredPodcast {
      podcastVideo {
        id
        websiteVideo {
          youtubeUrl
          videoThumbnail {
            image {
              alt
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export const hopscotchComponentQuery = graphql`
  fragment datoCmsHopscotchComponent on DatoCmsHopscotchComponent {
    id
    internal {
      type
    }
    heading
    subhead
    hopscotchItems {
      id
      internalName
      image {
        alt
        gatsbyImageData
      }
    }
  }
`;

export const iconGridComponentQuery = graphql`
  fragment datoCmsIconGridComponent on DatoCmsIconGridComponent {
    id
    internal {
      type
    }
    icons {
      ...datoCmsWebsiteImage
    }
    subhead
    primaryCallToAction {
      ...datoCmsCallToAction
    }
  }
`;

export const integrationsPanelComponentQuery = graphql`
  fragment datoCmsIntegrationPanelComponent on DatoCmsIntegrationPanelComponent {
    id
    internal {
      type
    }
    internalName
    variant
    backgroundColor
    showHeadingKicker
    headingKickerColor
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryCallToAction {
      ...datoCmsCallToAction
    }
    image {
      ...datoCmsWebsiteImage
    }
    featuredIntegrations {
      backgroundColor
      headingKickerColor
      headingKicker
      heading
      callToAction {
        ...datoCmsCallToAction
      }
      icon {
        ...datoCmsWebsiteImage
      }
    }
  }
`;

export const componentLearningCenterCardDeck = graphql`
  fragment datoCmsComponentLearningCenterCardDeck on DatoCmsComponentLearningCenterCardDeck {
    id
    internal {
      type
    }
    internalName
    eyebrow(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryButton: button {
      ...datoCmsCallToAction
    }
    cardDecks {
      ...datoCmsItemLearningCenterCardDeck
    }
  }
`;

export const itemLearningCenterCardDeck = graphql`
  fragment datoCmsItemLearningCenterCardDeck on DatoCmsItemLearningCenterCardDeck {
    id
    internal {
      type
    }
    internalName
    label(locale: $language, fallbackLocales: "en")
    cards {
      ...datoCmsCardComponent
    }
  }
`;

export const listingComponentQuery = graphql`
  fragment datoCmsListingComponent on DatoCmsListingComponent {
    id
    listingType
    internal {
      type
    }
  }
`;

export const offsetSwitcherComponentQuery = graphql`
  fragment datoCmsOffsetSwitcherComponent on DatoCmsOffsetSwitcherComponent {
    id
    internal {
      type
    }
    internalName
    headingKicker
    heading
    subhead
    primaryButton {
      ...datoCmsCallToAction
    }
    secondaryButton {
      ...datoCmsCallToAction
    }
    offsetSwitcherCategories {
      id
      categoryTitle
      offsetSwitcherSlides {
        id
        fontAwesomeIcon
        heading
        subhead
        description
        callToAction {
          ...datoCmsCallToAction
        }
        image {
          ...datoCmsWebsiteImage
        }
      }
    }
  }
`;

export const partnersFormComponentQuery = graphql`
  fragment datoCmsPartnersForm on DatoCmsPartnersForm {
    id
    internal {
      type
    }
    heading
    subhead
    successMessage
  }
`;

export const pillarEmbedComponentQuery = graphql`
  fragment datoCmsPillarEmbedComponent on DatoCmsPillarEmbedComponent {
    id
    internal {
      type
    }
    showTableOfContents
    showSocialLinks
    showSubscriptionCard
    showToolsCard
    showForesterCard
    structuredText: content(locale: $language, fallbackLocales: "en") {
      value
      blocks
      links {
        ... on DatoCmsWebsiteImage {
          id: originalId
          internal {
            type
          }
          internalName
          image {
            ...datoCmsFileField
          }
        }
        ... on DatoCmsWebsiteVideo {
          id: originalId
          internal {
            type
          }
          internalName
          youtubeUrl
          videoThumbnail {
            id
            ...datoCmsWebsiteImage
          }
        }
        ... on DatoCmsCardDeckComponent {
          id: originalId
          internal {
            type
          }
          variant
          showParallaxGrid
          offsetCards
          infiniteSlider
          backgroundColor
          headingAlignment
          headingKicker
          heading
          subhead
          callToAction {
            ...datoCmsCallToAction
          }
          card {
            ...datoCmsCardComponent
          }
        }
        ... on DatoCmsConversionBox {
          id: originalId
          internal {
            type
          }
          theme
          showUpkeepLogo
          showSubscriptionForm
          heading
        }
      }
    }
  }
`;

export const pricingComponentQuery = graphql`
  fragment datoCmsPricingComponent on DatoCmsPricingComponent {
    id
    internalName
    internal {
      type
    }
    variant
    headingKicker
    heading(locale: $language, fallbackLocales: "en")
    subhead
    headerCard {
      ...datoCmsMoleculeListItem
    }
    pricingGroups {
      ...datoCmsPricingGroup
    }
    pricingCards {
      ...datoCmsPricingTier
    }
  }
`;

export const pricingFeatureQuery = graphql`
  fragment datoCmsPricingFeature on DatoCmsPricingFeature {
    id
    name(locale: $language, fallbackLocales: "en")
    note(locale: $language, fallbackLocales: "en")
    pricingFeatureItems {
      ...datoCmsPricingFeatureItem
    }
  }
`;

export const pricingFeatureItemQuery = graphql`
  fragment datoCmsPricingFeatureItem on DatoCmsPricingFeatureItem {
    id
    name(locale: $language, fallbackLocales: "en")
    tooltip(locale: $language, fallbackLocales: "en")
    availablePricingTiers {
      ...datoCmsPricingTier
    }
    text(locale: $language, fallbackLocales: "en") {
      id
      text
      pricingTier {
        ...datoCmsPricingTier
      }
    }
  }
`;

export const pricingGroupQuery = graphql`
  fragment datoCmsPricingGroup on DatoCmsPricingGroup {
    id
    internalName
    hidePricingCards
    name(locale: $language, fallbackLocales: "en")
    pricingTiers {
      ...datoCmsPricingTier
    }
    pricingTable {
      ...datoCmsPricingTable
    }
  }
`;

export const pricingTierQuery = graphql`
  fragment datoCmsPricingTier on DatoCmsPricingTier {
    id
    internalName
    theme
    mostPopular
    price
    eyebrow(locale: $language, fallbackLocales: "en")
    name(locale: $language, fallbackLocales: "en")
    description(locale: $language, fallbackLocales: "en")
    features(locale: $language, fallbackLocales: "en")
    callToAction {
      ...datoCmsCallToAction
    }
  }
`;

export const pricingTableQuery = graphql`
  fragment datoCmsPricingTable on DatoCmsPricingTable {
    id
    internalName
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    callToAction {
      ...datoCmsCallToAction
    }
    pricingFeatures {
      ...datoCmsPricingFeature
    }
  }
`;

export const richTextComponentQuery = graphql`
  fragment datoCmsRichTextComponent on DatoCmsRichTextComponent {
    id
    internal {
      type
    }
    theme
    headingKicker
    heading
    subhead
    primaryButton {
      label
      url
    }
    secondaryButton {
      label
      url
    }
    content {
      ... on DatoCmsRichText {
        content
        internal {
          type
        }
      }
    }
  }
`;

export const reviewBarComponentQuery = graphql`
  fragment datoCmsReviewBarComponent on DatoCmsReviewBarComponent {
    id
    internal {
      type
    }
    showHeadingKicker
    headingKicker
    headingKickerColor
    heading
    subhead
    theme
    showSocialStars
    socialProofIcon {
      id
      internalName
      ...datoCmsWebsiteImage
    }
  }
`;

export const slideboxItemQuery = graphql`
  fragment datoCmsSlideboxCardItem on DatoCmsSlideboxCardItem {
    id
    internalName
    theme
    showPledgeIcon
    hideEyebrowText
    eyebrow(locale: $language, fallbackLocales: "en")
    headingSize
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    callToAction {
      ...datoCmsCallToAction
    }
    image {
      ...datoCmsWebsiteImage
    }
  }
`;

export const slideboxCardQuery = graphql`
  fragment datoCmsSlideboxCard on DatoCmsSlideboxCard {
    id
    internalName
    hideText
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    icon
    iconColor
    items {
      ...datoCmsSlideboxCardItem
    }
  }
`;

export const slideboxComponentQuery = graphql`
  fragment datoCmsSlideboxComponent on DatoCmsSlideboxComponent {
    id
    internal {
      type
    }
    internalName
    layoutSection {
      ...datoCmsSectionLayout
    }
    theme
    logo {
      ...datoCmsWebsiteImage
    }
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryCta {
      ...datoCmsCallToAction
    }
    secondaryCta {
      ...datoCmsCallToAction
    }
    cards {
      ...datoCmsSlideboxCard
    }
  }
`;

export const sliderQuery = graphql`
  fragment datoCmsSlider on DatoCmsSlider {
    id
    internal {
      type
    }
    variant
    theme
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryCta {
      ...datoCmsCallToAction
    }
    secondaryCta {
      ...datoCmsCallToAction
    }
    slides {
      id
      headingKicker
      typeTag(locale: $language, fallbackLocales: "en")
      heading(locale: $language, fallbackLocales: "en")
      subhead(locale: $language, fallbackLocales: "en")
      icon {
        ...datoCmsFileField
      }
      image {
        ...datoCmsFileField
      }
      callToAction {
        ...datoCmsCallToAction
      }
    }
  }
`;

export const socialProofComponentQuery = graphql`
  fragment datoCmsSocialProofComponent on DatoCmsSocialProofComponent {
    id
    internal {
      type
    }
    variant
    theme
    backgroundColor
    containerBackgroundColor
    showParallaxGrid
    heading(locale: $language, fallbackLocales: "en")
    headingKicker(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryCallToAction {
      ...datoCmsCallToAction
    }
    secondaryCallToAction {
      ...datoCmsCallToAction
    }
    socialProof {
      ...datoCmsWebsiteImage
    }
    showReviewsSection
    reviewsText
    reviewLogos {
      ...datoCmsWebsiteImage
    }
  }
`;

export const statsBarComponentQuery = graphql`
  fragment datoCmsStatsBarComponent on DatoCmsStatsBarComponent {
    id
    internalName
    internal {
      type
    }
    variant
    theme
    showTrustbar
    trustbar {
      ...datoCmsTrustBarComponent
    }
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    callToAction {
      ...datoCmsCallToAction
    }
    statistic {
      id
      heading(locale: $language, fallbackLocales: "en")
      subhead(locale: $language, fallbackLocales: "en")
    }
    structuredDisclaimer: disclaimer(locale: $language, fallbackLocales: "en") {
      value
      blocks
      links
    }
  }
`;

export const structuredTextComponentQuery = graphql`
  fragment datoCmsStructuredTextComponent on DatoCmsStructuredTextComponent {
    id
    internal {
      type
    }
    structuredText: content {
      value
      blocks
      links {
        ... on DatoCmsWebsiteImage {
          id: originalId
          internal {
            type
          }
          internalName
          image {
            ...datoCmsFileField
          }
        }
        ... on DatoCmsWebsiteVideo {
          id: originalId
          internal {
            type
          }
          internalName
          youtubeUrl
          videoThumbnail {
            id
            ...datoCmsWebsiteImage
          }
        }
        ... on DatoCmsCallToAction {
          id: originalId
          internal {
            type
          }
          label
          url
        }
        ... on DatoCmsContentSquareOptOut {
          id: originalId
          internal {
            type
          }
          label
        }
      }
    }
  }
`;

export const deprecatedSwitchbackComponentQuery = graphql`
  fragment datoCmsContentBlockComponent on DatoCmsContentBlockComponent {
    id
    __typename
    reverse
    showSubscriptionLinks
    backgroundColor
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    callToAction {
      ...datoCmsCallToAction
    }
    secondaryCallToAction {
      ...datoCmsCallToAction
    }
    tertiaryCallToAction {
      ...datoCmsCallToAction
    }
    featuredContent {
      ... on DatoCmsVideoModalComponent {
        ...datoCmsVideoModalComponent
      }
      ... on DatoCmsWebsiteImage {
        ...datoCmsWebsiteImage
      }
      ... on DatoCmsWebsiteForm {
        ...datoCmsWebsiteForm
      }
      ... on DatoCmsWebsiteVideo {
        ...datoCmsWebsiteVideo
      }
      ... on DatoCmsLottieAnimation {
        id
        internal {
          type
        }
        internalName
        lottie {
          url
        }
      }
    }
    showCardDeck
    cards {
      ...datoCmsCardComponent
    }
  }
`;

export const itemSwitcherSlideQuery = graphql`
  fragment datoCmsItemSwitcherSlide on DatoCmsItemSwitcherSlide {
    id
    internalName
    label(locale: $language, fallbackLocales: "en")
    controlIcon: icon
    controlIconColor: iconColor
    heading(locale: $language, fallbackLocales: "en")
    subheadText: subhead(locale: $language, fallbackLocales: "en") {
      value
      blocks
      links
    }
    callToAction {
      ...datoCmsCallToAction
    }
    image {
      ...datoCmsWebsiteImage
    }
  }
`;

export const switcherComponentQuery = graphql`
  fragment datoCmsSwitcherComponent on DatoCmsSwitcherComponent {
    id
    internal {
      type
    }
    internalName
    theme
    backgroundColor
    switchbackSwitcherTheme
    variant
    reverse
    logo {
      ...datoCmsWebsiteImage
    }
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryCallToAction {
      ...datoCmsCallToAction
    }
    secondaryCallToAction {
      ...datoCmsCallToAction
    }
    slides {
      ...datoCmsItemSwitcherSlide
    }
    switcherSlide(locale: $language, fallbackLocales: "en") {
      id
      internalName
      showLottieAnimation
      lottieAnimation {
        url
      }
      showFeaturedImage
      featuredImage {
        ...datoCmsWebsiteImage
      }
      heading
      subhead
      callToAction {
        ...datoCmsCallToAction
      }
    }
    cardSlide(locale: $language, fallbackLocales: "en") {
      id
      heading
      subhead
      tag
      features
      callToAction {
        ...datoCmsCallToAction
      }
      icon {
        ...datoCmsWebsiteImage
      }
    }
    iconSlide(locale: $language, fallbackLocales: "en") {
      id
      heading
      subhead
      callToAction {
        ...datoCmsCallToAction
      }
      iconColor
      icon
      image {
        ...datoCmsWebsiteImage
      }
    }
    switchbackSlide(locale: $language, fallbackLocales: "en") {
      id
      fontAwesomeIcon
      heading
      subhead
      callToAction {
        ...datoCmsCallToAction
      }
      image {
        ...datoCmsFileField
      }
    }
    horizontalSlide(locale: $language, fallbackLocales: "en") {
      id
      navTitle
      heading
      subhead
      primaryCta {
        ...datoCmsCallToAction
      }
      secondaryCta {
        ...datoCmsCallToAction
      }
      featuredImage {
        ...datoCmsFileField
      }
    }
    tabSwitcherSlide {
      id
      headingKicker
      heading
      subheading
      callToAction {
        ...datoCmsCallToAction
      }
      image {
        ...datoCmsWebsiteImage
      }
      tabLabel
    }
  }
`;

export const switchbackComponentQuery = graphql`
  fragment datoCmsComponentSwitchback on DatoCmsComponentSwitchback {
    id
    __typename
    internal {
      type
    }
    internalName
    layout
    reverse
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    structuredText: subhead(locale: $language, fallbackLocales: "en") {
      value
      links {
        ... on DatoCmsWebsiteImage {
          id: originalId
          __typename
          internal {
            type
          }
          internalName
          image {
            ...datoCmsFileField
          }
        }
        ... on DatoCmsWebsiteVideo {
          id: originalId
          __typename
          internal {
            type
          }
          internalName
          youtubeUrl
          videoThumbnail {
            id
            ...datoCmsWebsiteImage
          }
        }
        ... on DatoCmsMoleculeListItem {
          __typename
          ...datoCmsMoleculeListItem
        }
        ... on DatoCmsStatisticsMolecule {
          ...datoCmsStatisticsMolecule
        }
        ... on DatoCmsTestimonial {
          id: originalId
          __typename
          internalName
          internal {
            type
          }
          title(locale: $language, fallbackLocales: "en")
          quote(locale: $language, fallbackLocales: "en")
          source(locale: $language, fallbackLocales: "en")
          hideStars
          company {
            ...datoCmsCompany
          }
          person {
            ...datoCmsPerson
          }
          button {
            ...datoCmsCallToAction
          }
        }
      }
    }
    primaryButton {
      ...datoCmsCallToAction
    }
    secondaryButton {
      ...datoCmsCallToAction
    }
    primaryLink {
      ...datoCmsCallToAction
    }
    reference {
      ... on DatoCmsWebsiteImage {
        __typename
        ...datoCmsWebsiteImage
      }
      ... on DatoCmsWebsiteVideo {
        __typename
        ...datoCmsWebsiteVideo
      }
    }
  }
`;

export const teamMemberComponentQuery = graphql`
  fragment datoCmsTeamMembersComponent on DatoCmsTeamMembersComponent {
    id
    internal {
      type
    }
    heading
    subhead
    teamMembers {
      id
      name
      role
      bio
      linkedinProfile
      image {
        ...datoCmsWebsiteImage
      }
    }
  }
`;

export const testimonialCarouselComponentQuery = graphql`
  fragment datoCmsTestimonialCarousel on DatoCmsTestimonialCarousel {
    id
    internal {
      type
    }
    layout
    showHeadingKicker
    headingKicker
    heading
    subhead
    callToAction {
      ...datoCmsCallToAction
    }
    testimonial {
      id
      source
      person {
        firstName
        lastName
        role
      }
      company {
        name
      }
      quote
      title
    }
    videoTestimonial {
      id
      label
      heading
      subhead
      videoCallToAction: callToAction {
        ...datoCmsCallToAction
      }
      logo {
        ...datoCmsWebsiteImage
      }
      video {
        ...datoCmsWebsiteVideo
      }
    }
    showSocialProof
    socialProof {
      ...datoCmsWebsiteImage
    }
  }
`;

export const testimonialSliderComponentQuery = graphql`
  fragment datoCmsTestimonialSlider on DatoCmsTestimonialSlider {
    id
    internal {
      type
    }
    internalName
    variant
    backgroundColor
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    showSocialProof
    showBackgroundGrid
    testimonialSocialProof: socialProof {
      socialProof {
        ...datoCmsWebsiteImage
      }
    }
    primaryButton {
      ...datoCmsCallToAction
    }
    secondaryButton {
      ...datoCmsCallToAction
    }
    testimonials {
      ...datoCmsTestimonial
    }
    fullWidthTestimonials {
      ...datoCmsFullWidthTestimonial
    }
    simpleTestimonials {
      ...datoCmsSimpleTestimonial
    }
  }
`;

export const trustBarComponentQuery = graphql`
  fragment datoCmsTrustBarComponent on DatoCmsTrustBarComponent {
    id
    internal {
      type
    }
    variant
    theme
    backgroundColor
    showGridBackground
    sectionLayout {
      ...datoCmsSectionLayout
    }
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryButton {
      ...datoCmsCallToAction
    }
    secondaryButton {
      ...datoCmsCallToAction
    }
    company {
      logo {
        ...datoCmsWebsiteImage
      }
      lightLogo {
        ...datoCmsWebsiteImage
      }
      grayLogo {
        ...datoCmsWebsiteImage
      }
      icon {
        ...datoCmsWebsiteImage
      }
    }
    iconRows {
      id
      icons {
        id
        name
        icon {
          ...datoCmsWebsiteImage
        }
        callToAction {
          ...datoCmsCallToAction
        }
      }
    }
    trustbarTestimonial: testimonial {
      quote
      person {
        firstName
        lastName
        role
      }
      industry {
        name
      }
      button {
        label
        url
      }
    }
  }
`;

export const videoModalComponentQuery = graphql`
  fragment datoCmsVideoModalComponent on DatoCmsVideoModalComponent {
    id
    internal {
      type
    }
    label(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    videoCallToAction: callToAction {
      ...datoCmsCallToAction
    }
    logo {
      ...datoCmsWebsiteImage
    }
    video {
      ...datoCmsWebsiteVideo
    }
  }
`;

export const verticalSliderComponentQuery = graphql`
  fragment datoCmsVerticalSliderComponent on DatoCmsVerticalSliderComponent {
    id
    internal {
      type
    }
    variant
    internalName
    showControls
    headingKicker
    heading
    subhead
    verticalSlides {
      ...datoCmsVerticalSliderSlide
    }
  }
`;

export const videoTestimonialComponentQuery = graphql`
  fragment datoCmsVideoTestimonialsComponent on DatoCmsVideoTestimonialsComponent {
    id
    internal {
      type
    }
    internalName
    backgroundColor
    headingKicker(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    primaryButton {
      ...datoCmsCallToAction
    }
    secondaryButton {
      ...datoCmsCallToAction
    }
    videos {
      ...datoCmsVideoModalComponent
    }
  }
`;

export const videoTestimonialSliderQuery = graphql`
  fragment datoCmsVideoTestimonialSlider on DatoCmsVideoTestimonialSlider {
    id
    internal {
      type
    }
    internalName
    headingKicker
    heading
    subhead
    primaryButton {
      ...datoCmsCallToAction
    }
    secondaryButton {
      ...datoCmsCallToAction
    }
    videos {
      ...datoCmsVideoModalComponent
    }
  }
`;

export const careersTableQuery = graphql`
  fragment datoCmsCareersTable on DatoCmsCareersTable {
    internal {
      type
    }
    heading
  }
`;

// ------------------- Posts ------------------- //

export const blogPostQuery = graphql`
  fragment datoCmsBlogPost on DatoCmsBlogPost {
    id
    slug
    internalName(locale: $language, fallbackLocales: "en")
    indexable
    showTableOfContents
    publishDate(formatString: "LL")
    category {
      ...datoCmsBlogCategory
    }
    meta {
      publishedAt(formatString: "MMMM DD, YYYY")
    }
    metaTags(locale: $language, fallbackLocales: "en") {
      title
      description
      image {
        ...datoCmsAsset
      }
    }
    author {
      ...datoCmsPerson
    }
  }
`;

export const blogPostDetailQuery = graphql`
  fragment blogPostDetailQuery on DatoCmsBlogPost {
    id
    slug
    internalName(locale: $language, fallbackLocales: "en")
    indexable
    showTableOfContents
    publishDate(formatString: "LL")
    category {
      ...datoCmsBlogCategory
    }
    meta {
      publishedAt(formatString: "MMMM DD, YYYY")
    }
    metaTags(locale: $language, fallbackLocales: "en") {
      title
      description
      image {
        ...datoCmsAsset
      }
    }
    author {
      ...datoCmsPerson
    }
    content(locale: $language, fallbackLocales: "en") {
      ... on DatoCmsRichText {
        id
        content
      }
    }
    ...blogPostRecommendQuery
  }
`;

export const blogPostAuthorQuery = graphql`
  fragment blogPostAuthorQuery on DatoCmsBlogPost {
    id
    slug
    internalName(locale: $language, fallbackLocales: "en")
    indexable
    showTableOfContents
    publishDate(formatString: "LL")
    category {
      ...datoCmsBlogCategory
    }
    meta {
      publishedAt(formatString: "MMMM DD, YYYY")
    }
    metaTags(locale: $language, fallbackLocales: "en") {
      title
      description
      image {
        ...datoCmsAsset
      }
    }
  }
`;

export const blogPostRecommendQuery = graphql`
  fragment blogPostRecommendQuery on DatoCmsBlogPost {
    recommendPostsBottom(locale: $language, fallbackLocales: "en") {
      id
      slug
      internalName
      metaTags {
        title
        description
        image {
          ...datoCmsAsset
        }
      }
    }
  }
`;

export const blogCategoryQuery = graphql`
  fragment datoCmsBlogCategory on DatoCmsBlogCategory {
    slug
    internalName(locale: $language, fallbackLocales: "en")
    color
  }
`;

export const customerSuccessStoryQuery = graphql`
  fragment datoCmsCustomerSuccessStory on DatoCmsCustomerSuccessStory {
    id
    __typename
    slug
    internalName(locale: $language, fallbackLocales: "en")
    metaTags(locale: $language, fallbackLocales: "en") {
      title
      description
      image {
        ...datoCmsAsset
      }
      twitterCard
    }
    publishDate
    company {
      ...datoCmsCompany
    }
    industry {
      ...datoCmsIndustry
    }
    excerpt(locale: $language, fallbackLocales: "en")
    showShowcase
    showcase {
      showcaseItems {
        heading
        subhead
      }
    }
    hero {
      ...datoCmsHeroComponent
    }
    content(locale: $language, fallbackLocales: "en") {
      ... on DatoCmsRichText {
        id
        content
      }
    }
    recommendedPosts {
      id
      __typename
      internalName
      slug
      metaTags {
        title
        description
        image {
          ...datoCmsAsset
        }
        twitterCard
      }
      excerpt
      company {
        ...datoCmsCompany
      }
      industry {
        ...datoCmsIndustry
      }
    }
  }
`;

export const downloadPostQuery = graphql`
  fragment datoCmsDownload on DatoCmsDownload {
    id
    internalName
    slug
    indexable
    metaTags {
      title
      description
      image {
        ...datoCmsAsset
      }
    }
    meta {
      updatedAt(formatString: "LL")
    }
    gatedContent
    formHandler
    showTableOfContents
    downloadsType {
      id
      name
    }
    category {
      id
      name
      slug
    }
    author {
      ...datoCmsPerson
    }
    download {
      alt
      url
    }
    thumbnailImage {
      ...datoCmsFileField
    }
    title
    description
    structuredText: pageContent {
      value
      blocks
      links {
        ... on DatoCmsWebsiteImage {
          id: originalId
          internal {
            type
          }
          internalName
          image {
            ...datoCmsFileField
          }
        }
        ... on DatoCmsWebsiteVideo {
          id: originalId
          internal {
            type
          }
          internalName
          youtubeUrl
          videoThumbnail {
            id
            ...datoCmsWebsiteImage
          }
        }
        ... on DatoCmsConversionBox {
          id: originalId
          theme
          showUpkeepLogo
          showSubscriptionForm
          heading
        }
      }
    }
  }
`;

export const eventCategoryQuery = graphql`
  fragment datoCmsEventCategory on DatoCmsEventCategory {
    id
    internalName(locale: $language, fallbackLocales: "en")
    slug
  }
`;

export const eventRecommendedQuery = graphql`
  fragment datoCmsEventRecommended on DatoCmsEventPost {
    id
    slug
    title(locale: $language, fallbackLocales: "en")
    description(locale: $language, fallbackLocales: "en")
    thumbnailImage {
      ...datoCmsWebsiteImage
    }
  }
`;

export const eventPostQuery = graphql`
  fragment datoCmsEventPost on DatoCmsEventPost {
    id
    meta {
      publishedAt(formatString: "MMMM DD, YYYY")
    }
    internalName
    slug
    metaTags(locale: $language, fallbackLocales: "en") {
      title
      description
      image {
        url
      }
    }
    indexable
    eventStatus
    video {
      ...datoCmsWebsiteVideo
    }
    startDate(formatString: "MMMM Do YYYY")
    endDate(formatString: "MMMM Do YYYY")
    scheduleTime(locale: $language, fallbackLocales: "en")
    location(locale: $language, fallbackLocales: "en")
    duration(locale: $language, fallbackLocales: "en")
    eventRegistration {
      ... on DatoCmsCallToAction {
        id
        internal {
          type
        }
        label
        url
      }
      ... on DatoCmsWebsiteForm {
        id
        internal {
          type
        }
        heading(locale: $language, fallbackLocales: "en")
        subhead(locale: $language, fallbackLocales: "en")
        callToAction(locale: $language, fallbackLocales: "en")
        pardotFormHandler
        livestormFormEmbed
      }
    }
    eventType {
      internalName
    }
    category {
      ...datoCmsEventCategory
    }
    thumbnailImage {
      ...datoCmsWebsiteImage
    }
    authors {
      ...datoCmsPerson
    }
    title(locale: $language, fallbackLocales: "en")
    description(locale: $language, fallbackLocales: "en")
    content(locale: $language, fallbackLocales: "en")
    recommendedEvents {
      ...datoCmsEventRecommended
    }
  }
`;

export const integrationPostQuery = graphql`
  fragment datoCmsIntegration on DatoCmsIntegration {
    id
    internalName
    slug
    metaTags(locale: $language, fallbackLocales: "en") {
      title
      description
      image {
        ...datoCmsAsset
      }
    }
    headHtml
    footerHtml
    prefferedIntegration
    thumbnailImage {
      ...datoCmsFileField
    }
    category {
      ...datoCmsIntegrationCategory
    }
    content(locale: $language, fallbackLocales: "en") {
      ... on DatoCmsRichText {
        id
        content
      }
    }
    company {
      ...datoCmsCompany
    }
  }
`;

export const integrationCategoryQuery = graphql`
  fragment datoCmsIntegrationCategory on DatoCmsIntegrationCategory {
    originalId
    internalName(locale: $language, fallbackLocales: "en")
    slug
  }
`;

export const learningPostQuery = graphql`
  fragment datoCmsLearningPost on DatoCmsLearningPost {
    id
    internalName(locale: $language, fallbackLocales: "en")
    metaTags(locale: $language, fallbackLocales: "en") {
      title
      description
    }
    slug
    categories {
      ...datoCmsLearningCat
    }
  }
`;

export const learningDetailQuery = graphql`
  fragment learningDetailQuery on DatoCmsLearningPost {
    id
    internalName(locale: $language, fallbackLocales: "en")
    slug
    indexable
    metaTags(locale: $language, fallbackLocales: "en") {
      title
      description
      image {
        url
      }
    }
    categories {
      ...datoCmsLearningCat
    }
    post(locale: $language, fallbackLocales: "en")
    relatedPosts {
      ...datoCmsLearningPost
    }
  }
`;

export const learningPostCategory = graphql`
  fragment datoCmsLearningCat on DatoCmsLearningCat {
    id
    safeName
    name(locale: $language, fallbackLocales: "en")
    categoryType(locale: $language, fallbackLocales: "en")
  }
`;

export const offsetGridQuery = graphql`
  fragment datoCmsComponentOffsetGrid on DatoCmsComponentOffsetGrid {
    id
    internal {
      type
    }
    backgroundColor
    headingKicker
    heading
    subhead
    gridItems {
      ...datoCmsMoleculeListItem
    }
  }
`;

export const partnershipsPostQuery = graphql`
  fragment datoCmsPartnership on DatoCmsPartnership {
    id
    internalName
    slug
    category {
      ...datoCmsPartnershipCategory
    }
    company {
      name
      logo {
        image {
          alt
          gatsbyImageData
        }
      }
    }
  }
`;

export const partnershipsCategoryQuery = graphql`
  fragment datoCmsPartnershipCategory on DatoCmsPartnershipCategory {
    originalId
    internalName
    slug
  }
`;

export const pressReleasePostQuery = graphql`
  fragment datoCmsPressRelease on DatoCmsPressRelease {
    id
    title
    date(formatString: "YYYY")
    source {
      id
      name
      logo {
        ...datoCmsWebsiteImage
      }
    }
    callToAction {
      ...datoCmsCallToAction
    }
  }
`;

export const podcastPostQuery = graphql`
  fragment datoCmsPodcast on DatoCmsPodcast {
    id
    slug
    metaTags {
      title
      description
      image {
        ...datoCmsAsset
      }
    }
    indexable
    headingKicker
    heading
    subhead
    authorS {
      ...datoCmsPerson
    }
    meta {
      publishedAt(formatString: "MMMM DD, YYYY")
    }
    podcastVideo {
      websiteVideo {
        ...datoCmsWebsiteVideo
      }
    }
    summaryShowNotes
    fullTranscript
    audio
  }
`;

export const reviewPostQuery = graphql`
  fragment datoCmsCustomerReview on DatoCmsCustomerReview {
    id
    internalName
    source
    reviewSourceUrl
    rating
    product
    teamSize
    industry {
      id
      name
    }
    reviewer {
      id
      firstName
      lastName
      role
      company {
        id
        name
      }
    }
    title
    review
    keyFeatures
    video {
      id
      youtubeUrl
      videoThumbnail {
        ...datoCmsWebsiteImage
      }
    }
  }
`;

// ------------------- Pages / Templates ------------------- //

export const websitePageQuery = graphql`
  fragment datoCmsWebsitePage on DatoCmsWebsitePage {
    internalName
    metaTags {
      title
      description
      image {
        url
      }
    }
    indexable
    footerHtml
    canonicalUrl
    industry {
      name
    }
    productCategory {
      name
    }
    productFeature {
      name
    }
    topic {
      id
    }
    components {
      ...datoCmsUnionForDatoCmsWebsitePageComponents
    }
  }
`;

export const templateMaintenanceMavericksQuery = graphql`
  fragment datoCmsTemplateMaintenanceMaverick on DatoCmsTemplateMaintenanceMaverick {
    internalName
    slug
    metaTags {
      title
      description
      image {
        ...datoCmsAsset
      }
    }
    indexable
    headHtml
    footerHtml
    eyebrow(locale: $language, fallbackLocales: "en")
    heading(locale: $language, fallbackLocales: "en")
    subhead(locale: $language, fallbackLocales: "en")
    button {
      ...datoCmsCallToAction
    }
    media {
      ... on DatoCmsWebsiteImage {
        ...datoCmsWebsiteImage
      }
      ... on DatoCmsWebsiteVideo {
        ...datoCmsWebsiteVideo
      }
    }
    summary(locale: $language, fallbackLocales: "en") {
      value
      blocks
      links
    }
    transcript(locale: $language, fallbackLocales: "en") {
      value
      blocks
      links
    }
  }
`;

export const pillarPageTemplateQuery = graphql`
  fragment datoCmsPillarTemplate on DatoCmsPillarTemplate {
    internalName
    metaTags {
      title
      description
      image {
        url
      }
    }
    indexable
    components {
      ...datoCmsUnionForDatoCmsWebsitePageComponents
    }
  }
`;

export const pressReleaseQuery = graphql`
  fragment datoCmsPressRelease on DatoCmsPressRelease {
    id
    title
    date(formatString: "YYYY")
    source {
      id
      name
      logo {
        ...datoCmsWebsiteImage
      }
    }
    callToAction {
      ...datoCmsCallToAction
    }
  }
`;
