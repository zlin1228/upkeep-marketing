import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  @media (max-width: 575px) {
    height: auto;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(
    270deg,
    #ffffff -7.81%,
    rgba(255, 255, 255, 0) 50.31%
  );
  display: block;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;
export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  z-index: 9;
`;
export const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  height: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #707481;
  overflow-y: scroll;
  @media (max-width: 575px) {
    position: relative;
    flex-direction: column;
  }
  .read_time,
  .author,
  .publish_date {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    position: static;
    width: 100%;
    height: 100%;
    margin-right: 32px;
    white-space: nowrap;
    @media (max-width: 575px) {
      margin-right: 0px;
      margin-bottom: 8px;
    }
    svg {
      margin-right: 8px;
    }
  }
`;
