import Logo from '../../img/undraw_posting_photo.svg'
import './details.css'

const Illustrations = () => {
	return (
		<div className='detail flex'>
			<p className='heading'>Illustrations</p>
			<img className='image' src={Logo} alt='logo' />

			<p className='para'>
				Add some quality, svg illustrations to your project courtesy of{' '}
				<a href='https://undraw.co/'>unDraw</a>, a constantly updated collection
				of beautiful svg images that you can use completely free and without
				attribution!
			</p>
			<p className='para'>
				<a href='https://undraw.co/'>Browse Illustrations on unDraw →</a>
			</p>
		</div>
	)
}

export default Illustrations
