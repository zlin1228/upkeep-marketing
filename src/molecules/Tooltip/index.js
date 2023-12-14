import React, { useRef } from 'react';
import { useElementDimensions } from '../../hooks/useElementDimensions';
import { TooltipContainer, TooltipText, Heading, Subheading } from './styles';

const Tooltip = ({
  arrow,
  className,
  theme,
  position,
  noUnderline,
  heading,
  subheading,
  children,
}) => {
  const tooltipRef = useRef(null);
  const tooltipContainerRef = useRef(null);
  const tooltipWidth = useElementDimensions(tooltipRef).width;
  const tooltipHeight = useElementDimensions(tooltipRef).height;
  const containerHeight = useElementDimensions(tooltipContainerRef).height;
  const containerWidth = useElementDimensions(tooltipContainerRef).width;

  return (
    <TooltipContainer
      className={className}
      theme={theme}
      noUnderline={noUnderline}
      ref={tooltipContainerRef}
    >
      {children}
      <TooltipText
        ref={tooltipRef}
        theme={theme}
        position={position}
        tooltipWidth={tooltipWidth}
        tooltipHeight={tooltipHeight}
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        arrow={arrow}
      >
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
