import styled from 'styled-components'

export const LocationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
	padding: 0 30px;

	div {
		background-image: url('./assets/home/desktop/bg-pattern-hero-home.svg');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	h3 {
		font-size: 20px;
	}

	button {
		width: 152px;
		height: 56px;
		margin-top: 25px;
		font-size: 15px;
		border-radius: 8px;
		color: var(--white);
		background-color: var(--peach);
		cursor: pointer;
	}

	@media (min-width: 1440px) {
		margin: 0 60px 50px 60px;
	}
	@media (min-width: 1920px) {
		margin: 0 140px 50px 140px;
		h3 {
			font-size: 28px;
		}

		button {
			width: 200px;
			height: 80px;
			margin-top: 25px;
			font-size: 24px;
		}
	}
`
