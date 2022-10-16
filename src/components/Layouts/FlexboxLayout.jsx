import styled from 'styled-components'

export const FlexboxLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;


	@media (min-width: 768px) {
		align-items: center;
		margin: 40px;
	}
	
	@media (min-width: 1440px) {
		margin-left: 165px;
		margin-right: 165px;

	}
`
