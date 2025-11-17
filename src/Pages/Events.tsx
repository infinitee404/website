import { useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '../Components/Footer'

import event1 from '../assets/event1.jpg'
import event2 from '../assets/event2.jpg'
import event3 from '../assets/event3.jpg'
import event4 from '../assets/event4.jpg'
import event5 from '../assets/event5.jpg'
import event6 from '../assets/event6.jpg'

type EventType = {
	id: number
	title: string
	image: string
	description: string
}

const eventsData: EventType[] = [
	{
		id: 1,
		title: 'Summer Music Fest 2024',
		image: event1,
		description:
			'Experience an unforgettable evening filled with live performances, vibrant lights, and incredible energy. This music festival brings together top artists, diverse genres, and an atmosphere that celebrates creativity, culture, and community.',
	},
	{
		id: 2,
		title: 'Winter Gala Concert',
		image: event2,
		description:
			'A breathtaking winter gala featuring world-class musicians and stunning stage design. Enjoy an elegant night of classical arrangements, modern compositions, and an ambiance that defines sophistication and charm.',
	},
	{
		id: 3,
		title: 'City Lights Festival',
		image: event3,
		description:
			'An immersive celebration of lights, art, and technology. Explore captivating installations, light sculptures, and synchronized displays that transform the city into a glowing landscape of wonder.',
	},
	{
		id: 4,
		title: 'Art & Culture Showcase',
		image: event4,
		description:
			'Discover a fusion of heritage and modern artistic expressions. This showcase highlights local artistry, cultural performances, handcrafted exhibits, and thought-provoking installations.',
	},
	{
		id: 5,
		title: 'Gourmet Food & Wine Expo',
		image: event5,
		description:
			'A paradise for food lovers, offering a curated selection of gourmet cuisine, handcrafted beverages, premium wines, and live culinary demonstrations from top chefs.',
	},
	{
		id: 6,
		title: 'Global Tech Summit 2024',
		image: event6,
		description:
			'Join innovators, leaders, and tech enthusiasts for a deep dive into the future of technology. This summit features interactive showcases, keynote sessions, and breakthrough ideas shaping tomorrow.',
	},
]

const Events = () => {
	const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null)

	const closeModal = () => setSelectedEvent(null)

	return (
		<>
			<div className=' bg-gray-50 relative'>
				{/* ===== MODAL ===== */}
				{selectedEvent && (
					<div
						onClick={closeModal}
						className='fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50'
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className='bg-white w-11/12 md:w-5/6 max-w-5xl rounded-xl shadow-xl overflow-hidden'
						>
							<div className='w-full h-96 bg-black flex justify-center items-center overflow-hidden'>
								<img
									src={selectedEvent.image}
									alt={selectedEvent.title}
									className='w-full h-full object-contain'
								/>
							</div>

							<div className='p-6 min-h-40'>
								<h2 className='text-3xl font-bold mb-4'>{selectedEvent.title}</h2>
								<p className='text-gray-600 text-base leading-relaxed'>{selectedEvent.description}</p>
							</div>
						</div>
					</div>
				)}

				{/* ==== FEATURED EVENTS ====== */}
				<section className='py-16 px-4 bg-orange-500 text-white'>
					<h2 className='text-3xl sm:text-4xl font-extrabold text-center pb-16'>Featured Events</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
						{[eventsData[0], eventsData[1], eventsData[2]].map((event) => (
							<div
								key={event.id}
								onClick={() => setSelectedEvent(event)}
								className='cursor-pointer'
							>
								<div className='group relative h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl'>
									<img
										src={event.image}
										alt={event.title}
										className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-25 transition pointer-events-none'></div>
								</div>
								<h3 className='font-bold text-xl mt-4 mb-2 text-center'>{event.title}</h3>
							</div>
						))}
					</div>
				</section>

				{/* ===== OUR EVENTS GRID ===== */}
				<div className='container mx-auto px-4 py-12'>
					<h2 className='text-4xl font-extrabold text-center pb-10'>Our Events</h2>

					<div className='grid md:grid-cols-2 gap-8'>
						{eventsData.map((event) => (
							<div
								key={event.id}
								onClick={() => setSelectedEvent(event)}
								className='cursor-pointer'
							>
								<motion.div className='group relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-2xl'>
									<img
										src={event.image}
										alt={event.title}
										className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-25 transition pointer-events-none' />
								</motion.div>
								<h3 className='font-bold text-2xl mt-4 pb-6 text-center'>{event.title}</h3>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Events
