import React from 'react'
import { FlexboxLayout } from '../components/Layouts/FlexboxLayout'
import MapCard from '../components/MapCard/MapCard'
import AnimatedPage from '../components/AnimatedPage'

function Locations() {
	return (
		<AnimatedPage>
			<FlexboxLayout>
				<MapCard
					card={{
						isReverse: true,
						id:'canada',
						imageMobile: './assets/locations/desktop/image-map-canada.png',
						imageTablet: './assets/locations/tablet/image-map-canada.png',
						imageDesktop: './assets/locations/desktop/image-map-canada.png',
						title: 'Canada',
						firsth4: 'Designo Central Office',
						firstp: '3886 Wellington Street',
						secondp: 'Toronto, Ontario M9C 3J5',
						secondh4: 'Contact',
						thirdp: 'P : +1 253-863-8967',
						fourthp: 'M : contact@designo.co',
					}}
				/>
				<MapCard
					card={{
						isReverse: false,
						id:'australia',
						imageMobile: './assets/locations/desktop/image-map-australia.png',
						imageTablet: './assets/locations/tablet/image-map-australia.png',
						imageDesktop: './assets/locations/desktop/image-map-australia.png',
						title: 'Australia',
						firsth4: 'Designo AU Office',
						firstp: '19 Balonne Street',
						secondp: 'New South Wales 2443',
						secondh4: 'Contact',
						thirdp: 'P : (02) 6720 9092',
						fourthp: 'M : contact@designo.au',
					}}
				/>
				<MapCard
					card={{
						isReverse: true,
						id:'unitedkingdom',
						imageMobile: './assets/locations/desktop/image-map-united-kingdom.png',
						imageTablet: './assets/locations/tablet/image-map-uk.png',
						imageDesktop: './assets/locations/desktop/image-map-united-kingdom.png',
						title: 'United Kingdom',
						firsth4: 'Designo UK Office',
						firstp: '13  Colorado Way',
						secondp: 'Rhyd-y-fro SA8 9GA',
						secondh4: 'Contact',
						thirdp: 'P : 078 3115 1400',
						fourthp: 'M : contact@designo.uk',
					}}
				/>
			</FlexboxLayout>
		</AnimatedPage>
	)
}

export default Locations
