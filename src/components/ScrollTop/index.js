import { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './index.css'

const Index = () => {
	const [visible, setVisible] = useState(false)

	function toggleVisibility() {
		if (window.pageYOffset > 300) {
			setVisible(true)
		} else {
			setVisible(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<>
			{visible && (
				<button
					className='scroll'
					onClick={() => {
						scrollToTop()
					}}
				>
					<KeyboardArrowDownIcon fontSize='large' />
				</button>
			)}
		</>
	)
}
export default Index
