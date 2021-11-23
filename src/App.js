import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/sidebar'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import Login from './components/Login'
import Password from './components/password'
import Create from './components/Create'
import Blank from './components/Blank'
import NotFound from './components/404Page'

function App() {
	const [sideOpen, setSideOpen] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<Router>
			<div className='App '>
				<Switch>
					<Route exact path='/'>
						<Redirect to='/dashboard/' />
					</Route>
					<Route exact path='/dashboard/*'>
						<>
							<section className='App-header flex'>
								{sideOpen && (
									<Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
								)}
							</section>
							<div
								className='dashContainer'
								style={{
									marginLeft: sideOpen ? (openMenu ? '14rem' : '7rem') : '0',
								}}
							>
								<Navbar
									open={sideOpen}
									openMenu={openMenu}
									setOpen={setSideOpen}
								/>
								<Switch>
									<Route exact path='/dashboard'>
										<Dashboard />
									</Route>
									<Route exact path='/dashboard/blank'>
										<Blank />
									</Route>
									<Route exact path='/dashboard/404'>
										<NotFound />
									</Route>
								</Switch>
								<Footer />
							</div>
						</>
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/resetpwd'>
						<Password />
					</Route>
					<Route exact path='/create'>
						<Create />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
