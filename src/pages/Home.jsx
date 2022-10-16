import React from 'react'
import { HomeHeader } from '../components/Header/HomeHeader'
import { StyledButton } from '../components/Button/Button'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { GridLayout, HomeGridLayout } from '../components/Layouts/GridLayout'
import Trait from '../components/Trait/Trait'
import { Link } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'
import MediaQuery from 'react-responsive'

function Home() {
	return (
		<AnimatedPage>
			<HomeHeader>
				<div>
					<h1>Award-winning custom designs and digital branding solutions</h1>
					<p>
						With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
						and engaging brand experiences. Find out more about our services.
					</p>
					<Link to={'/aboutus'}>
						<StyledButton>LEARN MORE</StyledButton>
					</Link>
				</div>
				<MediaQuery maxWidth={1439}>
				<img src='./assets/home/mobile/image-hero-phone-mobile.png' alt='' />
				</MediaQuery>
				<MediaQuery minWidth={1440}>
					<img src='./assets/home/desktop/image-hero-phone.png' alt="" />
				</MediaQuery>

			</HomeHeader>
			<HomeGridLayout>
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
			</HomeGridLayout>
			<GridLayout>
				<Trait
					trait={{
						title: 'PASSIONATE',
						description:
							'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
						image: './assets/home/desktop/illustration-passionate.svg',
						alt: 'Man designing on tablet',
					}}
				/>
				<Trait
					trait={{
						title: 'RESOURCEFUL',
						description:
							'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
						image: './assets/home/desktop/illustration-resourceful.svg',
						alt: 'Woman designing on tablet',
					}}
				/>
				<Trait
					trait={{
						title: 'FRIENDLY',
						description:
							' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
						image: './assets/home/desktop/illustration-friendly.svg',
						alt: 'Man and woman holding a picture',
					}}
				/>
			</GridLayout>
		</AnimatedPage>
	)
}

export default Home
