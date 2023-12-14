import React from 'react';
import { useWindowSize } from 'react-use';

import Panels from './Panels';
import ComparePricing from './ComparePricing';

import { breakpointNumbers } from '../../../../../atoms/breakpoints';
import { Header, Wrapper } from '../styles/StickyNav.styled';

const StickyMenu = ({
  headingRef,
  selectedPackages,
  setSelectedPackages,
  scrolled,
  tiers,
}) => {
  const { width } = useWindowSize();
  const { xl } = breakpointNumbers;

  return (
    <Header ref={headingRef} className={scrolled ? 'scrolled' : ''}>
      <Wrapper length={tiers.length}>
        {width > xl && <Panels data={tiers} scrolled={scrolled} />}
        {width <= xl && (
          <ComparePricing
            scrolled={scrolled}
            selectedPackages={selectedPackages}
            setSelectedPackages={setSelectedPackages}
            tiers={tiers}
          />
        )}
      </Wrapper>
    </Header>
  );
};

export default StickyMenu;
