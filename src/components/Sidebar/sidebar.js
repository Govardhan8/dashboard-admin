import './sidebar.css'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import SpeedIcon from '@mui/icons-material/Speed'
import SettingsIcon from '@mui/icons-material/Settings'
import BuildIcon from '@mui/icons-material/Build'
import FolderIcon from '@mui/icons-material/Folder'
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined'
import TableViewIcon from '@mui/icons-material/TableView'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useEffect, useState } from 'react'

const Sidebar = ({ openMenu, setOpenMenu }) => {
	const styles = {
		display: 'flex',
		flexDirection: openMenu ? 'row' : 'column',
		width: openMenu ? '14rem' : '7rem',
		gap: openMenu ? '1rem' : '0.25rem',
		alignItems: 'center',
	}

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

		if (screenSize.dynamicWidth < 768) {
			setOpenMenu(false)
		}
		return () => {
			window.removeEventListener('resize', setDimension)
		}
	}, [screenSize, openMenu, setOpenMenu])

	return (
		<div
			className='sidebarContainer'
			style={{
				width: openMenu ? '14rem' : '7rem',
				justifyContent: 'center',
				transtion: 'all 0.25s ease-in-out',
			}}
		>
			<ul style={{ width: openMenu ? '14rem' : '7rem' }}>
				<li
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '1rem',
						width: openMenu ? '14rem' : '7rem',
					}}
				>
					<EmojiEmotionsIcon sx={{ color: 'white', fontSize: '2.25rem' }} />
					<h2
						style={{
							display: openMenu ? 'block' : 'none',
						}}
					>
						SB ADMIN <sup>2</sup>{' '}
					</h2>
				</li>
				<li className='group' style={styles}>
					<SpeedIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
					<span style={{ textAlign: openMenu ? 'start' : 'center' }}>
						Dashboard
					</span>
				</li>
				<li
					className='group hovered'
					style={
						(styles,
						{ flexDirection: 'column', width: openMenu ? '14rem' : '7rem' })
					}
				>
					<p>INTERFACE</p>

					<div
						style={{
							display: 'flex',
							flexDirection: openMenu ? 'row' : 'column',
							alignItems: 'center',
							gap: openMenu ? '1rem' : '0.25rem',
							width: '100%',
						}}
					>
						<SettingsIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
						<span style={{ textAlign: openMenu ? 'start' : 'center' }}>
							Components
						</span>
						<KeyboardArrowDownIcon
							sx={{
								display: openMenu ? 'block' : 'none',
								transform: 'rotate(-90deg)',
							}}
						/>
					</div>
				</li>
				<li className='hovered' style={styles}>
					<BuildIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
					<span style={{ textAlign: openMenu ? 'start' : 'center' }}>
						Utilities
					</span>
					<KeyboardArrowDownIcon
						sx={{
							display: openMenu ? 'block' : 'none',
							transform: 'rotate(-90deg)',
						}}
					/>
				</li>
				<li
					className='group hovered'
					style={
						(styles,
						{ flexDirection: 'column', width: openMenu ? '14rem' : '7rem' })
					}
				>
					<p>ADDONS</p>

					<div
						style={{
							display: 'flex',
							flexDirection: openMenu ? 'row' : 'column',
							alignItems: 'center',
							gap: openMenu ? '1rem' : '0.25rem',
							width: '100%',
						}}
					>
						<FolderIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
						<span style={{ textAlign: openMenu ? 'start' : 'center' }}>
							Pages
						</span>
						<KeyboardArrowDownIcon
							sx={{
								display: openMenu ? 'block' : 'none',
								transform: 'rotate(-90deg)',
							}}
						/>
					</div>
				</li>
				<li className='hovered' style={styles}>
					<AddchartOutlinedIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
					<span style={{ textAlign: openMenu ? 'start' : 'center' }}>
						Charts
					</span>
				</li>
				<li className='hovered' style={styles}>
					<TableViewIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
					<span style={{ textAlign: openMenu ? 'start' : 'center' }}>
						Tables
					</span>
				</li>
				<li className='group' style={{ width: openMenu ? '14rem' : '7rem' }}>
					<KeyboardArrowDownIcon
						sx={{
							color: 'white',
							fontSize: '2.5rem',
							border: '3rem',
							borderRadius: '50%',
							backgroundColor: 'lightgray',
							opacity: '0.5',
							transform: openMenu ? 'rotate(90deg)' : 'rotate(-90deg)',
							transition: 'transform 0.25s ease-out',
							// eslint-disable-next-line
							['@media (max-width:768px)']: {
								display: 'none',
							},
						}}
						onClick={() => setOpenMenu(!openMenu)}
					/>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
