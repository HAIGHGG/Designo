import React from 'react'
import { StyledHeader } from './Header.styles'
import MediaQuery from 'react-responsive'
import {useMediaQuery} from 'react-responsive'

function Header({ header }) {

	const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
	return (
		<StyledHeader style={{flexDirection: header.isRowreverse && isBigScreen && "row-reverse"}}>
			<MediaQuery maxWidth={767}>
				<img src={header.imageMobile} alt='' />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1023}>
				<img src={header.imageTablet} alt='' />
			</MediaQuery>
			<MediaQuery minWidth={1024}>
				<img src={header.imageDesktop} alt='' />
			</MediaQuery>
			<div>
				<h1>{header.title}</h1>
				<p>{header.description}</p>
			</div>
		</StyledHeader>
	)
}

export default Header
