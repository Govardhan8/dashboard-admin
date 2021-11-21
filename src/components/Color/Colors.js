import ColorBox from './colorBox'
import './colors.css'

const Colors = () => {
	return (
		<div className='colors'>
			<ColorBox name='Primary' value='#4e73df' />
			<ColorBox name='Success' value='#1cc88a' />
			<ColorBox name='Info' value='#36b9cc' />
			<ColorBox name='Warning' value='#f6c23e' />
			<ColorBox name='Danger' value='#e74a3b' />
			<ColorBox name='Secondary' value='#858796' />
			<ColorBox name='Light' value='#f8f9fc' />
			<ColorBox name='Dark' value='#5a5c69' />
		</div>
	)
}

export default Colors
