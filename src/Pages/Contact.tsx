import Footer from '../Components/Footer'

const Contact = () => {
	return (
		<>
			<div className='font-sans text-gray-900 bg-white px-4 md:px-6 py-20 max-w-4xl mx-auto'>
				{/* Hero */}
				<section className='text-center mb-16'>
					<h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4'>Get in Touch</h1>
					<p className='text-gray-700 text-base sm:text-lg md:text-xl'>
						Book a session or send us a message. We’ll get back to you promptly!
					</p>
				</section>

				{/* Contact Form */}
				<form className='bg-gray-50 shadow-2xl rounded-3xl p-8 space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<input
							type='text'
							placeholder='Your Name'
							className='p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 w-full'
						/>
						<input
							type='email'
							placeholder='Your Email'
							className='p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 w-full'
						/>
					</div>
					<input
						type='text'
						placeholder='Subject'
						className='p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 w-full'
					/>
					<textarea
						placeholder='Message'
						rows={6}
						className='p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 w-full'
					></textarea>
					<button
						type='submit'
						className='px-8 py-4 bg-red-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-red-500/50 transition transform hover:-translate-y-1 inline-block'
					>
						Send Message
					</button>
				</form>

				{/* Optional Contact Info */}
				<section className='mt-20 text-center'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-6'>Contact Info</h2>
					<p className='text-gray-700 mb-2'>📍 Location: Kathmandu, Nepal</p>
					<p className='text-gray-700 mb-2'>📞 Phone: +977 98XXXXXXXX</p>
					<p className='text-gray-700 mb-2'>✉️ Email: info@redvelvetstudios.com</p>
				</section>
			</div>
			<Footer />
		</>
	)
}

export default Contact
