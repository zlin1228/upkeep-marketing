import styled from 'styled-components';

export const PostHolder = styled.ul`
  padding: 0;
  margin: 0;

  list-style: none;

`;

export const PostItem = styled.li`
  position: relative;

  padding: 25px 0;

  &:not(:last-child) {
    }

  @media (max-width: 575px) {
    padding: 35px 0 25px;
  }
`;

export const PostTitle = styled.p`
  padding-right: 100px;
  margin-bottom: 16px;

  font-weight: 500;
  line-height: 1.26;

  @media (max-width: 575px) {
    padding-right: 0;

  }
`;

export const PostTagsHolder = styled.ul`
  display: flex;
  padding: 0;
  margin-bottom: 24px;

  list-style: none;
`;

export const PostTag = styled.li`
  padding: 7px 16px;

  line-height: 1.26;

  background-color: #f4f4f5;
  border-radius: 27.5px;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media (max-width: 575px) {
  }
`;

export const PostDescription = styled.p`
  margin-bottom: 15px;

  line-height: 1.26;

  @media (max-width: 575px) {
  }
`;

export const PostInfoHolder = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  list-style: none;
`;

export const PostInfo = styled.li`
  position: relative;

  margin-top: 5px;

  line-height: 1.26;

  &:not(:first-child) {
    padding-left: 15px;

    &:before {
      content: '';

      position: absolute;
      top: 50%;
      left: 4.5px;

      transform: translateY(-50%);

      width: 6px;
      height: 6px;

      border-radius: 50%;
    }
  }

  @media (max-width: 575px) {
    padding-left: 15px;


    &:before {
      content: '';

      position: absolute;
      top: 50%;
      left: 4.5px;

      transform: translateY(-50%);

      width: 6px;
      height: 6px;

      border-radius: 50%;
    }
  }
`;

export const PostDownloadLink = styled.a`
  position: absolute;
  top: 24px;
  right: 0;

  display: flex;
  align-items: center;

  font-weight: 500;
  line-height: 1.26;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-left: 5px;
  }

  @media (max-width: 575px) {
    top: 12px;

  }
`;
