import React from 'react';
import { Link } from 'gatsby';
import Grid from './Grid';
import useResourceHubData from '../utils';
import { Section, Wrapper, Header } from '../styles/index.styled';
import Slider from './Slider';
import Icon from '../../../../../molecules/Icon';

const Resource = ({ type }) => {
  const data = useResourceHubData(type);
  return (
    <Section id={data?.id} theme={data?.theme}>
      <Wrapper>
        <Header>
          <h2>{data?.name}</h2>
          {data?.callToAction?.url && (
            <Link to={data?.callToAction?.url}>
              {`${data?.callToAction?.label} (${data?.totalCount})`}
              <Icon
                height="14px"
                width="14px"
                id="fa-solid fa-chevron-right"
                fillColor="#007bff"
              />
            </Link>
          )}
        </Header>
        {data?.layoutType === 'grid' && (
          <Grid data={data?.posts} layout={data?.layout} type={type} />
        )}
        {data?.layoutType === 'slider' && (
          <Slider data={data?.posts} type={type} />
        )}
      </Wrapper>
    </Section>
  );
};

export default Resource;
