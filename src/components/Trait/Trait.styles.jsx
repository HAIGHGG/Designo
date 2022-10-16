import styled from 'styled-components'

export const TraitWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
	padding: 0 30px;

	h3 {
		margin-bottom: 30px;
	}

	div:nth-of-type(1) {
		background-image: url('./assets/home/desktop/bg-pattern-hero-home.svg');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		gap: 40px;

		div:nth-of-type(2) {
			text-align: start;
		}
	}
	@media (min-width: 1440px) {
		flex-direction: column;
		div:nth-of-type(2) {
			text-align: center;
		}
	}
	@media (min-width: 1920px) {
		h3 {
			font-size: 32px;
			line-height: 52px;
		}
		p{
			font-size: 24px;
		}
	}
`
