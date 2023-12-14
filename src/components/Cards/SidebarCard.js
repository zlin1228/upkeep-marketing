import React from 'react';
import Subscription from '../Forms/Subscription';
import SubscribeLinks from '../PodcastDetail/components/SubscribeLinks';
import {
  StyledSidebarCard,
  SidebarHeader,
} from '../../styles/Components/Cards/SidebarCard';

const SidebarCard = ({ content, setShowModal, showModal }) => (
  <StyledSidebarCard
    background={content?.background}
    border={content?.border}
    rounded={content?.rounded}
    className="sidebar-card"
  >
    <SidebarHeader background={content?.background}>
      {content?.heading && <strong>{content?.heading}</strong>}
      {content?.subhead && <p>{content?.subhead}</p>}
    </SidebarHeader>
    {content?.subscriptionCard && (
      <Subscription background={content?.background} />
    )}
    {content?.slackCard && (
      <a href={content?.callToAction?.url} className="btn btn-primary w-100">
        {content?.callToAction?.label}
      </a>
    )}
    {content?.accessCard && (
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={() => setShowModal(!showModal)}
      >
        Unlock Your All Access Pass
      </button>
    )}
    {content.podcastCard && (
      <>
        <hr />
        <SubscribeLinks />
      </>
    )}
  </StyledSidebarCard>
);

export default SidebarCard;
