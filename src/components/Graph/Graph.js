import { Line, Doughnut } from 'react-chartjs-2'
import { Linedata, Piedata } from './data'
import './graph.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Graph = () => {
	return (
		<div className='graphContainer'>
			<div className='graph graph1'>
				<p>
					<span>Earnings Overview</span>{' '}
					<MoreVertIcon className='verticon' sx={{ color: 'lightgray' }} />
				</p>
				<div className='line'>
					<Line
						data={Linedata}
						options={{
							plugins: {
								legend: {
									display: false,
								},
							},
							scales: {
								y: {
									ticks: {
										// Include a dollar sign in the ticks
										callback: function (value, index, values) {
											return '$ ' + value
										},
									},
								},
							},
						}}
					/>
				</div>
			</div>
			<div className='graph graph2'>
				<p>
					<span>Revenue Sources</span>{' '}
					<MoreVertIcon className='verticon' sx={{ color: 'lightgray' }} />
				</p>
				<div className='pie'>
					<Doughnut
						data={Piedata}
						options={{
							plugins: {
								legend: {
									display: true,
									position: 'bottom',
									labels: {
										boxWidth: 12,
										boxHeight: 12,
										font: {
											weight: '600',
										},
									},
								},
							},
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default Graph
