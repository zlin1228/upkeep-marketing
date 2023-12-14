import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby";

const Categories = ({ categories, slug }) => {
  return (
		<Category>
				<Link to="/blog">All</Link>
			{categories.map((category,i)=> (
				<Link 
				to={`/blog/${category?.node?.slug}`} 
				key={i} 
				className={slug==category?.node?.slug?'active':''}
				>
					{category?.node?.internalName}
				</Link>
			))}
		</Category>
  )
}

export default Categories

const Category = styled.div`
	width: 700px;
	margin: 0 auto;
	height: 50px;
	white-space: nowrap;
	overflow-x: scroll;
	scrollbar-width: thin;
	&::-webkit-scrollbar {
		height: 2px;
	}	
	&::-webkit-scrollbar-thumb {
		background: black;
		border: 1px solid #037BFE;
		width: 100px;
	}
	a {
		margin-right: 2rem;
		margin-right:32px;
		font-weight: 600;
		font-size: 13.5px;
		line-height: 16px;
		letter-spacing: 1px;
		text-transform: uppercase;
		padding:6px 10px;
		transition:all .3s;
		&.active, &:hover{
			background:#007BFF20;
			color:#007BFF;
		}
	}
`;