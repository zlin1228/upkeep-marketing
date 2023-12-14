import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  background: #f5f6f9;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0px auto;
`;
export const Header = styled.div`
  width: 100%;
  height: auto;
  max-width: 763px;
  margin: 0px auto 56px;
`;
export const HeadingKicker = styled.h6`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #007bff;
  margin-bottom: 16px;
`;
export const Heading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 56px;
  text-align: center;
  color: #1a2834;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 1.802rem;
    line-height: initial;
    margin-bottom: 12px;
  }
`;
export const Subhead = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #515667;
  margin-bottom: 16px;
`;
export const PrimaryButton = `
width: fit-content;
height: 41px;
display: flex;
align-items: center;
padding: 10px 24px;
margin: 0px auto;
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
`;
export const Grid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  @media (max-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 575px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
