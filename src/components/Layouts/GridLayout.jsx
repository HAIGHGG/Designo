import styled from 'styled-components'

export const GridLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	row-gap: 25px;
	margin-top: 100px;
	padding: 25px;

	@media (min-width: 768px) {
		justify-items: normal;
		margin: 100px 40px 0px 40px;
		padding: 0px;
	}

	@media (min-width: 1440px) {
		margin-left: 165px;
		margin-right: 165px;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 25px;
	}
`

export const HomeGridLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	row-gap: 25px;
	margin-top: 100px;
	padding: 25px;

	@media (min-width: 768px) {
		justify-items: normal;
		margin: 100px 40px 0px 40px;
		padding: 0px;
	}

	@media (min-width: 1440px) {
		margin-left: 165px;
		margin-right: 165px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		column-gap: 25px;

		.webdesign {
			grid-row-start: 1;
			grid-row-end: 3;
		}
	}
	@media (min-width: 1920px) {
		column-gap: 35px;
		row-gap: 20px;
	}
`

export const DesignCardsGridLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	row-gap: 25px;
	margin-top: 100px;
	padding: 25px;

	@media (min-width: 768px) {
		justify-items: normal;
		margin: 100px 40px 0px 40px;
		padding: 0px;
	}

	@media (min-width: 1440px) {
		height: 308px;
		margin-left: 165px;
		margin-right: 165px;
		grid-template-columns: 1fr 1fr;
		column-gap: 25px;
	}
`
