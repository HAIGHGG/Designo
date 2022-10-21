import { Wrapper, BurgerMenu } from './Navbar.styles'
import { ReactComponent as NavBars } from '../../assets/shared/mobile/icon-hamburger.svg'
import { ReactComponent as NavBarsClose } from '../../assets/shared/mobile/icon-close.svg'
import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
	const [menuClass, setMenuClass] = useState('hidden')
	const [isClicked, setIsClicked] = useState(false)
	const location = useLocation()
	let menuRef = useRef()

	const updateMenu = () => {
		!isClicked ? setMenuClass('visible') : setMenuClass('hidden')
		setIsClicked(!isClicked)
	}


	useEffect(() => {
		let handler = e => {
			if (!menuRef.current.contains(e.target)) {
				setMenuClass('hidden')
				setIsClicked(false)
			}
		}

		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	})

	return (
		<Wrapper>
			<Link to={'/'}>
				<img src='./assets/shared/desktop/logo-dark.png' alt='design logo' />
			</Link>
			<div className='menu'>
				{' '}
				<Link to={'/aboutus'}>
					<div>OUR COMPANY</div>
				</Link>
				<Link to={'/locations'}>
					<div>LOCATIONS</div>
				</Link>
				<Link to={'/contact'}>
					<div>CONTACT</div>
				</Link>
				{location.pathname !== '/' ? (
					<Link to={'/'}>
						<div>HOME</div>
					</Link>
				) : null}
			</div>
			{!isClicked ? (
				<NavBars className='navbars' onClick={updateMenu} />
			) : (
				<NavBarsClose className='navbars' onClick={updateMenu} />
			)}
			<BurgerMenu className={menuClass} ref={menuRef}>
				<Link to={'/aboutus'} onClick={updateMenu}>
					<div>OUR COMPANY</div>
				</Link>
				<Link to={'/locations'} onClick={updateMenu}>
					<div>LOCATIONS</div>
				</Link>
				<Link to={'/contact'} onClick={updateMenu}>
					<div>CONTACT</div>
				</Link>
				{location.pathname !== '/' ? (
					<Link to={'/'} onClick={updateMenu}>
						<div>HOME</div>
					</Link>
				) : null}
			</BurgerMenu>
		</Wrapper>
	)
}

export default Navbar
