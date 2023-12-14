import React from 'react';
import EventForm from './EventForm';
import LivestormEmbed from './LivestormEmbed';

const EventsForm = ({ component }) => {
  const livestormForm = component?.eventRegistration?.livestormFormEmbed;
  const customForm = component?.eventRegistration?.pardotFormHandler;
  if (livestormForm) {
    return (
      <LivestormEmbed
        heading={component?.eventRegistration?.heading}
        src={component?.eventRegistration?.livestormFormEmbed}
      />
    );
  }
  if (customForm) {
    return <EventForm component={component?.eventRegistration} />;
  }
  return null;
};

export default EventsForm;
