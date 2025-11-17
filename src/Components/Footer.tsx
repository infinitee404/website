const Footer = () => {
	return (
		<footer className='w-full bg-black text-white py-10 px-6'>
			<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
				<div>
					<h2 className='text-2xl font-bold'>Velvet Vibes</h2>
					<p className='text-gray-400 mt-2'>Creating unforgettable memories.</p>
				</div>

				<div>
					<h3 className='text-xl font-semibold mb-3 pb-2'>Quick Links</h3>
					<ul className='space-y-2 text-gray-300'>
						<li>
							<a
								href='/portfolio'
								className='hover:text-orange-400'
							>
								Portfolio
							</a>
						</li>
						<li>
							<a
								href='/services'
								className='hover:text-orange-400'
							>
								Services
							</a>
						</li>
						<li>
							<a
								href='/about'
								className='hover:text-orange-400'
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href='/contact'
								className='hover:text-orange-400'
							>
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-xl font-semibold mb-3 pb-2'>Contact</h3>
					<ul className='space-y-2 text-gray-300'>
						<li>Email: info@velvetvibes.com</li>
						<li>Phone: +977-98XXXXXXXX</li>
						<li>Location: Butwal, Nepal</li>
					</ul>
				</div>
			</div>

			<div className='border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm'>© 2023 Velvet Vibes. All Rights Reserved.</div>
		</footer>
	)
}

export default Footer
