import styled from 'styled-components'

export const MapCardWrapper = styled.div`
	margin-bottom: 40px;
	background-color: #fdf3f0;
	color: var(--black);
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
		background-color: #ffffff;
		border-radius: 15px;
		overflow: hidden;
		width: 100%;

		.text-wrapper {
			display: flex;
			align-items: flex-end;
			justify-content: flex-start;
			padding-left: 75px;
			gap: 105px;
			border-radius: 15px;
			background-color: #fdf3f0;

			div:nth-of-type(1) {
				margin-bottom: 0px;
				max-width: 182px;
			}
			div {
				text-align: left;
			}
		}
		img {
			width: 100%;
			margin-bottom: 25px;
			border-radius: 15px;
		}
	}
	@media (min-width: 1440px) {
		display: flex;
		flex-direction: row;
		gap: 30px;

		img {
			width: auto;
			height: auto;
		}
		.text-wrapper {
			width: 100%;
		}
	}
	@media (min-width: 1920px) {
		.text-wrapper {
			padding: auto;
			div:nth-of-type(1) {
				max-width: 320px;
			}
		}

	}
`
