// For every color pallete
const ColorBox = ({ name, value }) => {
	return (
		<div className='colorBox' style={{ backgroundColor: value }}>
			<h4 style={{ color: name === 'Light' ? 'darkgray' : 'white' }}>{name}</h4>
			<p style={{ color: 'lightgray' }}>{value}</p>
		</div>
	)
}

export default ColorBox
