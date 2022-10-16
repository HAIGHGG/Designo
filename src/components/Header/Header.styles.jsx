import styled from 'styled-components'

export const StyledHeader = styled.header`
	background-color: var(--peach);
	color: var(--white);
	overflow: hidden;

	img {
		width: 100%;
	}

	div {
		margin: 110px 0;
		padding: 0 20px;
	}

	p {
		margin-top: 25px;
	}

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 30px 0px 80px 0px;
		border-radius: 15px;
		width: auto;

		div {
			padding: 0 60px;
		}
	}
	@media (min-width: 1440px) {
		width: 100%;
		flex-direction: column;
	}
	/* @media (min-width: 1920px) {
		h1 {
			font-size: 52px;
			line-height: 72px;
		}
		p {
			font-size: 24px;
			line-height: 52px;
		}
	} */
`
