import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/ui/NavBar/navbar'
import Home from './pages/Home/home'
import Patients from './pages/Patients/patients'
import Patient from './pages/Patient/patient'
import ClinicalQueue from './pages/ClinicalQueue/clinicalqueue'
import Requests from './pages/Requests/requests'

function Eva() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Patients />} path="/patients" />
				<Route element={<p>Appointment</p>} path="/appointments/:id" />
				<Route element={<ClinicalQueue />} path="/clinicalqueue" />
				<Route element={<Patient />} path="/patients/:id" />
				<Route element={<Requests />} path="/requests">
					<Route element={<p>Request ID</p>} path=":id" />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Eva
