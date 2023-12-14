import styled from "styled-components";

export const PostListing = styled.div`
  padding: 105px 0 200px;

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 70px 0 150px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 70px 0 150px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 65px 0 100px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Categories = styled.div`
  padding: 36px 36px 23px;
  margin-right: 32px;
  width: 35%;
  height: fit-content;

  .title {
    margin-bottom: 23px;

    }

  .category-list {
    padding: 0;
    list-style: none;
  }

  .category-item:not(:last-child) {
    margin-bottom: 23px;
  }

  .cat-link {
    position: relative;
    display: flex;
    align-items: center;
  
    &.is-active {
      }

    &:hover {
      }
  }

  .cat-icon {
    display: flex;
    margin-right: 20px;

    svg {
      font-size: 21px;
    }
  }

  .cat-name {
    margin: 0 80px 0 0;
  }

  .cat-count {
    position: absolute;
    right: 0;
    margin: 0;
  }

  .cat-name,
  .cat-count {
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 30px 25px 23px;
    margin-right: 27px;
    width: 33%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 25px 15px 23px;
    margin-right: 15px;
    width: 37%;

    .cat-name {
      margin: 0 25px 0 0;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 15px 20px;
    margin: 0;
    width: 100%;

    .category-list {
      display: flex;
      overflow-x: scroll;

      ::-webkit-scrollbar {
        width: 10px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        border-radius: 3px;
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: rgb(216, 214, 214);
      }
    }

    .category-item {
      margin-right: 15px;
    }

    .cat-icon {
      margin-right: 10px;
    }

    .cat-name {
      margin: 0 5px 0 0;
      white-space: nowrap;
    }

    .cat-count {
      position: initial;
    }
  }
`;

export const Posts = styled.div`
  width: 62%;

  .post-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(333px, 1fr));
    grid-gap: 30px;
    flex: 1;
  }

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 72px 20px 76px;
      box-shadow: 0 6px 24px 0 rgba(174, 174, 186, 0.16);
    position: relative;
    transition: all 0.3s ease;
    top: 0;
  }
  a:hover {
    box-shadow: 0 12px 32px 0 rgba(174, 174, 186, 0.28) !important;
    top: -8px;
    transition: all 0.3s ease;
  }
  .logo-holder {
    img {
      max-height: 63px;
      max-width: 150px;
    }
  }

  .post-name {
    margin: 36px 0 22px;
    }

  .post-desc {
    text-align: center;
  }

  .post-category {
    position: absolute;
    bottom: 17px;
    padding: 10px 0;
    margin: 0;
    width: 100%;
      text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 64%;

    .post-item {
      grid-template-columns: repeat(auto-fit, minmax(237px, 1fr));
      grid-gap: 15px;
    }

    a {
      padding: 40px 20px 76px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;

    .post-item {
      grid-template-columns: repeat(auto-fit, minmax(199px, 1fr));
      grid-gap: 15px;
    }

    a {
      padding: 40px 20px 60px;
      box-shadow: 4px 6px 16px 0 rgb(0 0 0 / 12%);
    }

    .logo-holder {
      width: 150px;
    }

    .post-name {
      margin: 18px 0 22px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 20px;
    width: 100%;

    .post-item {
      grid-gap: 15px;
    }

    a {
      padding: 20px 20px 65px;
    }

    .logo-holder {
      width: 170px;
    }

    .post-name {
      margin: 20px 0 22px;
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    .post-item {
      grid-template-columns: repeat(auto-fit, minmax(161px, 1fr));
    }
  }

  @media (min-width: 320px) and (max-width: 575px) {
    .post-item {
      grid-template-columns: repeat(auto-fit, minmax(263px, 1fr));
    }
  }
`;
