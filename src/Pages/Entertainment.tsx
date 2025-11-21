import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

const API_KEY = 'AIzaSyDZG4nTBd1fy6dQceRbvmM12VVn57HzWl8'
const CHANNEL_ID = 'UCBAFLhpwsEgarsVcuFjW7kg'

type VideoType = {
	id: string
	title: string
	thumbnail: string
}

const Entertainment = () => {
	const [latestVideos, setLatestVideos] = useState<VideoType[]>([])
	const [popularVideos, setPopularVideos] = useState<VideoType[]>([])

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				// Fetch latest 2 videos
				const latestRes = await fetch(
					`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=2&type=video`
				)
				const latestData = await latestRes.json()
				setLatestVideos(
					latestData.items.map((item: any) => ({
						id: item.id.videoId,
						title: item.snippet.title,
						thumbnail: item.snippet.thumbnails.high.url,
					}))
				)

				// Fetch 2 most popular videos
				const popularRes = await fetch(
					`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=viewCount&maxResults=2&type=video`
				)
				const popularData = await popularRes.json()
				setPopularVideos(
					popularData.items.map((item: any) => ({
						id: item.id.videoId,
						title: item.snippet.title,
						thumbnail: item.snippet.thumbnails.high.url,
					}))
				)
			} catch (err) {
				console.error(err)
			}
		}

		fetchVideos()
	}, [])

	return (
		<>
			<div className='py-16 bg-orange-300'>
				<div className='container mx-auto px-4'>
					{/* ===== CHANNEL HEADER ===== */}
					<div className='flex items-center justify-between mb-14'>
						<h2 className='text-4xl font-extrabold text-gray-900'>Velvet Vibes Entertainment</h2>
						<a
							href='https://www.youtube.com/@VelvetVibesEnt/videos'
							target='_blank'
							className='px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg'
						>
							Visit YouTube Channel
						</a>
					</div>

					{/* ===== LATEST VIDEOS ===== */}
					<div>
						<h3 className='text-2xl font-bold mb-6 text-gray-900'>Latest Releases</h3>
						<div className='grid md:grid-cols-2 gap-8'>
							{latestVideos.map((video) => (
								<div
									key={video.id}
									className='rounded-2xl overflow-hidden shadow-xl bg-white'
								>
									<div className='relative pb-[56.25%]'>
										<iframe
											src={`https://www.youtube.com/embed/${video.id}`}
											className='absolute top-0 left-0 w-full h-full'
											frameBorder='0'
											allowFullScreen
										/>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* ===== POPULAR VIDEOS ===== */}
					<div className='mt-12'>
						<h3 className='text-2xl font-bold mb-6 text-gray-900'>Popular Videos</h3>
						<div className='grid md:grid-cols-2 gap-8'>
							{popularVideos.map((video) => (
								<div
									key={video.id}
									className='rounded-2xl overflow-hidden shadow-xl bg-white'
								>
									<div className='relative pb-[56.25%]'>
										<iframe
											src={`https://www.youtube.com/embed/${video.id}`}
											className='absolute top-0 left-0 w-full h-full'
											frameBorder='0'
											allowFullScreen
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Entertainment
