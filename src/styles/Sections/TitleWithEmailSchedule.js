import styled from "styled-components";

export const SimplyfySection = styled.div`
  background-color: #fafbfc;
`;

export const ContentHolder = styled.div`
  padding: ${(props) => (props.padding && props.padding<100 ? props.padding : "80")}px 0;
  text-align: center;
`;

export const Subhead = styled.p`
  padding: 24px 0;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormHolder = styled.div`
  max-width: 100%;
  width: 405px;
`;
