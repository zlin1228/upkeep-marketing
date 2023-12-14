import React from 'react';
import { useLocation } from '@reach/router';

import Icon from '../../molecules/Icon';

import {
  InternalLink,
  ExternalLink,
  ScrollLink,
  LightboxButton,
  IconContainer,
} from './styles/CallToAction.styled';

import { useLightbox } from '../../context/lightboxContext';
import useCallToAction from './utils/useCallToAction';
import localizeUrl from './utils/localizeUrl';

const CallToAction = ({
  url,
  label,
  ariaLabel,
  styles,
  classes,
  children,
  variant,
  size,
  icon, // depracte this prop (use nextIcon instead)
  prevIcon,
  nextIcon,
  target,
  rel,
  disabled,
  scrollId,
  scrollDuration,
  scrollOffset,
  renderLightbox,
  lightbox,
}) => {
  const { pathname } = useLocation();
  const { origin, type } = useCallToAction(url);
  const { openLightbox } = useLightbox();

  if (renderLightbox && lightbox) {
    return (
      <LightboxButton
        type="button"
        aria-haspopup="true"
        variant={variant}
        size={size || ''}
        styles={styles}
        className={`${classes || ''} ${disabled ? ' disabled' : ''}`}
        onClick={() => openLightbox(lightbox)}
      >
        {prevIcon && (
          <IconContainer>
            <Icon id={prevIcon} width="14px" height="14px" />
          </IconContainer>
        )}
        {children || label}
        {nextIcon || icon ? (
          <IconContainer>
            <Icon id={nextIcon || icon} width="14px" height="14px" />
          </IconContainer>
        ) : null}
      </LightboxButton>
    );
  }

  if (scrollId) {
    return (
      <ScrollLink
        to={scrollId}
        variant={variant}
        size={size || ''}
        styles={styles}
        data-link-type="scroll-link"
        className={`${classes || ''} ${disabled ? ' disabled' : ''}`}
        spy
        smooth
        duration={scrollDuration || 300}
        offset={scrollOffset || 0}
      >
        {prevIcon && (
          <IconContainer>
            <Icon id={prevIcon} width="14px" height="14px" />
          </IconContainer>
        )}
        {children || label}
        {nextIcon || icon ? (
          <IconContainer>
            <Icon id={nextIcon || icon} width="14px" height="14px" />
          </IconContainer>
        ) : null}
      </ScrollLink>
    );
  }

  if (!url || url === '') return null;

  if (type === 'internal') {
    const localizedUrl = localizeUrl(pathname, url);
    return (
      <InternalLink
        variant={variant}
        size={size || ''}
        aria-label={ariaLabel || label}
        data-link-type="internal-link"
        className={`${classes || ''} ${disabled ? ' disabled' : ''}`}
        styles={styles}
        to={localizedUrl?.replace(origin, '')}
        onClick={() => localStorage.setItem('prevPage', pathname)}
      >
        {prevIcon && (
          <IconContainer>
            <Icon id={prevIcon} width="14px" height="14px" />
          </IconContainer>
        )}
        {children || label}
        {nextIcon || icon ? (
          <IconContainer>
            <Icon id={nextIcon || icon} width="14px" height="14px" />
          </IconContainer>
        ) : null}
      </InternalLink>
    );
  }

  return (
    <ExternalLink
      variant={variant}
      size={size || ''}
      aria-label={ariaLabel || label}
      data-link-type="external-link"
      className={`${classes || ''} ${disabled ? ' disabled' : ''}`}
      styles={styles}
      href={url}
      target={target || '_self'}
      rel={rel || ''}
      onClick={() => localStorage.setItem('prevPage', pathname)}
    >
      {prevIcon && (
        <IconContainer>
          <Icon id={prevIcon} width="14px" height="14px" />
        </IconContainer>
      )}
      {children || label}
      {nextIcon || icon ? (
        <IconContainer>
          <Icon id={nextIcon || icon} width="14px" height="14px" />
        </IconContainer>
      ) : null}
    </ExternalLink>
  );
};

export default CallToAction;
