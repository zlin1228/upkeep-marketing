import React from 'react';
import FormGenerator from '../../Forms';
import { setSubheadTheme, setHeadingTheme } from '../utils/setThemes';
import {
  Container,
  Wrapper,
  Details,
  HeadingKicker,
  Heading,
  Subhead,
  FormWrapper,
  Trustbar,
  TrustbarHeading,
  Logo,
  LogoWrapper,
  FallbackText,
} from '../styles/FormConversionPanel.styled';

const FormConversionPanel = ({ component, location }) => (
  <Container theme={component?.theme || 'Light'}>
    <Wrapper>
      <Details>
        {component?.headingKicker && (
          <HeadingKicker color={component?.theme}>
            {component?.headingKicker}
          </HeadingKicker>
        )}
        {component?.heading && (
          <Heading color={setHeadingTheme(component?.theme)}>
            {component?.heading}
          </Heading>
        )}
        {component?.subhead && (
          <Subhead
            color={setSubheadTheme(component?.theme)}
            dangerouslySetInnerHTML={{ __html: component?.subhead }}
          />
        )}
        <Trustbar>
          <TrustbarHeading>{component?.trustbarHeading}</TrustbarHeading>
          <LogoWrapper>
            {component?.logos.map(logo => (
              <Logo src={logo?.image?.url} alt={logo?.image?.alt} />
            ))}
          </LogoWrapper>
        </Trustbar>
        {component?.fallbackText && (
          <FallbackText
            dangerouslySetInnerHTML={{ __html: component?.fallbackText }}
          />
        )}
      </Details>
      <FormWrapper>
        <FormGenerator
          id={component?.conversionForm?.id}
          props={component?.conversionForm}
          theme="light"
          location={location}
        />
      </FormWrapper>
    </Wrapper>
  </Container>
);

export default FormConversionPanel;
