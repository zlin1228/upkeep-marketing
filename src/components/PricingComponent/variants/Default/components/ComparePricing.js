import React, { useEffect } from 'react';
import Select from 'react-select';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useWindowSize } from 'react-use';

import CallToAction from '../../../../CallToAction';

import { breakpointNumbers } from '../../../../../atoms/breakpoints';
import {
  Card,
  CardWrapper,
  CardsWrapper,
  Container,
  SelectStyles,
  SelectorsWrapper,
  Text,
} from '../styles/ComparePricing.styled';
import { ColorBar } from '../styles/PricingCard.styled';

const ComparePricing = ({
  scrolled,
  selectedPackages,
  setSelectedPackages,
  tiers,
}) => {
  const { t } = useTranslation();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= md) {
      setSelectedPackages(tiers.slice(0, 3));
    } else {
      setSelectedPackages(tiers.slice(0, 2));
    }
  }, [tiers, width]);

  const { md } = breakpointNumbers;
  const options = tiers.map(tier => ({ value: tier, label: tier.name }));
  const scrolledClass = scrolled ? 'scrolled' : '';

  const bumpPackage = (pkg, currentIndex) => {
    const optionIndex = options.findIndex(opt => opt.value.id === pkg.id);

    const nextOptionIndex = (optionIndex + 1) % options.length;
    const nextPackage = options[nextOptionIndex].value;

    const nextPackageIndex = selectedPackages.findIndex(
      sp => sp.id === nextPackage.id
    );
    if (nextPackageIndex !== -1 && nextPackageIndex !== currentIndex) {
      return bumpPackage(nextPackage, currentIndex);
    }

    return nextPackage;
  };

  const handlePackageChange = (newValue, index) => {
    const newPackages = [...selectedPackages];
    const existingIndex = newPackages.findIndex(pkg => pkg.id === newValue.id);

    if (existingIndex !== -1 && existingIndex !== index) {
      const nextPackage = bumpPackage(newValue, index);
      newPackages[existingIndex] = nextPackage;
    }

    newPackages[index] = newValue;
    setSelectedPackages(newPackages);
  };

  return (
    <Container className={`${scrolledClass}`}>
      <SelectorsWrapper
        className={`${scrolledClass}`}
        length={selectedPackages?.length}
      >
        {selectedPackages.map((selectedPackage, index) => (
          <Select
            key={selectedPackage?.id}
            name={`package${index}`}
            options={options}
            value={options.find(option => option.value === selectedPackage)}
            isSearchable={false}
            styles={SelectStyles(scrolled, selectedPackage?.theme)}
            onChange={e => {
              handlePackageChange(e.value, index);
            }}
          />
        ))}
      </SelectorsWrapper>
      <CardsWrapper
        className={`${scrolledClass}`}
        length={selectedPackages?.length}
      >
        {selectedPackages.map(selectedPackage => (
          <Card
            key={selectedPackage?.id}
            className={scrolled ? 'scrolled pricing-card' : 'pricing-card'}
          >
            <ColorBar
              className="colorbar"
              theme={selectedPackage?.theme || 'red-500'}
            />
            <CardWrapper>
              <Text>
                {selectedPackage?.name && (
                  <p className="heading">{selectedPackage.name}</p>
                )}
                <p className="price">
                  {selectedPackage?.price ? (
                    <>
                      <span className="amount">
                        ${selectedPackage.price?.replace('$', '')}
                      </span>
                      <span className="duration"> {t('/month per user')}</span>
                    </>
                  ) : (
                    <span>{t('Custom Pricing')}</span>
                  )}
                </p>
              </Text>
              {selectedPackage?.callToAction?.url && (
                <CallToAction
                  url={selectedPackage.callToAction?.url}
                  label={selectedPackage?.callToAction?.label}
                  variant="Link - Steel"
                  icon="fa-solid fa-chevron-right"
                />
              )}
            </CardWrapper>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default ComparePricing;
