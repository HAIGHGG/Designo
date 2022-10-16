import React from 'react'
import Location from '../components/Location/Location'
import { FlexboxLayout } from '../components/Layouts/FlexboxLayout'
import ContactUsForm from '../components/ContactUsForm/ContactUsForm'
import AnimatedPage from '../components/AnimatedPage'
import { GridLayout } from '../components/Layouts/GridLayout'

function Contact() {
	return (<AnimatedPage>
		<FlexboxLayout>
			<ContactUsForm />
			<GridLayout>
				<Location
					props={{
						title: 'CANADA',
						image: './assets/shared/desktop/illustration-canada.svg',
						alt: 'Woman designing on tablet',
					}}
				/>
				<Location
					props={{
						title: 'AUSTRALIA',
						image: './assets/shared/desktop/illustration-australia.svg',
						alt: 'Woman designing on tablet',
					}}
				/>
				<Location
					props={{
						title: 'UNITED KINGDOM',
						image: './assets/shared/desktop/illustration-united-kingdom.svg',
						alt: 'Woman designing on tablet',
					}}
				/>
			</GridLayout>
		</FlexboxLayout></AnimatedPage>
	)
}

export default Contact
