import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/sidebar'

function App() {
	const [sideOpen, setSideOpen] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<div className='App'>
			<section className='App-header flex'>
				{sideOpen && <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />}
				<Navbar open={sideOpen} openMenu={openMenu} setOpen={setSideOpen} />
			</section>

			<Dashboard
				style={{
					marginLeft: sideOpen ? (openMenu ? '14rem' : '7rem') : '0',
				}}
			/>
		</div>
	)
}

export default App
