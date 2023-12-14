import GoogleLogo from '../assets/logo/google-logo.svg';
import CapterraLogo from '../assets/logo/capterra-logo.svg';
import SoftwareAdviceLogo from '../assets/logo/software-advice-logo.svg';
import G2Logo from '../assets/logo/G2-crowd-logo.png';

export default {
  heading:
    '<h3><span style="color: #cce5ff;">Streamline your maintenance</span> and operations team with UpKeep.</h3>',
  subhead: `
    <p>
      Maintenance shouldn&rsquo;t mean guesswork and paperwork. UpKeep
      makes it simple to see where everything stands, all in one
      place. That means less guesswork and more time to focus on what
      matters.
    </p>
    <ul>
    <li class="p1">
      <strong>Prioritize work orders</strong> with scheduled tasks
      on the move
      <br />
      <ul></ul>
    </li>
    <li class="p1">
      <strong>Reduce equipment downtime</strong> with preventive
      maintenance checklists
      <br />
      <ul></ul>
    </li>
    <li class="p1">
      <strong>Increase asset lifespace</strong> with powerful data
      and metrics
      <br />
      <ul></ul>
    </li>
    <li class="p1">
      <strong>Enhance team communication</strong> with detailed
      asset histories
      <br />
      <ul></ul>
    </li>
    </ul>
    `,
  socialProof: {
    showHeadingKicker: false,
    theme: 'Full Color',
    socialProof: [
      {
        internalName: 'Google Logo',
        image: {
          url: GoogleLogo,
        },
      },
      {
        internalName: 'Capterra Logo',
        image: {
          url: CapterraLogo,
        },
      },
      {
        internalName: 'Software Advice Logo',
        image: {
          url: SoftwareAdviceLogo,
        },
      },
      {
        internalName: 'G2 Logo',
        image: {
          url: G2Logo,
        },
      },
    ],
  },
};
