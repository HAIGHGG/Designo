import React from 'react'
import { StyledForm } from './ContactUsForm.styles'
import { StyledButton } from '../Button/Button'

function ContactUsForm() {
	return (
		<StyledForm>
			<h2>Contact Us</h2>
			<p>
				Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your
				business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
			</p>
			<form>
				<input type='text' placeholder='Name' />
				<input type='text' placeholder='Email Address' />
				<input type="text" pattern="[0-9]+" maxLength="15" placeholder='Phone' />
				<input type='text' placeholder='Your Message' />
                <StyledButton>SUBMIT</StyledButton>
			</form>
		</StyledForm>
	)
}

export default ContactUsForm
