import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import WebDesign from './pages/WebDesign'
import GraphicDesign from './pages/GraphicDesign'
import AppDesign from './pages/AppDesign'
import Locations from './pages/Locations'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import { AnimatePresence } from 'framer-motion'

function App() {
	const location = useLocation()
	return (
		<div className='App'>
			<ScrollToTop>
				<Navbar />
				<AnimatePresence mode='wait'>
					<Routes key={location.pathname} location={location}>
						<Route path='/' element={<Home />} />
						<Route path='/webdesign' element={<WebDesign />} />
						<Route path='/appdesign' element={<AppDesign />} />
						<Route path='/graphicdesign' element={<GraphicDesign />} />
						<Route path='/locations' element={<Locations />} />
						<Route path='/aboutus' element={<AboutUs />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</AnimatePresence>
				<Footer />
			</ScrollToTop>
		</div>
	)
}

export default App
