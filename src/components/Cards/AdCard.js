import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card } from '../../styles/Components/Cards/AdCard';

const AdCard = ({ ignore }) => {
  const [ad, setAd] = useState({});
  const {
    allDatoCmsResourceAd: { edges },
  } = useStaticQuery(getAdData);

  const getAds = adsArray => {
    const filteredAds = adsArray.filter(ad => {
      const adType = ad.node.internalName.toLowerCase();
      if (!adType.includes(ignore)) {
        return ad;
      }
    });
    return filteredAds;
  };

  useEffect(() => {
    setAd(getAds(edges)[Math.floor(Math.random() * getAds(edges).length)]);
  }, []);

  return (
    <Card
      to={ad?.node?.callToAction?.url.replace('https://www.onupkeep.com', '')}
      className="subscription_card"
    >
      <img
        className="subscription_image"
        src={ad?.node?.adImage?.url}
        alt={ad?.node?.adImage?.alt}
      />
    </Card>
  );
};

export default AdCard;

const getAdData = graphql`
  query fetchAdCardData {
    allDatoCmsResourceAd {
      edges {
        node {
          id
          internalName
          adImage {
            alt
            url
          }
          callToAction {
            id
            label
            url
          }
        }
      }
    }
  }
`;
