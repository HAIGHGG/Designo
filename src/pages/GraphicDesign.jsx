import React from 'react'
import DesignCard from '../components/DesignCard/DesignCard'
import Header from '../components/Header/Header'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { GridLayout, DesignCardsGridLayout } from '../components/Layouts/GridLayout'
import AnimatedPage from '../components/AnimatedPage'
import { FlexboxLayout } from '../components/Layouts/FlexboxLayout'

function GraphicDesign() {
	return (
		<AnimatedPage>
			<FlexboxLayout>
				<Header
					header={{
						title: 'Graphic Design',
						description:
							'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
					}}
				/>
			</FlexboxLayout>
			<GridLayout>
				<DesignCard
					card={{
						image: './assets/graphic-design/desktop/image-change.jpg',
						title: 'TIM BROWN',
						description: "A book cover designed for Tim Brown's new release, 'Change'",
					}}
				/>
				<DesignCard
					card={{
						image: './assets/graphic-design/desktop/image-boxed-water.jpg',
						title: 'BOXED WATER',
						description: 'A simple packaging concept made for Boxed Water',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/graphic-design/desktop/image-science.jpg',
						title: 'SCIENCE!',
						description: 'A poster made in collaboration with the Federal Art Project',
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
						id: 'webdesign',
						title: 'WEB DESIGN',
						imageMobile: `url(./assets/home/mobile/image-web-design.jpg)`,
						imageTablet: `url(./assets/home/tablet/image-web-design.jpg)`,
					}}
				/>
			</DesignCardsGridLayout>
		</AnimatedPage>
	)
}

export default GraphicDesign
