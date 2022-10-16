import styled from 'styled-components'

export const ProjectCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 250px;
	min-width: 327px;
	border-radius: 15px;
	color: var(--white);

	span {
		color: var(--peach);
	}

	@media (min-width: 768px) {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	@media (min-width: 1440px) {
		height: 100%;
	}
	@media (min-width: 1920px) {
		h2 {
			font-size: 52px;
		}
		h3 {
			font-size: 32px;
			line-height: 52px;
		}
	}
`
