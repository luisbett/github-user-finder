import { Outlet } from 'react-router'

import classes from './App.module.css'

function App() {

	return (
		<div className={classes.app}>
			<h1>GitHub User Finder</h1>
			<Outlet />
		</div>
	)
}

export default App
