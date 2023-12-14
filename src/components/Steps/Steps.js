import React from 'react';
import { Steps, Wrapper, Heading, Container } from './styles/Steps';

export default ({ component }) => (
  <Steps>
    <Wrapper>
      <Heading>
        <h2>{component?.heading}</h2>
        <div dangerouslySetInnerHTML={{ __html: component?.subhead }} />
      </Heading>
      <Container>
        <ul>
          {component?.steps?.map((step, index) => (
            <li key={step?.heading}>
              <h4 className="step-number">0{index + 1}</h4>
              <div className="step-info">
                <h4>{step?.heading}</h4>
                <div dangerouslySetInnerHTML={{ __html: step?.subhead }} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Wrapper>
  </Steps>
);
