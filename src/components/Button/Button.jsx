import styled from 'styled-components'

export const StyledButton = styled.button`
	width: 152px;
	height: 56px;
	margin: 25px 0;
	border-radius: 8px;
	color: var(--black);
	background-color: var(--white);
	font-size: 15px;
	font-weight: 500;
	cursor: pointer;
	transition: color 0.2s, background-color 0.2s;

	:hover{
		color: white;
		background-color: var(--light-peach);
	}

	/* @media (min-width: 1920px) {
		width: auto;
		height: auto;
		padding: 20px 25px;
		font-size: 24px;
	} */
`
