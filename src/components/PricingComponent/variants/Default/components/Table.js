import React from 'react';
import { useWindowSize } from 'react-use';

import Icon from '../../../../../molecules/Icon';

import { color } from '../../../../../atoms/colors';
import { breakpointNumbers } from '../../../../../atoms/breakpoints';
import {
  Container,
  Wrapper,
  Dash,
  TBody,
  TCell,
  TColumn,
  TContainer,
  TGrid,
  THeading,
  TRow,
} from '../styles/Table.styled';

const TableIcon = ({ pricingTiers, currentPkg, mostPopular, index }) => {
  const result = pricingTiers.filter(pricingTier => {
    if (pricingTier.name === currentPkg.name) {
      return pricingTier;
    }
  });

  if (result.length > 0) {
    return (
      <TCell mostPopular={mostPopular} index={index}>
        <Icon
          id="check-circle"
          width="20px"
          height="20px"
          fillColor={color.steel[700]}
        />
      </TCell>
    );
  }
  return (
    <TCell mostPopular={mostPopular} index={index}>
      <Dash>–</Dash>
    </TCell>
  );
};

const Table = ({ features, tiers, tableExpanded, scrolled }) => {
  const { width } = useWindowSize();
  const { xl } = breakpointNumbers;

  return (
    <Container scrolled={scrolled}>
      <Wrapper tableExpanded={tableExpanded}>
        {features.map(feature => (
          <TContainer>
            <THeading>{feature?.name}</THeading>
            <TBody>
              {feature?.pricingFeatureItems?.map(
                ({ name, availablePricingTiers, text }, index) => (
                  <TColumn index={index}>
                    {width <= xl && (
                      <TRow>
                        <p className="name">{name}</p>
                      </TRow>
                    )}

                    <TGrid
                      gridColumns={
                        width > xl ? tiers?.length + 1 : tiers?.length
                      }
                    >
                      {width > xl && (
                        <TCell
                          style={{
                            justifyContent: 'flex-start',
                            background:
                              index % 2 === 0
                                ? color.midnight[25]
                                : 'linear-gradient(0deg, rgba(182, 205, 246, 0.1), rgba(182, 205, 246, 0.1)), #F7FAFF',
                          }}
                        >
                          <p className="name">{name}</p>
                        </TCell>
                      )}

                      {tiers?.map(pkg => {
                        const result = text?.filter(
                          t => t?.pricingTier?.name === pkg?.name
                        );
                        if (result.length > 0) {
                          return (
                            <TCell
                              key={pkg?.id}
                              mostPopular={pkg?.mostPopular}
                              index={index}
                            >
                              <p className="label">
                                {result[0]?.text === '__'
                                  ? '–'
                                  : result[0]?.text}
                              </p>
                            </TCell>
                          );
                        }

                        return (
                          <TableIcon
                            key={pkg?.id}
                            pricingTiers={availablePricingTiers}
                            currentPkg={pkg}
                            mostPopular={pkg?.mostPopular}
                            index={index}
                          />
                        );
                      })}
                    </TGrid>
                  </TColumn>
                )
              )}
            </TBody>
          </TContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Table;
