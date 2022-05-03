import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/ui/NavBar/navbar'
import Home from './pages/Home/home'
import { useSelector, useDispatch } from 'react-redux'
import Patients from './pages/Patients/patients'
import Patient from './pages/Patient/patient'
import ClinicalQueue from './pages/ClinicalQueue/clinicalqueue'
import Requests from './pages/Requests/requests'
import { getAllPatients } from './api/patients.api'
import { evaAPIGetAll } from './api/util.api'
//import routes from './pages/Patient/routes'

function Eva() {
	const dispatch = useDispatch()
	//const [patients, setPatients] = useState([])
	const patients = useSelector((state) => state.patients)
	useEffect(() => {
		evaAPIGetAll('patients').then((patients) => {
			console.log(patients)
			dispatch({ type: 'LOAD_PATIENTS', patients })
		})
	}, [])
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Patients patients={patients} />} path="/patients" />
				<Route element={<p>App2342ointment</p>} path="/appointments/:id" />
				<Route element={<ClinicalQueue />} path="/clinicalqueue" />
				<Route element={<Patient />} exact path="/patients/:id" />
				<Route element={<Requests />} path="/requests">
					<Route element={<p>Request ID</p>} path=":id" />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Eva

/*
				<Route element={<Patient />} exact path="/patients/:id">
					{routes.map((route, index) => (
						<Route element={route.component} key={index} path={route.path} />
					))}
				</Route>
 */
