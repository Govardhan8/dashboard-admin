import PercentageBar from '../PercentageBar'
import './projects.css'

const Projects = () => {
	return (
		<div className='projects'>
			<h2>Projects</h2>
			<div className='container'>
				<div className='col'>
					<p>
						Server Migration<span>20%</span>
					</p>
					<PercentageBar percent='20%' col='#e74a3b' />
				</div>
				<div className='col'>
					<p>
						Sales Tracking<span>40%</span>
					</p>
					<PercentageBar percent='40%' col='#f6c23e' />
				</div>
				<div className='col'>
					<p>
						Customer Database<span>60%</span>
					</p>
					<PercentageBar percent='60%' col='#4e73df' />
				</div>
				<div className='col'>
					<p>
						Payout Details<span>80%</span>
					</p>
					<PercentageBar percent='80%' col='#36b9cc' />
				</div>
				<div className='col'>
					<p>
						Account Setup<span>Complete!</span>
					</p>
					<PercentageBar percent='100%' col='#1cc88a' />
				</div>
			</div>
		</div>
	)
}

export default Projects
