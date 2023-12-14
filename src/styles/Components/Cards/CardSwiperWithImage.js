import styled from 'styled-components';
import { Link } from 'gatsby';

export const SwiperHolder = styled.div`
  .swiper-container {
    padding-bottom: 60px;
    padding-left: 30px;
  }

  .swiper-slide {
    max-width: 520px;
    height: auto;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
  }

  @media (max-width: 991px) {
    .swiper-container {
      padding-left: initial;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      max-width: initial;
    }
  }

  @media (max-width: 575px) {
    .swiper-container {
      padding-bottom: 40px;
    }

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }
  }
`;

export const CardItem = styled.div`
  position: relative;
  height: 100%;

  border-radius: 4px;
  box-shadow: 0 15px 15px 0 rgba(24, 28, 36, 0.1);

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 15px 15px 0 rgba(24, 28, 36, 0.2);
  }

  @media (max-width: 991px) {
    max-width: 500px;
  }

  @media (max-width: 575px) {
    max-width: 375px;

    border: 1px solid rgba(24, 28, 36, 0.1);
    box-shadow: initial;

    &:hover {
      box-shadow: initial;
    }
  }
`;

export const CardLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ImageHolder = styled.div`
  width: 100%;
  max-height: 44%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CardContent = styled.div`
  padding: 40px 40px 62px;

  @media (max-width: 575px) {
    padding: 20px 20px 42px;
  }
`;

export const CardCategoryHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardCategory = styled.p`
  padding: 6px 12px;
  margin-bottom: 16px;

  font-weight: 500;
  line-height: 1.26;
  text-transform: uppercase;
  

  background-
  border-radius: 27.5px;

  @media (max-width: 575px) {
  }
`;

export const CardTitle = styled.p`
  margin-bottom: 24px;

  font-weight: 500;
  font-size: 31.1px;
  line-height: 1.26;

  @media (max-width: 575px) {
    margin-bottom: 16px;

    font-size: 22px;
  }
`;

export const CardDescription = styled.div`
  margin-bottom: 16px;

  line-height: 1.26;

  @media (max-width: 575px) {
  }
`;

export const CardAuthor = styled.p`
  position: absolute;
  bottom: 32px;

  margin-bottom: 0;

  font-weight: 500;
  line-height: 1.26;

  @media (max-width: 575px) {
    bottom: 20px;

  }
`;
