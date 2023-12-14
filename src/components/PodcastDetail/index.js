import React from 'react';
import usePodcastDetails from './utils/usePodcastDetails';
import { Content, Toggles, Post } from './styles/index.styled';

const PodcastDetails = ({ podcast }) => {
  const { contentArray, activePost, setActivePost } = usePodcastDetails(
    podcast
  );
  return (
    <Content>
      <Toggles>
        {contentArray?.map(item => (
          <button
            key={item?.label}
            className={item?.className}
            type="button"
            onClick={() => setActivePost(item?.value)}
          >
            {item?.label}
          </button>
        ))}
      </Toggles>
      <Post dangerouslySetInnerHTML={{ __html: activePost }} />
    </Content>
  );
};

export default PodcastDetails;
