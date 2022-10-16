import React from 'react'
import DesignCard from '../components/DesignCard/DesignCard'
import Header from '../components/Header/Header'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { GridLayout, DesignCardsGridLayout } from '../components/Layouts/GridLayout'
import AnimatedPage from '../components/AnimatedPage'
import { FlexboxLayout } from '../components/Layouts/FlexboxLayout'

function AppDesign() {
	return (
		<AnimatedPage>
			<FlexboxLayout>
				<Header
					header={{
						title: 'App Design',
						description:
							'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
					}}
				/>
			</FlexboxLayout>
			<GridLayout>
				<DesignCard
					card={{
						image: './assets/app-design/desktop/image-airfilter.jpg',
						title: 'AIRFILTER',
						description: 'Solving the problem of poor indoor air quality by filtering the air',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/app-design/desktop/image-eyecam.jpg',
						title: 'EYECAM',
						description: 'Product that lets you edit your favorite photos and videos at any time',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/app-design/desktop/image-faceit.jpg',
						title: 'FACEIT',
						description: 'Get to meet your favorite internet superstar with the faceit app',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/app-design/desktop/image-todo.jpg',
						title: 'TODO',
						description: 'A todo app that features cloud sync with light and dark mode',
					}}
				/>
				<DesignCard
					card={{
						image: './assets/app-design/desktop/image-loopstudios.jpg',
						title: 'LOOPSTUDIOS',
						description: 'A VR experience app made for Loopstudios',
					}}
				/>
			</GridLayout>
			<DesignCardsGridLayout>
				<ProjectCard
					card={{
						id: 'webdesign',
						title: 'WEB DESIGN',
						imageMobile: `url(./assets/home/mobile/image-web-design.jpg)`,
						imageTablet: `url(./assets/home/tablet/image-web-design.jpg)`,
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

export default AppDesign
