import React from 'react'
import { ProjectCardWrapper } from './ProjectCard.styles'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function ProjectCard({ card }) {
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

	return (
		<Link to={'/' + card.id} className={card.id}>
			<ProjectCardWrapper
				style={{
					backgroundImage: isMobile ? 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),' + card.imageMobile : 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),' + card.imageTablet,
				}}>
				<h2>{card.title}</h2>
				<h3>
					VIEW PROJECTS <span>&gt;</span>
				</h3>
			</ProjectCardWrapper>
		</Link>
	)
}

export default ProjectCard
