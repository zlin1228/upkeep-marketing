import React, { useState, useRef, useEffect } from 'react';
import { useWindowSize } from 'react-use';

import Icon from '../../../../molecules/Icon';

import HeroPricingPage from '../../../Hero/HeroPricingPage';
import Heading from './components/Heading';
import StickyNav from './components/StickyNav';
import Table from './components/Table';

import useParallaxEffect from '../../../../hooks/useParallaxEffect';
import { useUrlParams } from '../../../../hooks/useUrlParams';

import { color } from '../../../../atoms/colors';
import { breakpointNumbers } from '../../../../atoms/breakpoints';
import {
  BackgroundImage,
  Button,
  Overlay,
  Section,
  Wrapper,
} from './styles/index.styled';

const PricingComponent = ({
  headingKicker,
  heading,
  subhead,
  pricingGroups,
}) => {
  const [pricingGroup, setPricingGroup] = useState(pricingGroups[0]);
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [tableExpanded, setTableExpanded] = useState(false);

  const backgroundRef = useRef(null);
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  useParallaxEffect(backgroundRef);
  const { width } = useWindowSize();
  const { getParams } = useUrlParams();

  useEffect(() => {
    const handleScrollOrResize = () => {
      const rect = headingRef.current?.getBoundingClientRect();
      const scrollPos = window.scrollY || window.pageYOffset;

      if (rect && rect.top <= 100 && scrollPos > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  useEffect(() => {
    setTableExpanded(false);
  }, [pricingGroup]);

  useEffect(() => {
    const params = getParams();

    if (params?.filter) {
      setPricingGroup(
        pricingGroups.filter(
          group => group.name?.toLowerCase() === params.filter
        )[0]
      );
    }
  }, []);

  const { xl } = breakpointNumbers;

  return (
    <>
      <HeroPricingPage
        headingKicker={headingKicker}
        heading={heading}
        subhead={subhead}
        pricingGroups={pricingGroups}
        pricingGroup={pricingGroup}
        setPricingGroup={setPricingGroup}
      />
      <Section ref={sectionRef}>
        <BackgroundImage
          ref={backgroundRef}
          theme="dark"
          className="background-image"
          loading="eager"
        />
        <Heading data={pricingGroup?.pricingTable} />
        <Wrapper className={scrolled ? 'scrolled' : ''}>
          <StickyNav
            headingRef={headingRef}
            scrolled={scrolled}
            selectedPackages={selectedPackages}
            setSelectedPackages={setSelectedPackages}
            tiers={pricingGroup?.pricingTiers}
          />
          <Table
            features={pricingGroup?.pricingTable?.pricingFeatures}
            tiers={width > xl ? pricingGroup?.pricingTiers : selectedPackages}
            tableExpanded={tableExpanded}
            scrolled={scrolled}
          />
        </Wrapper>
        <Overlay tableExpanded={tableExpanded}>
          <Button
            type="button"
            onClick={() => {
              setTableExpanded(!tableExpanded);
              if (tableExpanded) {
                sectionRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            {tableExpanded ? 'See Less' : 'See Full Comparison'}
            <Icon
              id={`fa-solid fa-chevron-${tableExpanded ? 'up' : 'down'}`}
              width="18px"
              height="18px"
              fillColor={color.primary[700]}
            />
          </Button>
        </Overlay>
      </Section>
    </>
  );
};

export default PricingComponent;
