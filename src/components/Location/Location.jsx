import { LocationWrapper } from './Location.styles'
import { Link } from 'react-router-dom'
import React from 'react'

function Location({ props }) {
	return (
		<LocationWrapper>
			<div>
				<img src={props.image} alt={props.alt} />
			</div>
			<h3>{props.title}</h3>
			<Link to={'/locations#' + props.id}>
				<button>SEE LOCATION</button>
			</Link>
		</LocationWrapper>
	)
}

export default Location
