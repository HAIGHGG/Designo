import React from 'react'
import { MapCardWrapper } from './MapCard.styles'
import MediaQuery from 'react-responsive'

function MapCard({ card }) {
	return (
		<MapCardWrapper id={card.id} style={{flexDirection: card.isReverse && "row-reverse"}}>
			<MediaQuery maxWidth={767}>
				<img src={card.imageMobile} alt='' />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1023}>
				<img src={card.imageTablet} alt='' />
			</MediaQuery>
			<MediaQuery minWidth={1024}>
				<img src={card.imageDesktop} alt='' />
			</MediaQuery>
			<div className='text-wrapper'>
				<div>
					<h2>{card.title}</h2>
					<h4>{card.firsth4}</h4>
					<p>{card.firstp}</p>
					<p>{card.secondp}</p>
				</div>
				<div>
					<h4>{card.secondh4}</h4>
					<p>{card.thirdp}</p>
					<p>{card.fourthp}</p>
				</div>
			</div>
		</MapCardWrapper>
	)
}

export default MapCard
