import { StyledFooter } from './Footer.styles'
import { ReactComponent as IconFacebook } from '../../assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as IconYoutube } from '../../assets/shared/desktop/icon-youtube.svg'
import { ReactComponent as IconTwitter } from '../../assets/shared/desktop/icon-twitter.svg'
import { ReactComponent as IconPinterest } from '../../assets/shared/desktop/icon-pinterest.svg'
import { ReactComponent as IconInstagram } from '../../assets/shared/desktop/icon-instagram.svg'
import { StyledButton } from '../Button/Button'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Footer() {
	const location = useLocation()

	return (
		<StyledFooter
			style={location.pathname !== '/contact' ? { paddingTop: '285px' } : { paddingTop: '75px', marginTop: '0' }}>
			{location.pathname !== '/contact' ? (
				<div className='contact-div'>
					<h2>Let's talk about your project</h2>
					<p>
						Ready to take it to the next level? Contact us today and find out how our expertise can help your business
						grow.
					</p>
					<Link to={'/contact'}>
						<StyledButton>GET IN TOUCH</StyledButton>
					</Link>
				</div>
			) : null}
			<div className='top-div'>
				<img src='./assets/shared/desktop/logo-light.png' alt='design logo' />
				<div className='menu'>
					<Link to={'/aboutus'}>
						<p>OUR COMPANY</p>
					</Link>
					<Link to={'/locations'}>
						<p>LOCATIONS</p>
					</Link>
					<Link to={'/contact'}>
						<p>CONTACT</p>
					</Link>
				</div>
			</div>
			<div className='bottom-div'>
				<div className='information-details'>
					<div className='information-addres'>
						<h4>Designo Central Office</h4>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div className='information-contact'>
						<h4>Contact Us &#40;Central Office&#41;</h4>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
				</div>
				<div>
					<IconFacebook />
					<IconYoutube />
					<IconTwitter />
					<IconPinterest />
					<IconInstagram />
				</div>
			</div>
		</StyledFooter>
	)
}

export default Footer
