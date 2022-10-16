import React from 'react'
import DesignCard from '../components/DesignCard/DesignCard'
import Header from '../components/Header/Header'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { GridLayout, DesignCardsGridLayout } from '../components/Layouts/GridLayout'
import AnimatedPage from '../components/AnimatedPage'
import { FlexboxLayout } from '../components/Layouts/FlexboxLayout'

function WebDesign() {
	return (
		<AnimatedPage>
			<FlexboxLayout>
				<Header
					header={{
						title: 'Web Design',
						description:
							'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
					}}
				/>
			</FlexboxLayout>
			<GridLayout>
				<DesignCard
					card={{
						image: './assets/web-design/desktop/image-express.jpg',
						title: 'EXPRESS',
						description: 'A multi-carrier shipping website for ecommerce businesses',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/web-design/desktop/image-transfer.jpg',
						title: 'TRANSFER',
						description: 'Site for low-cost money transfers and sending money within seconds',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/web-design/desktop/image-photon.jpg',
						title: 'PHOTON',
						description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/web-design/desktop/image-builder.jpg',
						title: 'BUILDER',
						description: 'Connects users with local contractors based on their location',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/web-design/desktop/image-blogr.jpg',
						title: 'BLOGR',
						description: 'Blogr is a platform for creating an online blog or publication',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/web-design/desktop/image-camp.jpg',
						title: 'CAMP',
						description: 'Get expert training in coding, data, design, and digital marketing',
					}}
				/>
			</GridLayout>
			<DesignCardsGridLayout>
				<ProjectCard
					card={{
						id: 'appdesign',
						title: 'APP DESIGN',
						imageMobile: `url(./assets/home/mobile/image-app-design.jpg)`,
						imageTablet: `url(./assets/home/tablet/image-app-design.jpg)`,
					}}
				/>
				<ProjectCard
					card={{
						id: 'graphicdesign',
						title: 'GRAPHIC DESIGN',
						imageMobile: `url(./assets/home/mobile/image-graphic-design.jpg)`,
						imageTablet: `url(./assets/home/tablet/image-graphic-design.jpg)`,
					}}
				/>
			</DesignCardsGridLayout>
		</AnimatedPage>
	)
}

export default WebDesign
