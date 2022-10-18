import styled from 'styled-components'

export const StyledFooter = styled.footer`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 260px;
	padding: 0px 25px 50px 25px;
	color: var(--white);
	background-color: var(--black);

	a {
		color: var(--white);
		transition: color 0.2s;
		:hover{
			color: var(--peach);
		}
	}

	img {
		width: 175px;
	}

	svg {
		margin: 0 9px;
		transition: transform 0.2s;
		
		:hover{
			transform: scale(1.5);
		}
	}
	/* .bar {
		height: 1px;
		width: 100%;
		background-color: #333234;
		margin: 25px 0;
	} */

	.menu {
		p {
			margin-bottom: 25px;
		}
	}

	.information-details {
		color: #8e8d8e;
		.information-addres,
		.information-contact {
			margin-bottom: 40px;
		}
	}

	.contact-div {
		position: absolute;
		bottom: 590px;
		left: 0;
		margin: 40px;
		padding: 55px 20px;
		background-color: var(--peach);
		border-radius: 15px;

		h2 {
			margin-bottom: 20px;
			font-size: 32px;
			line-height: 36px;
		}
	}
	@media (min-width: 768px) {
		align-items: stretch;
		gap: 50px;
		padding-left: 40px;
		padding-right: 40px;

		img {
			width: auto;
			height: 30px;
		}

		.information-addres,
		.information-contact {
			text-align: left;
		}

		.contact-div {
			bottom: 380px;
			margin: 0px;
			width: 92%;
			left: 50%;
			transform: translate(-50%, 0);
		}

		.top-div,
		.bottom-div {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.information-details {
			display: flex;
			flex-direction: row;
			gap: 60px;
		}

		.menu {
			display: flex;
			flex-direction: row;
			gap: 40px;

			p {
				margin-bottom: 0px;
			}
		}
	}
	@media (min-width: 1440px) {
		padding-left: 165px;
		padding-right: 165px;
		.contact-div {
			width: 77%;
		}
	}
	/* @media (min-width: 1920px) {

		h4{
			font-size: 32px;
		}

		p{
			font-size: 20px;
		}

	} */
`
