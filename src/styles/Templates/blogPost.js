import styled from 'styled-components' 
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'

export const BlogContainer = styled(Container)`
  padding-top: 70px;
  img {
    display: block;
    box-shadow: 0 0 5px gray;
  }
  @media screen and (min-width: 1200px){
    max-width: 815px;
  }
` 

export const BlogHead = styled.div`
  padding-bottom: 20px;
`

export const ImageHolder = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
`

export const DetailsHolder = styled.div``

export const Name = styled.span`
  padding-left: 20px;

  @media screen and (max-width: 575px){
    padding-left: 20px;
  }
`
export const Details = styled.span`
  display: none;
  padding-left: 35px;

  @media screen and (max-width: 767px){
    display: block;
  }

  @media screen and (max-width: 575px){
    padding-left: 20px;
  }
`

export const DateHolder = styled.div`
  text-align: right;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Date = styled.span`
`
export const Minute = styled.span`
  display: block;
`


export const Content = styled.div`
  margin-top: 33px;
`

export const FeaturedImage = styled.div`
  text-align: center;
`

export const BlogFooter = styled.div`
  display: flex;
  padding-top: 12px;
  margin-bottom: 30px;
` 

export const TagLink = styled(Link)`
  padding-right: 20px;
  padding-bottom: 12px;
  white-space: nowrap;

  @media screen and (max-width: 767px){
  }
`

export const Icon = styled.div`
  font-size: 20px;
`
export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
`

