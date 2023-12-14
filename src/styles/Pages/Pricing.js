import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const PricingContainer = styled(Container)`

`

export const PricingTableContainer = styled(Container)`

`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;

  @media screen and (max-width: 1200px){
    justify-content: space-evenly;
  }

  @media screen and (max-width: 1130px){
    margin-bottom: 0;
  }
`

export const Col = styled.div`
  width: 24%;

  @media screen and (max-width: 1199px){
    width: 40%;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 991px){
    width: 70%;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 767px){
    width: 80%;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 575px){
    width: 100%;
    margin-bottom: 30px;
  }
`

export const CheckHolder = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, #EDF8F1 0%, #FFFFFF 100%);
    border-radius: 50%;
`

export const TableHeader = styled.p`
  margin-bottom: 0;
  padding: 6px 0;
`

export const RowHeader = styled.th`
  width: 27%;
  border: 1px solid #dee2e6;
  
  a {
      
    :hover {
      text-decoration: underline;
    }
  }
`
export const Row = styled.tr`
  border-top: 0 solid !important;
`
export const RowCell = styled.td`
  position: relative;
  width: 18.25%;
  text-align: center;
  border: 1px solid #dee2e6;
`

export const RowCellHeader = styled.td`
  z-index: 1;
  position: sticky;
  top: 80px;

  padding: 0;
  width: 18.25%;
  text-align: center;
  border-top: 0 !important;
`

export const ExtraRowCell = styled.td`
  z-index: 1;
  position: sticky;
  top: 80px;
  padding: 0 !important;

  background: #fff;
  border: 0 !important;
  border-top: 0 !important;
`
export const ToggleHolder = styled.div`
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ToggleLabel = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`