import React from 'react'

interface ImageGridProps {
	images: string[]
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{images.map((src, index) => (
				<div
					key={index}
					className='w-full aspect-square bg-gray-800 border border-gray-700 rounded-lg overflow-hidden'
				>
					<img
						src={src}
						alt={`Gallery ${index}`}
						className='w-full h-full object-cover transition-opacity duration-300'
						onError={(e) => {
							;(e.target as HTMLImageElement).style.opacity = '0.3'
						}}
					/>
				</div>
			))}
		</div>
	)
}

export default ImageGrid
