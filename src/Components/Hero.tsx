import { motion } from 'framer-motion'

const Hero = () => {
	return (
		<section className='relative w-full flex items-center justify-center bg-linear-to-br  from-orange-500 to-orange-300 overflow-hidden h-[90vh] md:h-screen'>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='text-center text-white z-10 px-4 md:px-6'
			>
				<h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-lg'>Velvet Vibes Entertainment</h1>
				<p className='text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl mx-auto drop-shadow'>
					Premium Event Photography & Cinematic Videography for Unforgettable Moments
				</p>
				<a
					href='/portfolio'
					className='px-8 sm:px-10 py-4 bg-white text-orange-500 font-semibold rounded-2xl shadow-2xl hover:shadow-red-500/50 transition transform hover:-translate-y-1 inline-block'
				>
					Explore Portfolio
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 1.1 }}
				animate={{ scale: 1 }}
				transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
				className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"
			/>
		</section>
	)
}

export default Hero
