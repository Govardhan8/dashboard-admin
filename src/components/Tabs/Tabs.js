import Tab from './Tab'
import './tabs.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ForumIcon from '@mui/icons-material/Forum'
import PercentageBar from '../PercentageBar'
import DownloadIcon from '@mui/icons-material/Download'

const Tabs = () => {
	return (
		<div className='mainContent'>
			<h3 className='dash'>
				Dashboard
				<span>
					<DownloadIcon sx={{ fontSize: '1.25rem', color: 'darkgray' }} />
					Generate Report
				</span>
			</h3>
			<div className='tabs'>
				<Tab
					highlight='#4e73df'
					heading='EARNINGS (MONTHLY)'
					value='$40,000'
					icon={<CalendarTodayIcon fontSize='large' className='tabIcon' />}
				></Tab>
				<Tab
					highlight='#1cc88a'
					heading='EARNINGS (ANNUAL)'
					value='%215,000'
					icon={<AttachMoneyIcon fontSize='large' className='tabIcon' />}
				></Tab>
				<Tab
					highlight='#36b9cc'
					heading='TASKS'
					value='50%'
					icon={<AssignmentIcon fontSize='large' className='tabIcon' />}
				>
					<PercentageBar percent='50%' col='#36b9cc' />
				</Tab>
				<Tab
					highlight='#f6c23e'
					heading='PENDING REQUESTS'
					value='18'
					icon={<ForumIcon fontSize='large' className='tabIcon' />}
				></Tab>
			</div>
		</div>
	)
}

export default Tabs
