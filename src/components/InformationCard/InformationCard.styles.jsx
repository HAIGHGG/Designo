import styled from 'styled-components'

export const InformationCardWrapper = styled.div`
	margin-bottom: 40px;
	background-color: #fdf3f0;
	color: var(--black);
	overflow: hidden;
	.text-wrapper {
		padding: 75px 26px;
	}
	h2 {
		margin-bottom: 20px;
		color: var(--peach);
	}
	div:nth-of-type(1) {
		margin-bottom: 25px;
	}

	@media (min-width: 768px) {
		margin: 0 40px;
		border-radius: 15px;
		width: 100%;
	}


	@media (min-width: 1440px) {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	@media (min-width: 1920px) {
		h2{
			font-size: 48px;
			line-height: 92px;
		}
		p{
			font-size: 22px;
			line-height: 36px;
		}
	}

`
