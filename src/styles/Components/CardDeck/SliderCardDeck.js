import styled from 'styled-components';

const sectionMappings = {
  'Light Blue': 'background: #FAFCFF;',
  White: 'background:#FFFFFF;',
  Dark: 'background: #060606;',
};
const headingMappings = {
  'Light Blue': 'color: #33394b;',
  Dark: 'color: #fafafa;',
  White: 'color: #33394b;',
};
const cardMappings = {
  'Light Blue': `
    border: 1px solid #e0e6ed;
    background: #fff;
    box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
    `,
  Dark: `
    background: #121212;
    `,
  White: `
    border: 1px solid #e0e6ed;
    background: #fff;
    box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
    `,
};
const bulletMappings = {
  'Light Blue': 'background: #dddddd;',
  Dark: 'background: #535963;',
  White: 'background: #dddddd;',
};
const bulletActiveMappings = {
  'Light Blue': 'background: #33394b;',
  Dark: 'background: #fafafa;',
  White: 'background: #33394b;',
};
export const Section = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 64px 0px;
  ${props => sectionMappings[props?.theme]}
  overflow: hidden;
  .swiper-container {
    width: 100%;
    max-width: 1170px;
    height: 100%;
    padding: 50px 0px;
    overflow: initial;
    display: flex;
    flex-direction: column-reverse;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
  .swiper-wrapper {
    margin-bottom: 24px;
  }
  .swiper-slide {
    position: relative;
    top: 0px;
    text-align: center;
    font-size: 18px;
    background: #121212;
    cursor: grab;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    width: auto;
    height: auto;
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
    ${props => cardMappings[props?.theme]}
    &:hover {
      top: -28px;
      box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
      .animated-link {
        &:after {
          right: -24px;
        }
        &:before {
          animation-name: grow-right;
          animation-duration: 0.25s;
          animation-fill-mode: forwards;
          @keyframes grow-right {
            0% {
              opacity: 0;
              width: 0;
            }
            100% {
              opacity: 1;
              width: 12px;
            }
          }
        }
      }
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination {
    text-align: left;

    span:nth-child(1) {
      margin: 0px !important;
    }
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 50%;
    ${props => bulletMappings[props?.theme]}
    opacity: 1;
    margin-left: 12px !important;
  }
  .swiper-pagination-bullet-active {
    ${props => bulletActiveMappings[props?.theme]}
    opacity: 1;
  }
  @media (max-width: 1200px) {
    .swiper-container {
      padding: 50px 15px;
    }
    .swiper-pagination {
      padding: 0px 15px;
    }
  }
  @media (max-width: 600px) {
    .swiper-slide {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
  }
`;
export const HeadingWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 0 auto;
  @media (max-width: 1200px) {
    padding: 0px 15px;
  }
`;
export const Heading = styled.h2`
  width: 100%;
  max-width: 381px;
  height: auto;
  font-weight: bold;
  font-size: 44.79px;
  line-height: 49px;
  margin-bottom: 32px;
  ${props => headingMappings[props?.theme]}
`;
export const Subhead = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  p {
    margin: 0px;
  }
  ${props => headingMappings[props?.theme]}
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
