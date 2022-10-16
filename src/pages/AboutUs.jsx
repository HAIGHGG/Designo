import React from 'react'
import Header from '../components/Header/Header'
import { FlexboxLayout } from '../components/Layouts/FlexboxLayout'
import InformationCard from '../components/InformationCard/InformationCard'
import Location from '../components/Location/Location'
import AnimatedPage from '../components/AnimatedPage'
import { GridLayout } from '../components/Layouts/GridLayout'

function AboutUs() {
	return (
		<AnimatedPage>
			<FlexboxLayout>
				<Header
					header={{
						isRowreverse: true,
						imageMobile: './assets/about/mobile/image-about-hero.jpg',
						imageTablet: './assets/about/tablet/image-about-hero.jpg',
						imageDesktop: './assets/about/desktop/image-about-hero.jpg',
						title: 'About Us',
						description:
							'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
					}}
				/>
				<InformationCard
					card={{
						isReverse: false,
						imageMobile: './assets/about/mobile/image-world-class-talent.jpg',
						imageTablet: './assets/about/tablet/image-world-class-talent.jpg',
						imageDesktop: './assets/about/desktop/image-world-class-talent.jpg',
						title: 'World-class talent',
						firstp:
							'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
						thirdp:
							'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
					}}
				/>
				<GridLayout>
					<Location
						props={{
							id:'canada',
							title: 'CANADA',
							image: './assets/shared/desktop/illustration-canada.svg',
							alt: 'Woman designing on tablet',
						}}
					/>
					<Location
						props={{
							id:'australia',
							title: 'AUSTRALIA',
							image: './assets/shared/desktop/illustration-australia.svg',
							alt: 'Woman designing on tablet',
						}}
					/>
					<Location
						props={{
							id:'unitedkingdom',
							title: 'UNITED KINGDOM',
							image: './assets/shared/desktop/illustration-united-kingdom.svg',
							alt: 'Woman designing on tablet',
						}}
					/>
				</GridLayout>
				<InformationCard
					card={{
						isReverse: true,
						imageMobile: './assets/about/mobile/image-real-deal.jpg',
						imageTablet: './assets/about/tablet/image-real-deal.jpg',
						imageDesktop: './assets/about/desktop/image-real-deal.jpg',
						title: 'The real deal',
						firstp:
							"As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
						thirdp:
							'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
					}}
				/>
			</FlexboxLayout>
		</AnimatedPage>
	)
}

export default AboutUs
