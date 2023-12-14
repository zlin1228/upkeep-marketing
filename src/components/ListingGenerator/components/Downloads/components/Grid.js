import React from 'react';
import DownloadCard from '../../../../Cards/DownloadCard';
import { color } from '../../../../../atoms/colors';
import { Container, Button } from '../styles/Grid.styled';

const Grid = ({ downloads, sliceIndex, setSliceIndex }) => (
  <>
    <Container>
      {downloads?.slice(0, sliceIndex)?.map(({ node }) => (
        <DownloadCard key={node?.id} component={node} />
      ))}
      {downloads.length === 0 && <h4>No events found matching criteria</h4>}
    </Container>
    {downloads?.length > sliceIndex && (
      <Button onClick={() => setSliceIndex(sliceIndex + 12)}>
        <span>View More</span>
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

export default Grid;
