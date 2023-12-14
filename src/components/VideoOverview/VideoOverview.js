import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const VideoOverview = ({ componentData }) => {
  return (
    <VideoOverviewWrapper>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Heading></Heading>
          </Col>
          <Col>
            <Subhead></Subhead>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </VideoOverviewWrapper>
  );
};

export default VideoOverview;

const VideoOverviewWrapper = styled.section``;

const Heading = styled.h2``;
const Subhead = styled.div``;
const Logo = styled.div``;
