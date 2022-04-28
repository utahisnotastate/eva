import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/ui/NavBar/navbar'
import Home from './pages/Home/home'
import Patients from './pages/Patients/patients'

function Eva() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Patients />} path="/patients" />
				<Route element={<p>Appointment</p>} path="/appointment/:id" />
				<Route element={<p>Patient</p>} path="/patient/:id" />
				<Route element={<p>Requests</p>} path="/requests">
					<Route element={<p>Request ID</p>} path=":id" />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Eva
