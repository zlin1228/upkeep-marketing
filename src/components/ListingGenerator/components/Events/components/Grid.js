import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import EventCard from '../../../../Cards/EventCard';
import { Container, Button } from '../styles/Grid.styled';
import { color } from '../../../../../atoms/colors';

const Grid = ({ events, sliceIndex, setSliceIndex }) => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        {events?.slice(0, sliceIndex)?.map(node => (
          <EventCard key={node?.id} data={node} />
        ))}
        {events.length === 0 && (
          <h4>{t('No events found matching criteria')}</h4>
        )}
      </Container>
      {events?.length > sliceIndex && (
        <Button onClick={() => setSliceIndex(sliceIndex + 12)}>
          <span>{t('View More')}</span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke={color.primary[700]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      )}
    </>
  );
};
export default Grid;
