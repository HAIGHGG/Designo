import styled from 'styled-components'

export const Wrapper = styled.nav`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 96px;
	padding: 0 25px;

	.hidden {
		left: -9999px;
	}
	.menu {
		display: none;
	}
	.visible {
		left: 0;
	}
	img {
		width: 210px;
	}

	@media (min-width: 768px) {
		.navbars {
			display: none;
		}
		.menu {
			display: flex;
			flex-direction: row;
			font-size: 14px;
			gap: 40px;

			a {
				color: var(--black);
				transition: color 0.2s;
				
				:hover{
					color: var(--peach);
				}
			}
		}
	}
	@media (min-width: 1440px) {
		padding: 0 165px;
		height: 155px;
	}
	@media (min-width: 1920px) {
		.menu{
			font-size: 24px;
		}
		img{
			width: 310px;
		}
	}
`
export const BurgerMenu = styled.div`
	position: absolute;
	top: 96px;
	left: 0;
	width: 100%;
	padding: 25px;
	background-color: var(--black);
	color: var(--white);
	transition: left ease-out 0.2s;
	z-index: 10;

	div {
		font-size: 24px;
		margin: 20px 0;
		width: 100%;
		text-align: left;
	}
	a {
		color: var(--white);
	}
`
