import Footer from '../Components/Footer'

const videos = [
	{ id: 1, embedId: 'R4Jp7BK0QCI' },
	{ id: 2, embedId: 'cSDJOsdP7yc' },
]

const Entertainment = () => {
	return (
		<>
			<div className='py-12 bg-white'>
				<div className='container mx-auto px-4'>
					{/* ================= CHANNEL HEADER SECTION ================= */}
					<div className='flex items-center justify-between mb-10'>
						<h2 className='text-3xl font-semibold text-gray-800'>Velvet Vibes Entertainment</h2>
						<a
							href='https://www.youtube.com/@VelvetVibesEnt/videos'
							target='_blank'
							className='px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold'
						>
							Visit YouTube Channel
						</a>
					</div>

					{/* ================= VIDEO SECTIONS ================= */}
					<div className='grid md:grid-cols-2 gap-8'>
						{videos.map((video) => (
							<div
								key={video.id}
								className='shadow rounded overflow-hidden'
							>
								<div className='relative pb-[56.25%]'>
									<iframe
										src={`https://www.youtube.com/embed/${video.embedId}`}
										className='absolute top-0 left-0 w-full h-full'
										frameBorder='0'
										allowFullScreen
									></iframe>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Entertainment
