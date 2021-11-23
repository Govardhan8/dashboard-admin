import Tabs from './Tabs/Tabs'
import Graph from './Graph/Graph'
import Projects from './Project/Projects'
import Colors from './Color/Colors'

import Illustrations from './Details/Illustrations'
import DevApproach from './Details/DevApproach'

const Dashboard = ({ style }) => {
	return (
		<>
			<div style={style}>
				<div className='dashboard'>
					<Tabs />
					<Graph />
					<div className='grids'>
						<div className='colorGrid'>
							<Projects />
							<Colors />
						</div>
						<div className='textGrid'>
							<Illustrations />
							<DevApproach />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Dashboard
