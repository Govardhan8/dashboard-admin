import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import EmailIcon from '@mui/icons-material/Email'
import Badge from '@mui/material/Badge'
import { IconButton } from '@mui/material'
import './navbar.css'
import { useEffect, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Logo from '../../img/undraw_profile.svg'
import Pic1 from '../../img/undraw_profile_1.svg'
import Pic2 from '../../img/undraw_profile_2.svg'
import Pic3 from '../../img/undraw_profile_3.svg'
import Pic4 from '../../img/undraw_rocket.svg'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import SettingsInputSvideoRoundedIcon from '@mui/icons-material/SettingsInputSvideoRounded'
import FormatLineSpacingRoundedIcon from '@mui/icons-material/FormatLineSpacingRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

const Navbar = ({ open, setOpen, openMenu }) => {
	const [search, setSearch] = useState(false)
	const [popup, setPopup] = useState(false)
	const [popup2, setPopup2] = useState(false)
	const [profile, setProfile] = useState(false)

	const [screenSize, getDimension] = useState({
		dynamicWidth: window.innerWidth,
		dynamicHeight: window.innerHeight,
	})

	const setDimension = () => {
		getDimension({
			dynamicWidth: window.innerWidth,
			dynamicHeight: window.innerHeight,
		})
	}

	useEffect(() => {
		window.addEventListener('resize', setDimension)
		if (screenSize.dynamicWidth >= 576) {
			setSearch(false)
		}

		if (screenSize.dynamicWidth >= 768) {
			setOpen(true)
		} else {
			setOpen(false)
		}

		return () => {
			window.removeEventListener('resize', setDimension)
		}
		// eslint-disable-next-line
	}, [screenSize])

	return (
		<nav
			className='navbar flex'
			style={{ marginLeft: open ? (openMenu ? '14rem' : '7rem') : '0' }}
		>
			<IconButton
				className='menu'
				onClick={() => {
					setOpen(!open)
				}}
				sx={{
					// eslint-disable-next-line
					['@media (min-width:768px)']: {
						display: 'none',
					},
				}}
			>
				<MenuIcon
					sx={{
						color: 'blue',
					}}
				/>
			</IconButton>
			<div className='search'>
				<NewFunction />
			</div>
			<div className=' flex container'>
				<OutsideClickHandler
					onOutsideClick={() => {
						setSearch(false)
					}}
				>
					<SearchIcon
						onClick={() => {
							setSearch(!search)
						}}
						sx={{
							color: 'lightgrey',
							fontSize: '1.5rem',
							width: '1.25rem',
							marginTop: '0.5rem',
							marginRight: '0.5rem',
							// eslint-disable-next-line
							['@media (min-width:576px)']: {
								display: 'none',
							},
						}}
					/>

					{search && (
						<div
							style={{
								// eslint-disable-next-line
								['@media (max-width:576px)']: {
									display: 'none',
								},
							}}
						>
							<NewFunction />
						</div>
					)}
					<div style={{}}></div>
				</OutsideClickHandler>
				<OutsideClickHandler
					onOutsideClick={() => {
						setPopup(false)
					}}
				>
					<div className='button'>
						<Badge color='error' badgeContent={'3+'} className='badge'>
							<NotificationsIcon
								sx={{
									color: 'lightgrey',
									fontSize: { xs: '1.25rem', sm: '1.5rem' },
								}}
								className='icon'
								onClick={() => {
									setPopup(!popup)
								}}
							/>
						</Badge>
						{popup && (
							<div className='popup'>
								<h3>ALERTS CENTER</h3>
								<div className='row'>
									<ContactPageIcon sx={{ backgroundColor: '#4e73df' }} />
									<div className='popupDetails'>
										<span>December 12,2019</span>
										<p>
											<b>A new monthly report is ready to download!</b>
										</p>
									</div>
								</div>
								<div className='row'>
									<MonetizationOnRoundedIcon
										sx={{ backgroundColor: '#1cc88a' }}
									/>
									<div className='popupDetails'>
										<span>December 7,2019</span>
										<p>$290.29 has been deposited into your account!</p>
									</div>
								</div>
								<div className='row'>
									<WarningRoundedIcon sx={{ backgroundColor: '#f6c23e' }} />
									<div className='popupDetails'>
										<span>December 2,2019</span>
										<p>
											Spending Alert: We've noticed unusually high spending for
											your account.
										</p>
									</div>
								</div>
								<div className='row'>
									<span>Show All Alerts</span>
								</div>
							</div>
						)}
					</div>
				</OutsideClickHandler>
				<OutsideClickHandler
					onOutsideClick={() => {
						setPopup2(false)
					}}
				>
					<div
						className='button'
						onClick={() => {
							setPopup2(!popup2)
						}}
						style={{ marginLeft: '1rem' }}
					>
						<Badge color='error' badgeContent={7} className='badge'>
							<EmailIcon
								sx={{
									color: 'lightgrey',
									fontSize: { xs: '1.25rem', sm: '1.5rem' },
								}}
								className='icon'
							/>
						</Badge>
						{popup2 && (
							<div className='popup'>
								<h3>MESSAGE CENTER</h3>
								<div className='row'>
									<img src={Pic1} alt='user 1' className='image' />
									<div className='popupDetails'>
										<p>
											<b>Hi there! I am wondering if you ...</b>
										</p>
										<span>Emily Fowler - 58m</span>
									</div>
								</div>
								<div className='row'>
									<img src={Pic2} alt='user 2' className='image' />
									<div className='popupDetails'>
										<p>I have the photos that you ordere...</p>
										<span>Jae Chun - 1d</span>
									</div>
								</div>
								<div className='row'>
									<img src={Pic3} alt='user 3' className='image' />{' '}
									<div className='popupDetails'>
										<p>Last month's report looks great, I...</p>
										<span>Morgan Alvarez - 2d</span>
									</div>
								</div>
								<div className='row'>
									<img src={Pic4} alt='user 4' className='image' />{' '}
									<div className='popupDetails'>
										<p>Am i a good boy? The reason i as...</p>
										<span>Chicken the Dog - 2w</span>
									</div>
								</div>
								<div className='row'>
									<span>Show All Alerts</span>
								</div>
							</div>
						)}
					</div>
				</OutsideClickHandler>
				<OutsideClickHandler
					onOutsideClick={() => {
						setProfile(false)
					}}
				>
					<div
						className='imageContainer'
						onClick={() => {
							setProfile(!profile)
						}}
					>
						<img className='image' src={Logo} alt='logo' />
					</div>
					{profile && (
						<div className='profilePopup'>
							<p>
								<PersonRoundedIcon />
								<span>Profile</span>
							</p>
							<p>
								<SettingsInputSvideoRoundedIcon />
								<span>Settings</span>
							</p>
							<p>
								<FormatLineSpacingRoundedIcon />
								<span>Activity Log</span>
							</p>
							<p>
								<LogoutRoundedIcon />
								<span>Logout</span>
							</p>
						</div>
					)}
				</OutsideClickHandler>
			</div>
		</nav>
	)
}

export default Navbar
function NewFunction({ style }) {
	return (
		<div className='searchBox flex' style={style}>
			<input type='text' placeholder='Search for...' />
			<SearchIcon
				sx={{
					background: 'blue',
					color: 'white',
					fontSize: '2.25rem',
					padding: '0.5rem',
					border: 'none',
					borderRadius: '0 0.5rem 0.5rem 0',
				}}
			/>
		</div>
	)
}
