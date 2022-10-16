import React from 'react'
import { DesignCardWrapper } from './DesignCard.style'

function DesignCard({ card }) {
	return (
		<DesignCardWrapper>
			<img src={card.image} alt='' />
			<div>
				<h3>{card.title}</h3>
				<p>{card.description}</p>
			</div>
		</DesignCardWrapper>
	)
}

export default DesignCard
