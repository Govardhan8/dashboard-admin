import { Line, Doughnut } from 'react-chartjs-2'
import { Linedata, Piedata } from './data'
import './graph.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

const Graph = () => {
	const [pop1, setPop1] = useState(false)
	const [pop2, setPop2] = useState(false)

	return (
		<div className='graphContainer'>
			<div className='graph graph1'>
				<p>
					<span>Earnings Overview</span>{' '}
					<OutsideClickHandler
						onOutsideClick={() => {
							setPop1(false)
						}}
					>
						<MoreVertIcon
							className='verticon'
							sx={{ color: 'lightgray' }}
							onClick={() => {
								setPop1(!pop1)
							}}
						/>
						{pop1 && (
							<div className='graphPopup'>
								<span>DROPDOWN HEADER</span>
								<p>Action</p>
								<p>Another action</p>
								<p>Something else here</p>
							</div>
						)}
					</OutsideClickHandler>
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
					<OutsideClickHandler
						onOutsideClick={() => {
							setPop2(false)
						}}
					>
						<MoreVertIcon
							className='verticon'
							sx={{ color: 'lightgray' }}
							onClick={() => {
								setPop2(!pop2)
							}}
						/>
						{pop2 && (
							<div className='graphPopup'>
								<span>DROPDOWN HEADER</span>
								<p>Action</p>
								<p>Another action</p>
								<p>Something else here</p>
							</div>
						)}
					</OutsideClickHandler>
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
