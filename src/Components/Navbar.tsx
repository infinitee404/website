import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
	return (
		<nav className='fixed w-full bg-white/80 backdrop-blur-[5px] shadow-md z-100'>
			<div className='container mx-auto flex items-center justify-between py-2 '>
				<div className='text-xl font-bold text-orange-600'>
					<img
						src={logo}
						alt='Logo'
						className='w-16 h-16 object-contain'
					/>
				</div>
				<div className='space-x-6 text-gray-800'>
					<Link
						to='/website'
						className='hover:text-orange-500'
					>
						Home
					</Link>
					<Link
						to='/events'
						className='hover:text-orange-500'
					>
						Events
					</Link>
					<Link
						to='/entertainment'
						className='hover:text-orange-500'
					>
						Entertainment
					</Link>
					<Link
						to='/contact'
						className='hover:text-orange-500'
					>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
