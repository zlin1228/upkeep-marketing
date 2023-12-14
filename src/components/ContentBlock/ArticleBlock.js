import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import bulletIcon from '../../svg/bullet.svg';

const ArticleBlock = ({ componentData }) => {
  return (
    componentData &&
    componentData.map((block, index) => {
      return (
        <ContentBlockWrapper
          className={index % 2 === 0 ? 'odd' : 'even'}
          key={index}
        >
          <Container className="about-container">
            {block.heading && (
              <SectionHeading>
                <Row className="text-center justify-content-center">
                  <Col md={12}>
                    <Heading>{block.heading}</Heading>
                    {block?.subhead && (
                      <Subhead
                        dangerouslySetInnerHTML={{ __html: block.subhead }}
                      />
                    )}
                  </Col>
                </Row>
              </SectionHeading>
            )}
            <ContentRow className="align-items-center justify-content-center">
              {block.type === 'text' && (
                <div dangerouslySetInnerHTML={{ __html: block.content }} />
              )}
              {block.type === 'column' &&
                block.content.map((blockcontent, index) => {
                  return (
                    <Col
                      dangerouslySetInnerHTML={{ __html: blockcontent }}
                      key={'block-content' + index}
                      sm={index === 1 ? 'auto' : ''}
                      className="column-content"
                    />
                  );
                })}
              {block.type === 'video' && (
                <Col sm="auto">
                  <iframe
                    width="560"
                    height="315"
                    src={block.link}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </Col>
              )}
              {block.type === 'company' &&
                block.content.map((content, key) => {
                  return (
                    <Row key={key} className="my-4 block-border-bottom">
                      <div className="col-md-6">
                        <Row className="mb-4">
                          <div className="col-auto">
                            <img src={content.icon} alt="" />
                          </div>
                          <div
                            className="col sub-title"
                            dangerouslySetInnerHTML={{ __html: content.title }}
                          ></div>
                        </Row>
                        <div
                          className="block-desc"
                          dangerouslySetInnerHTML={{ __html: content.desc }}
                        />
                      </div>
                      <div className="col-md-6">
                        <div
                          className="block-content"
                          dangerouslySetInnerHTML={{ __html: content.content }}
                        />
                      </div>
                    </Row>
                  );
                })}
            </ContentRow>
          </Container>
        </ContentBlockWrapper>
      );
    })
  );
};

export default ArticleBlock;

const SectionHeading = styled.div`
  margin: 0 0 5em 0;
`;

const ContentBlockWrapper = styled.section`
  padding: 5em 0;
  @media (max-width: 568px) {
    padding: 2em 0;
  }
  &.even {
    background-color: #f3f5f9;
  }
  .about-container {
    max-width: 1200px;
  }
  .block-border-bottom {
    border-bottom: 1px solid #ddd;
  }
  .column-content {
    ul {
      padding: 0;
    }
    li {
      display: flex;
      align-items: center;
      font-size: 18px;
      &:before {
        content: '';
        width: 24px;
        height: 24px;
        background-image: url(${bulletIcon});
        background-repeat: no-repeat;
        margin-right: 10.6px;
        flex-shrink: 0;
        box-flex: 0;
        flex-grow: 0;
      }
    }
  }
`;

const Heading = styled.h1`
  width: 100%;
  font-size: 36px;
`;

const Subhead = styled.p`
  width: 100%;
  font-size: 22px;
`;

const ImageHolder = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;

  @media (max-width: 991px) {
    margin-bottom: 15px;
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentRow = styled(Row)`
  margin: 0;
  .sub-title {
    font-size: 30px;
    color: #333;
    font-weight: bold;
    line-height: 1;
  }
`;
