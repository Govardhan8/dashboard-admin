const Tab = ({ highlight, heading, value, icon, children }) => {
	return (
		<div className='tab flex'>
			<div className='highlight' style={{ background: highlight }} />
			<div className='head'>
				<p style={{ color: highlight }}>{heading}</p>
				<div className='values flex'>
					<h4>{value}</h4>
				</div>
			</div>
			{children}
			{icon}
		</div>
	)
}

export default Tab
