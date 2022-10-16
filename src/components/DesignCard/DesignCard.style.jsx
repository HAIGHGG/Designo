import styled from 'styled-components'

export const DesignCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 40px 0px;
	border-radius: 15px;
	background-color: #fdf3f0;
	overflow: hidden;
	img {
		width: 100%;
	}

	h3 {
		margin-bottom: 30px;
		color: var(--peach);
	}
	div {
		padding: 30px;
	}

	@media (min-width: 768px) {
		flex-direction: row;

		img {
			width: 50%;
		}
	}

	@media (min-width: 1440px) {
		flex-direction: column;

		img {
			width: 100%;
		}
	}
	/* @media (min-width: 1920px) {
		h3 {
			font-size: 32px;
		}
		p {
			font-size: 24px;
			line-height: 32px;
		}
	} */
`
