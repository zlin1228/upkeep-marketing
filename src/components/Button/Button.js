import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "gatsby";
/**
 * @param props
 * @subparam 'as' link, input
 * @subparam 'to' href
 * @subparam 'type' submit, reset, button
 * @subparam 'value'
 * @subparam className
 */
const Button = (props) => {
	if(props.as==='link'){
		return (
			<LinkWrapper to={props.href?props.href:'/'} className={'btn ' + (props.className?props.className:'btn-primary')} onClick={(e)=>(props.onclick(e))}>{props.value}</LinkWrapper>
		);
	} else {
		return (
			<ButtonWrapper type={props.type} className={'btn ' + (props.className?props.className:'btn-primary')} onClick={(e)=>(props.onClick(e))}>{props.value}</ButtonWrapper>
		)
	}
	
};

export default Button;

export const ButtonWrapper = styled.button`
`;
export const LinkWrapper = styled(Link)`
`;