import React, { useEffect, useRef } from 'react';
import CallToAction from '../CallToAction';
import Icon from '../../molecules/Icon';
import FormComponent from './components/Form';
import { useElementDimensions } from '../../hooks/useElementDimensions';
import { useAnnouncementBar } from '../../context/announcementBarContext';
import {
  Bar,
  Wrapper,
  Content,
  Heading,
  IconWrapper,
  Buttons,
  CloseButton,
  CtaTheme,
} from './styles/AnnouncementBar.styled';

const AnnouncementBar = props => {
  const announcementBarRef = useRef();
  const elementHeight = useElementDimensions(announcementBarRef);
  const {
    setAnnouncementBarHeight,
    setShowAnnouncementBar,
  } = useAnnouncementBar();
  const component = props?.component?.[0];
  const form = component?.variant === 'form';
  const standard = component?.variant === 'standard';
  const simple = component?.variant === 'simple';

  useEffect(() => {
    if (elementHeight?.height) {
      setAnnouncementBarHeight(elementHeight?.height);
    } else {
      setAnnouncementBarHeight(null);
    }
  }, [elementHeight, setAnnouncementBarHeight]);

  if (!props?.showAnnouncementBar) {
    return null;
  }
  return (
    <Bar id="announcementBar" theme={component?.theme} ref={announcementBarRef}>
      <Wrapper theme={component?.theme} variant={component?.variant}>
        <Content>
          {component?.icon && !simple && (
            <IconWrapper theme={component?.theme}>
              <Icon id={component?.icon} width="24px" height="24px" />
            </IconWrapper>
          )}
          {component?.body && (
            <Heading
              dangerouslySetInnerHTML={{ __html: component?.body }}
              theme={component?.theme}
            />
          )}
        </Content>
        <Buttons>
          <>
            {component?.cta[0] && standard && (
              <CallToAction
                variant={CtaTheme[component?.theme].primary}
                size="lg"
                url={component?.cta[0]?.url}
                label={component?.cta[0]?.label}
              />
            )}
            {component?.cta[1] && standard && (
              <CallToAction
                variant={CtaTheme[component?.theme].secondary}
                size="lg"
                url={component?.cta[1]?.url}
                label={component?.cta[1]?.label}
              />
            )}
          </>
          {form && <FormComponent component={component} />}
          <CloseButton
            type="button"
            aria-label="Close Announcement Bar"
            theme={component?.theme}
            onClick={() => setShowAnnouncementBar(false)}
            variant={component?.variant}
          >
            <Icon id="fa-solid fa-xmark" width="20px" height="20px" />
          </CloseButton>
        </Buttons>
      </Wrapper>
    </Bar>
  );
};

export default AnnouncementBar;
