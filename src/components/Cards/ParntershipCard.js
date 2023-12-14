import React from 'react';
import shortid from 'shortid';
import Image from '../Image/Image';
import CallToAction from '../CallToAction';
import { Frame, Logo } from '../../styles/Components/Cards/PartnershipCard';

const ParntershipCard = ({ component }) => (
  <Frame
    key={shortid.generate()}
    className={component.showflag ? 'show' : 'hide'}
  >
    <CallToAction url={`/partnerships/${component?.slug}`}>
      <Logo>
        <Image
          src={component?.logofluid || component?.logourl}
          alt="partner logo"
          classes="logo"
        />
      </Logo>
      <p>{component?.title}</p>
    </CallToAction>
  </Frame>
);

export default ParntershipCard;
