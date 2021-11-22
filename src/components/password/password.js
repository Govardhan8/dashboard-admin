import { Link } from 'react-router-dom'

const password = () => {
	return (
		<div className='resetformContainer'>
			<img
				src='https://source.unsplash.com/oWTW-jNGl9I/600x800'
				alt='doggie'
				className='passImage'
			/>
			<div className='rstform'>
				<h3>Forgot Your password?</h3>
				<p>
					We get it, stuff happens. Just enter your email address below and
					we'll send you a link to reset your password!
				</p>
				<input type='text' placeholder='Enter Email Address...' />
				<button className='btn rst-btn'>Reset Password</button>
				<div className='links'>
					<Link to='/create'>Create an Account</Link>
					<Link to='/login'>Already have an account? Login!</Link>
				</div>
			</div>
		</div>
	)
}

export default password
