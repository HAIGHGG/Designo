import styled from 'styled-components'

export const StyledForm = styled.div`
	padding: 65px 25px;
	display: flex;
	flex-direction: column;
	color: var(--white);
	background-color: var(--peach);
	form {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;

		input {
			width: 100%;
			margin-top: 5px;
			padding: 15px;
			border-bottom: 1px solid var(--white);
			color: var(--white);
			background-color: var(--peach);

			::placeholder {
				color: #f3c0b5;
			}
		}
	}
	@media (min-width: 768px) {
		padding: 65px 50px;
		border-radius: 15px;

	
		h2 {
			align-self: flex-start;
            margin-bottom: 25px;
		}
        p{
            text-align: start;
        }
		button {
			align-self: flex-end;
		}
	}
	@media (min-width: 1920px) {
		h2{
			font-size: 52px;
		}
		p{
			font-size: 24px;
		}
		input{
			font-size: 24px;
		}
	}
`
