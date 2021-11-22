import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Password from './components/password'
import Create from './components/Create'

function App() {
	const [sideOpen, setSideOpen] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<>
							<section className='App-header flex'>
								{sideOpen && (
									<Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
								)}
								<Navbar
									open={sideOpen}
									openMenu={openMenu}
									setOpen={setSideOpen}
								/>
							</section>

							<Switch>
								<Route exact path=''>
									<Dashboard
										style={{
											marginLeft: sideOpen
												? openMenu
													? '14rem'
													: '7rem'
												: '0',
										}}
									/>
								</Route>
								<Route path='about'>about</Route>
								<Route path='dashboard'>hey </Route>
							</Switch>
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
