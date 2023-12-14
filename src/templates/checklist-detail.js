import React from 'react';
import { graphql } from 'gatsby';
import Icon from '../molecules/Icon';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import Breadcrumbs from '../molecules/Breadcrumbs';
import { color } from '../atoms/colors';
import {
  HeroSection,
  HeroOuterWrapper,
  HeroInnerWrapper,
  Text,
  Details,
  Button,
  DownloadSection,
  DownloadWrapper,
} from '../styles/Pages/Checklist-Detail.styled';

const ListItem = ({ icon, children }) => (
  <li className="list-item">
    <Icon id={icon} fillColor={color.steel[700]} width="16px" height="16px" />
    <span>{children}</span>
  </li>
);

const ChecklistPost = ({ data }) => {
  const checklistData = data.datoCmsTemplateCollection;
  if (!checklistData) return null;

  const { internalName, subhead, checklist, publishDate } = checklistData;

  const downloadAll = () => {
    if (checklistData?.checklist && checklistData?.checklist.length > 0) {
      checklistData?.checklist.forEach((csv, i) => {
        setTimeout(async () => {
          if (csv?.csv?.url) {
            window.location.assign(csv?.csv?.url);
          }
        }, i * 1000);
      });
    }
  };

  return (
    <Layout theme="light">
      <HeaderComponent theme="Fill - Light" />
      <HeroSection>
        <HeroOuterWrapper>
          <Breadcrumbs theme="Light" resource />
          <HeroInnerWrapper>
            <Text>
              <p className="heading-kicker">Template</p>
              {internalName && <h1 className="heading">{internalName}</h1>}
              {subhead && <p className="subhead">{subhead}</p>}
            </Text>
            <Details>
              <p className="heading">Template Overview</p>
              <ul className="list">
                <ListItem icon="fa-regular fa-list">
                  {checklist.length}{' '}
                  {checklist.length <= 1 ? 'Checklist' : 'Checklists'}
                </ListItem>
                <ListItem icon="fa-regular fa-arrow-down">
                  {checklist.length}{' '}
                  {checklist.length <= 1 ? 'Download' : 'Downloads'}
                </ListItem>
                <ListItem icon="fa-regular fa-clock-rotate-left">
                  Last updated {publishDate || '1 month ago'}
                </ListItem>
                <ListItem icon="fa-regular fa-file">CSV Format</ListItem>
              </ul>
              <Button type="button" onClick={() => downloadAll()}>
                Download All
              </Button>
            </Details>
          </HeroInnerWrapper>
        </HeroOuterWrapper>
      </HeroSection>
      <DownloadSection>
        <DownloadWrapper>
          <ul className="list">
            {checklist?.map(list => (
              <li className="list-item" key={list?.internalName}>
                <p className="heading">{list?.internalName}</p>
                <a
                  className="download-button"
                  href={list?.csv?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    id="fa-regular fa-arrow-down"
                    fillColor={color.common.white}
                    width="16px"
                    height="16px"
                  />
                  <span>Download</span>
                </a>
              </li>
            ))}
          </ul>
        </DownloadWrapper>
      </DownloadSection>
      <FooterComponent />
    </Layout>
  );
};

export default ChecklistPost;

export const Head = ({ location }) => (
  <SEO title="UpKeep Templates" pathname={location?.pathname} />
);

export const ChecklistDetailQuery = graphql`
  query ChecklistDetailQuery($id: String!) {
    datoCmsTemplateCollection(id: { eq: $id }) {
      heading
      internalName
      publishDate(fromNow: true)
      slug
      subhead
      metaTags {
        description
        title
        image {
          ...datoCmsAsset
        }
      }
      industry {
        fontAwesome
        iconColor
        name
        slug
        thumbnail {
          ...datoCmsWebsiteImage
        }
      }
      asset {
        slug
        name
      }
      category {
        name
        slug
      }
      thumbnail {
        ...datoCmsWebsiteImage
      }
      checklist {
        internalName
        csv {
          tags
          title
          url
        }
      }
    }
  }
`;
