import styled from 'styled-components';

export const AuthorStyles = styled.div`
  height: 50px;
  height: 40px;
  display: flex;
  align-items: center;

  margin-top: 1rem;
  .author_details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .author_headshot {
    height: 50px !important;
    width: 50px !important;
    margin-right: 8px;
    display: flex;
    position: relative;
    transform: translateY(5px);
    img {
      height: 40px !important;
      width: 40px !important;
      border-radius: 9999px;
      object-fit: cover !important;
    }
    .gatsby-image-wrapper {
      overflow: visible !important;
    }
  }
  .author_name {
    font-size: 14px;
    line-height: 14px;
    color: #ffffff;
    font-weight: bold;
  }
  .author_role {
    font-size: 14px;
    line-height: 14px;
    color: #ffffff;
  }
`;
