import styled from 'styled-components'
import { Link } from 'gatsby'

export const Card = styled.div`
    ${props => props.count ? 'display: flex;' : ''}
    ${props => props.count ? 'flex-direction: column;' : ''}
    ${props => props.count ? 'justify-content: space-between;' : ''}
    ${props => props.count ? 'height: 100%;' : ''}
    ${props => props.position === 0 ? 'margin-bottom: 30px;' : ''}
    padding: 48px;
    ${props => props.position === 0 ?  `background: #47b972;` : ( props.position === 1 ? 'background: #efc75e;' : 'background: #007bff;' ) }
    border-radius: 4px;
    box-shadow: 0 24px 42px 0 rgba(24,28,36,0.1);

    @media screen and (max-width: 991px) {
        padding: 32px;
    }

    @media screen and (max-width: 767px) {
        ${props => props.position === 0 ? 'margin-bottom: 22px;' : ''}
    }
`
export const Kicker = styled.span`
    color: #FFF;
    letter-spacing: 1.25px;
    line-height: 23px;
    text-transform: uppercase;

    @media screen and (max-width: 991px) {
    }
`
export const Title = styled.p`
    margin-top: 8px;
    margin-bottom: 0;
    color: #FFF;
    letter-spacing: 0;

    @media screen and (max-width: 991px) {
    }

    @media screen and (max-width: 767px) {
        font-size:  22px;
    }
`

export const CardLink = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    width: fit-content;
    color: #fff;

    :hover {
        color: #fff;
    }

    :after {
        content: '';
        position: absolute;
        display: block;
        height: 2px;
        width: 95%;
        bottom: -3px;
        background: #fff;
    }
`

export const ArrowHolder = styled.span`
    padding-left: 5px;
`

export const Head = styled.div``