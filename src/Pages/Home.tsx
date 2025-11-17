import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import parallaxImg from '../assets/parallax.jpg'
import { motion } from 'framer-motion'

const Home = () => {
	return (
		<div>
			<Hero />

			{/* Services Section */}
			<section className='py-20 md:py-28 px-6 max-w-7xl mx-auto'>
				<h2 className='text-4xl sm:text-5xl font-extrabold text-center pb-16'>Our Premium Services</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
					<motion.div
						whileHover={{ scale: 1.05 }}
						className='bg-white shadow-2xl rounded-3xl p-8 text-center border-t-4 border-orange-500'
					>
						<h3 className='text-2xl sm:text-3xl font-semibold mb-4'>Event Photography</h3>
						<p className='text-gray-700 text-base sm:text-lg'>
							Capture every emotion and moment with cinematic precision, from weddings to corporate events.
						</p>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						className='bg-white shadow-2xl rounded-3xl p-8 text-center border-t-4 border-orange-500'
					>
						<h3 className='text-2xl sm:text-3xl font-semibold mb-4'>Videography</h3>
						<p className='text-gray-700 text-base sm:text-lg'>
							Cinematic storytelling, highlight reels, brand films, and fully edited professional videos.
						</p>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						className='bg-white shadow-2xl rounded-3xl p-8 text-center border-t-4 border-orange-500'
					>
						<h3 className='text-2xl sm:text-3xl font-semibold mb-4'>Production Shoots</h3>
						<p className='text-gray-700 text-base sm:text-lg'>
							Commercials, music videos, product promotions — high-end production with modern flair.
						</p>
					</motion.div>
				</div>
			</section>

			{/* PARALLAX */}
			<section
				className='h-[50vh] flex items-center justify-center bg-fixed bg-center bg-cover'
				style={{
					backgroundImage: `url(${parallaxImg})`,
				}}
			></section>

			{/* Testimonials Section */}
			<section className='py-20 md:py-28 px-6 bg-white'>
				<h2 className='text-4xl sm:text-5xl font-extrabold text-center pb-16'>What Our Clients Say</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto'>
					<motion.div
						whileHover={{ scale: 1.02 }}
						className='bg-gray-100 p-6 rounded-3xl shadow-xl text-center'
					>
						<p className='text-gray-700 mb-4'>“Red Velvet turned our wedding into a cinematic story. Absolutely stunning work!”</p>
						<h4 className='font-semibold'>- Priya Sharma</h4>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.02 }}
						className='bg-gray-100 p-6 rounded-3xl shadow-xl text-center'
					>
						<p className='text-gray-700 mb-4'>“Professional, creative, and detail-oriented. Highly recommended for event coverage.”</p>
						<h4 className='font-semibold'>- Rajesh Thapa</h4>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.02 }}
						className='bg-gray-100 p-6 rounded-3xl shadow-xl text-center'
					>
						<p className='text-gray-700 mb-4'>“The production shoots were flawless. Their team delivers cinematic quality every time.”</p>
						<h4 className='font-semibold'>- Sita Koirala</h4>
					</motion.div>
				</div>
			</section>

			{/* ================= EXTRA REUSABLE SECTION ================= */}
			<section className='py-20 px-6 text-center bg-orange-500 text-white'>
				<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>Ready to Capture Your Moments?</h2>
				<p className='max-w-2xl mx-auto mb-8 text-lg sm:text-xl'>
					Book a session today and bring your story to life with Red Velvet Studios.
				</p>
				<a
					href='/contact'
					className='px-10 py-4 bg-white text-orange-500 font-semibold rounded-2xl shadow-2xl hover:shadow-red-500/50 transition transform hover:-translate-y-1 inline-block'
				>
					Book Now
				</a>
			</section>

			<Footer />
		</div>
	)
}

export default Home
