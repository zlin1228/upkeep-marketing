import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import { caseStudyContent } from '../data/CaseStudies';
import { CaseStudyHeading, CardsRow, CardFrame, Clickable } from '../styles/CaseStudyCards';

const CaseStudyCards = () => (
	<Container className="mt-5" style={{ marginBottom: '100px' }}>
		<Row className="case_study_row">
			<CaseStudyHeading className="case_study_heading">
				<h5 className="heading_kicker">{caseStudyContent.headingKicker}</h5>
				<h2 className="heading">{caseStudyContent.heading}</h2>
			</CaseStudyHeading>
		</Row>
		<CardsRow className="cards_row justify-content-center">
			{caseStudyContent.caseStudies.map(card => (
				<CardFrame xs={12} md={5} className="card_frame" background={card.background} key={card.study_title} hoverable={card.clickable}>
					<h3 className="card_title">{card.study_title}</h3>
					<p className="card_description">{card.study_description}</p>
					<Link to={card.callToAction.url.replace('https://www.onupkeep.com', '')} className="card_cta animation-link">{card.callToAction.label}</Link>
					{card.clickable ? (
						<Clickable to={card.callToAction.url.replace('https://www.onupkeep.com', '')} />
					) : null}
				</CardFrame>
			))}
		</CardsRow>
	</Container>
)

export default CaseStudyCards;