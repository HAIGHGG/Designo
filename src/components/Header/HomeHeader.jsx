import styled from 'styled-components'

export const HomeHeader = styled.header`

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 80px 25px 0px 25px;
	background-color: var(--peach);
	color: var(--white);
	overflow: hidden;


	p {
		margin-top: 25px;
	}

	@media (min-width: 768px) {
		margin: 0 40px;
		padding: 80px 105px 0px 105px;
		border-radius: 15px;

	}

	@media (min-width: 1440px) {
		flex-direction: row;
		margin: 0 165px;
		padding: 80px 0px 0px 105px;

		img{
			margin-left: 90px;
		}

		div:nth-of-type(1){
			text-align: left;
		}
		
	}
	@media (min-width: 1920px) {
		h1{
			font-size: 64px;
			line-height: 72px;
		}
		p{
			font-size: 36px;
			line-height: 52px;
		}
	}
`
