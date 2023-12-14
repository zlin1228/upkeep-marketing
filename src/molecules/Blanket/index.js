import React from 'react';

import styled from 'styled-components';

const Blanket = () => <StyledBlanket className="blanket" />;

export default Blanket;

const StyledBlanket = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 43, 71, 0.8);
  backdrop-filter: blur(4px);
  z-index: -1;
`;
