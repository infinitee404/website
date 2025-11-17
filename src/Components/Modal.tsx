import React, { useEffect } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	// Close when pressing ESC
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [onClose])

	if (!isOpen) return null

	return (
		<div
			className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'
			onClick={onClose}
		>
			<div
				className='bg-white rounded-xl shadow-lg w-11/12 max-w-lg p-6 animate-fadeIn'
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>

			<style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.25s ease-out;
                }
            `}</style>
		</div>
	)
}

export default Modal
