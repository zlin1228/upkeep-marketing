import styled from 'styled-components';
import BannerImg from '../../assets/whatscmms.jpg';
import HistoryImg from '../../assets/history.jpg';
import BgCloudsImg from '../../assets/bg-clouds.jpg';

export const Banner = styled.div`
  padding-top: 200px;
  padding-bottom: 80px;
  background:url(${BannerImg}) 0 0 no-repeat;
  background-size:cover;
  margin-top:0!important;
  .hero-content{
    width:800px;
    max-width:100%;
    p{
      font-size:15px;
      line-height:1.2;
      margin-top:6px;
    }
    .progress-bar .value{
      opacity:1!important;
    }
  }
  h1, h2{
    color:#fff;
  }
  h2{
    font-size:19px;
    font-weight:400;
    line-height:1.35;
  }
`;
export const ContentWrapper = styled.div`
  h1{
    font-size:36px;
  }
  h2{
    font-size:26px;
  }
  .gray-bg{
    background-color:#f3f5f9;
  }
  .overview-bg{
    background-position: center right;
    background-repeat: no-repeat;
    background-image: url(${HistoryImg});
    background-size:cover;
  }
  .sm-block-desc{
    width:800px;
    max-width:100%;
    margin:0 auto;
  }
  .md-block-desc{
    width:1000px;
    max-width:100%;
    margin:0 auto;
  }
  .block-card{
    width:1200px;
    max-width:100%;
    margin:0 auto;
  }
  .cardDeck_heading { 
    font-size: 36px;
  }
  .img-wrapper{
    padding-top:1em;
  }
  img{
     width:900px;
     max-width:100%;
     margin:0 auto;
   }
  .img-desc{
    margin-top: 16px;
    font-size: 16px;
    font-style: italic;
    text-align:center;
  }
  .bg-car{
    background-image: url(${BgCloudsImg});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    padding-bottom: 24%;
    background-color: #fff;
  }
  .content_block_heading {
    font-size: 36px;
  }
  .tr-steps {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 60px;
    position: relative;
    @media(max-width: 600px) {
      display: block;
    }
    &.is-4 {
      grid-template-columns: repeat(4,1fr);
    }
    &:after {
      content: '';
      position: absolute;
      z-index: 0;
      top: 32px;
      left: 50%;
      width: calc(100% - 144px);
      transform: translateX(-50%);
      height: 2px;
      background-color: #007bff;
      @media(max-width: 600px) {
      display: none;
     }
    }
    .tr-step{
      text-align:center;
      .step-number {
        position: relative;
        z-index: 2;
        background-color: #f0f7ff;
        width: 64px;
        height: 64px;
        border-radius: 100px;
        border: 2px solid #007bff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        span {
          font-size: 24px;
          font-weight: 500;
          font-family: geomanist,-apple-system,Helvetica,Arial,sans-serif;
          color: #007bff;
        }
      }
      .step-title {
        font-size: 18px;
        font-family: canada-type-gibson,-apple-system,Helvetica,Arial,sans-serif;
        font-weight: 700;
        color: #007bff;
        margin: 10px 0 0 0;
      }
      .step-desc {
        font-size: 14px;
        font-family: canada-type-gibson,-apple-system,Helvetica,Arial,sans-serif;
        font-weight: 400;
        color: #2e2e2e;
      }
    }
  }
`;
export const SectionHeading = styled.div`
	margin: 0 0 3em 0;
	@media (max-width: 568px) {
		margin:0;
	}
	&.sticky-header{
		position: sticky;
    top: 200px;
	}
`;
export const Heading = styled.h1`
	max-width:900px;
	margin-left:auto;
	margin-right:auto;
`;

export const Subhead = styled.div`
	max-width:800px;
	margin:0 auto;
	@media (max-width: 768px) {
		font-size:17px;
	}
`;
export const WorkOrdersImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin: 3rem 0rem;
  img {
    width: 700px;
  }
`

// Custom Styles for Preventive Maintenance Page
export const CustomBanner = styled(Banner)`
  background:url(${BannerImg}) 0 0 no-repeat;
  background-size:cover;
  .hero-content{
    width:800px;
    max-width:100%;
  }
`;

export const CustomContentWrapper = styled(ContentWrapper)`
  img{
     width:700px;
   }
  .tr-steps {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 60px;
    position: relative;
    margin: 1rem 0rem;
    @media(max-width: 768px) {
      display: block;
			&:after {
      display: none;
    	}
    }
    .tr-step{
      margin: 1rem 0rem;
    }
  }
  .iframe-wrapper {
    padding-top:1em;
    object-fit: contain;
    position: relative;
    position: relative;
    display: flex;
    align-items:center;
    justify-content: center;
}
`;
