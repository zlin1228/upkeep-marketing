import styled from "styled-components";
import { Link } from "gatsby";

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 991px) {
		justify-content: space-between;
	}

	@media (max-width: 767px) {
		justify-content: center;
	}
`;

export const CardItem = styled.div`
	position: relative;
	height: 100%;
	box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
	border: 1px solid #E0E6ED;
	transition: all 0.3s ease-in-out;
	&:hover {
		box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
	}
	.cat-icon{
		position:absolute;
		width:41px;
		height:41px;
		line-height:41px;
		border-radius:50%;
		top:8px;
		right:8px;
		font-size:14px;
		z-index: 10;
		text-align:center;
		color:#fff;
		&.blue{
			background:#007BFF;
		}
		&.green{
			background:#3DBE80;
		}
		&.red{
			background:#ff3529;
		}
		&.yellow{
			background:#f5c953;
		}
	}
	.article-info{
		padding:24px;
		font-size: 13.5px;
		line-height: 16px;
		.user-info{
			color:#33394B;
		}
		.pubdate{
			color: #707481;
			margin:0;
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
	height: 220px;
	overflow: hidden;
	position:relative;
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
		&:before{
			content:'';
			position:absolute;
			width:100%;
			height:100%;
			background:#E6F2FF;
			left:0;
			top:0;
		}
	}
`;
export const AvatarHolder = styled.div`
width: 24px;
height: 24px;
border-radius: 50%;
display: inline-block;
vertical-align: middle;
overflow:hidden;
margin-right:12px;
text-align:center;
line-height:24px;
font-size:14px;
background: #eee;
img {
	width: 24px;
	height: 24px;
	border-radius: 50%;
	object-fit: cover;
}
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;

	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
`;

export const CardContent = styled.div`
	padding: 24px;

`;

export const CardCategoryHolder = styled.div`
	display:flex;
	align-items-center;
	span{
		font-weight: 600;
		font-size: 13.5px;
		line-height: 16px;
		padding:6px 10px;
		color: #F5C953;
		background:#F5C95340;
	}
`;

export const CardCategory = styled.span`
	margin-bottom: 0;
	font-weight: 500;
	padding: 1em 0;
	line-height: 1.26;
	white-space: nowrap;
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const CardTitle = styled.h6`

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
		bottom: 22px;

	}
`;

export const CardBtn = styled(Link)`
	position: absolute;
	bottom: 32px;

	margin-bottom: 0;

	font-weight: 500;
	line-height: 1.26;
	

	svg {
		margin-left: 5px;
	}

	&:hover {
		opacity: 0.8;
	}

	@media (max-width: 575px) {
		bottom: 22px;

	}
`;
