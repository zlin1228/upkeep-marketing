import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  @media (max-width: 768px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0px auto;
  padding: 0px 15px;
`;
export const Header = styled.div`
  width: 100%;
  max-width: 770px;
  height: auto;
  margin: 0px auto 64px;
  text-align: center;
  @media (max-width: 499px) {
    margin: 0px auto 32px;
  }
`;
export const HeadingKicker = styled.h6`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #007bff;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;
export const Heading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 2.799rem;
  line-height: 3.278rem;
  color: #33394b;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 1.802rem;
    line-height: initial;
    margin-bottom: 12px;
  }
`;
export const Subhead = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #515667;
  margin-bottom: 16px;
`;
export const Buttons = styled.div`
  width: auto;
  height: auto;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 499px) {
    flex-direction: column;
  }
`;
export const PrimaryButton = `
width: fit-content;
height: 41px;
display: flex;
align-items: center;
padding: 10px 24px;
margin: 0px 16px 0px 0px;
background: #007BFF;
box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
border-radius: 4px;
color: #ffffff;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 21px;
&:hover {
  background: #0056b3;
  color: white;
}
@media (max-width: 499px) {
  width: 100%;
  justify-content: center;
  text-align: center;
  margin: 0px 0px 16px;
  }
`;
export const SecondaryButton = `

font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 15px;
color: #007BFF;
&:hover {
color: #007bff;
}
`;
export const Grid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const FAQ = styled.div`
  width: 100%;
  height: auto;
`;
export const Question = styled.h6`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #33394b;
  margin-bottom: 24px;
`;
export const Answer = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #707481;
`;
