import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Entertainment from './Pages/Entertainment'
import Contact from './Pages/Contact'

function App() {
	return (
		<Router>
			<Navbar />
			<div className='pt-18'>
				{/* Add top padding to avoid content hiding behind fixed navbar */}
				<Routes>
					<Route
						path='/website'
						element={<Home />}
					/>
					<Route
						path='/events'
						element={<Events />}
					/>
					<Route
						path='/entertainment'
						element={<Entertainment />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
