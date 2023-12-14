import styled from 'styled-components';

export const Section = styled.div`
  padding: 96px 0;
  margin: auto;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const Heading = styled.h2`
  text-align: center;

  @media (max-width: 768px) {
  }
`;

export const SubHeading = styled.p`
  margin: 24px 0;

  text-align: center;

  @media (max-width: 768px) {
    margin: 15px 0;

  }
`;

export const AccordionItem = styled.div`
  padding: 40px 0;


  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const AccordionDesc = styled.div`
  margin-top: 24px;
  margin-bottom: 0;


  @media (max-width: 768px) {
    margin-top: 15px;

  }
`;

export const AccordionBtn = styled.button`
  position: relative;
  color: #33394b;
  padding: 0 30px 0 0;
  width: 100%;
  font-size: 1.2em;
  font-weight: 700;
  text-align: left;

  background: none;
  border: none;

  &:hover {
    color: #33394b;
    background: transparent;
  }

  :focus {
    outline: none;
  }

  @media (max-width: 768px) {
  }
`;

export const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0;

  transform: translateY(-50%);

  svg {
    display: block;
    width: 18px;
  
    &.open {
      transform: rotate(-180deg);
    }
  }
`;
