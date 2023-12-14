import React,{useState} from 'react'
import styled from "styled-components";
import { Form, Button } from 'react-bootstrap';

const ROICalculator = (props) => {
	const [validated, setValidated] = useState(false);
	const [calc, setCalc] = useState('');
	const industries = [
		'Select type of industry',
		'Manufacturing',
		'Equipment',
		'Facilities',
		'Farming',
		'Restaurants',
		'Churches',
		'Fleet',
		'School',
		'City',
		'Gym & Fitness'
	]
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		let industryType = form.param1.value
		let teamSize = form.param2.value
		let hourlyRate = form.param3.value
		if (form.checkValidity() === false) {
			event.stopPropagation();
			setValidated(true);
			return;
		}
		
		setValidated(true);
		let calVal = 0
		let initSavings = 0
		if( industryType == 'manufacturing' || industryType == 'equipment' ) {
			initSavings = 207.6 * teamSize * hourlyRate * 1.27 - teamSize*900;
		} else {
			initSavings = 207.6 * teamSize * hourlyRate - teamSize*900;
		}

		let roundSavings = Math.round(initSavings);
		let savings = '$' + roundSavings.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	
		setCalc(savings)
		return;
	};
	return (
		<Calculator className={props?.className}>
			<h4>Calculate your Savings</h4>
			<div className="form-wrapper">
				<Form validated={validated} onSubmit={handleSubmit} noValidate>
					<Form.Group controlId="num-order">
						<Form.Label>What type of industry are you in?</Form.Label>
						<Form.Control as="select" name="param1">
							{
								industries.map((industry, i)=>{
									return (
									<option key={i} value={industry.toLowerCase()}>{industry}</option>
									)
								})
							}
						</Form.Control>
						<Form.Control.Feedback type="invalid">
							Please select a type of industry.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="num-order">
						<Form.Label>How many people are there on your maintenance team?</Form.Label>
						<Form.Control type="number" min={0} step="any" name="param2" required
							placeholder="# of people"
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a valid number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="num-order">
						<Form.Label>What's theaverage hourly rate per maintenance team member?</Form.Label>
						<Form.Control type="number" min={0} step="any" name="param3" required
							placeholder="ex. $30 per hour"
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a valid number
						</Form.Control.Feedback>
					</Form.Group>
					<Button variant="primary" type="submit">
						Calculate
					</Button>
				</Form>
				{ 
					calc!=='' && 
					(
					<div className="result-wrapper">
						<p>With UpKeep, you could save up to</p>
						<p className="calc-value">{calc}</p>.
					</div>
					)
				}	
			</div>
		</Calculator>
	)
};

export default ROICalculator

export const Calculator = styled.div`
	max-width:600px;
	width:100%;
	margin:10px auto 50px;
	padding:50px 30px;
	background:#fff;
	box-shadow:0px 30px 30px rgba(10, 16, 34, 0.1);
	h4{
		text-align:center;
		margin-bottom:0;
	}
	.cal-desc{
		color:#5b5e6d;
		font-style: italic;
		font-size:14px;
		margin-bottom:20px;
		text-align:center;
	}
	label{
		font-size:15px;
		font-weight:500;
	}
	input{
		font-size:15px;
		&::placeholder { 
			color: #A9ACB1;
			opacity: 1;
		}
	}
	select{
		font-size:15px;
		&::placeholder { 
			color: #A9ACB1;
			opacity: 1;
		}
	}
	.result-wrapper{
		margin-top:20px;
		text-align:center;
		.calc-value{
			font-weight:bold;
			font-size:1.1em;
			color:#007bff;
		}
	}
`