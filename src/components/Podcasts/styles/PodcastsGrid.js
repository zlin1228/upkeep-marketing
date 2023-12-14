import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px auto;
`;
export const GridWrapper = styled.div`
  padding: 0 auto;
  height: 100%;
  margin: 64px 0px;
`;
export const GridHeading = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 24px;
  margin-bottom: 56px;
  padding: 0px 15px;
  display: flex;
  @media (max-width: 499px) {
    margin-bottom: 16px;
  }
  .heading_details {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    @media (max-width: 761px) {
      flex-basis: 100%;
      justify-content: space-between;
    }
    strong {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #ffffff;
      margin-right: 24px;
    }
    .current_page {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #a9acb1;
    }
  }
  .pagination_ctrls {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
      display: none;
    }
    .pagination_btn {
      display: flex;
      align-items: center;
      background: transparent;
      outline: none;
      border: none;
      padding: 0;

      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #ffffff;
      &:focus {
        outline: none;
      }
    }
  }
`;
export const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;
  justify-content: center;
  place-items: center;
  padding: 0px 15px;
  margin-bottom: 80px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 414px) {
    padding: 0px;
    gap: 30px;
  }
  .card_frame {
    margin-right: 0 !important;
    margin-left: 0 !important;
    width: 100% !important;
    height: 554px;
    place-self: center;
  }
  .pagination {
    grid-column: span 3;
  }
`;
export const PaginationWrapper = styled.div`
  margin: 82px auto 72px auto;
  .pagination {
    margin: 0 auto;
    button,
    span {
      color: #ffffff;
    }
    .active_page {
      background: #ffffff;
      color: #0b1a2b;
    }
  }
`;
