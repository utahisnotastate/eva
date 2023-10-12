import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import { useSelector, useDispatch } from 'react-redux'
import Patients from './pages/Patients/patients'
import NavLinkButton from './components/ui/NavBar/navlink'
import ClinicalQueue from './pages/ClinicalQueue/clinicalqueue'
import Requests from './pages/Requests/requests'
import { evaAPIGetAll } from './api/util.api'
import Appointment from './pages/Appointment/appointment'
import FormBuilder from './pages/FormBuilder/formbuilder'
import Scheduling from './pages/Scheduling/scheduling'
import EVALayout from './components/ui/layout/layout'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './App.css'
import Patient from './pages/Patient/patient'

function Eva() {
	const dispatch = useDispatch()
	const [navlinks, setNavlinks] = useState([
		{
			name: 'EVA EMR',
			label: 'EVA EMR',
			link: '/',
		},
		{
			name: 'Patient',
			label: <NavLinkButton text="Patient" to="/patients/1" />,
			link: '/patients/1',
		},
		{
			name: 'Patients',
			label: 'Patients',
			link: '/patients',
		},
		{ name: 'Appointments', label: 'Appointments', link: '/appointments' },
		{ name: 'Clinical Queue', link: '/clinicalqueue' },
		{
			name: 'Form Builder',
			link: '/formbuilder',
			label: 'Form Builder',
		},
		{
			name: 'Requests',
			link: '/requests',
			label: 'Requests',
		},
		{
			name: 'Scheduling',
			link: '/scheduling',
			label: 'Scheduling',
		},
	])
	// <Route element={<Patient />} exact path="/patients/:id" />
	//const [patients, setPatients] = useState([])
	const patients = useSelector((state) => state.patients)

	/* TODO merge all these to promise.all or move to seperate file */
	useEffect(() => {
		evaAPIGetAll('patients').then((patients) => {
			console.log(patients)
			dispatch({ type: 'LOAD_PATIENTS', patients })
		})
	}, [])

	useEffect(() => {
		evaAPIGetAll('appointments').then((appointments) => {
			console.log(appointments)
			dispatch({ type: 'LOAD_APPOINTMENTS', appointments })
		})
	}, [])

	useEffect(() => {
		evaAPIGetAll('requests').then((requests) => {
			console.log(requests)
			dispatch({ type: 'LOAD_REQUESTS', requests })
		})
	}, [])

	useEffect(() => {
		evaAPIGetAll('providers').then((providers) => {
			console.log(providers)
			dispatch({ type: 'LOAD_PROVIDERS', providers })
		})
	}, [])

	return (
		<BrowserRouter>
			<EVALayout navlinks={navlinks}>
				<Routes>
					<Route element={<Home />} path="/" />
					<Route
						element={<Patients patients={patients} />}
						path="/patients"
					/>
					<Route element={<Appointment />} path="/appointments" />
					<Route element={<ClinicalQueue />} path="/clinicalqueue" />
					<Route element={<Patient />} exact path="/patients/:id" />
					<Route element={<Requests />} path="/requests">
						<Route element={<p>Request ID</p>} path=":id" />
					</Route>
					<Route element={<Scheduling />} exact path="/scheduling" />
					<Route element={<FormBuilder />} exact path="/formbuilder">
						<Route element={<p>Form ID</p>} path="preview" />
					</Route>
				</Routes>
			</EVALayout>
		</BrowserRouter>
	)
}

export default Eva

/*
<BrowserRouter>
			<NavBar />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Patients patients={patients} />} path="/patients" />
				<Route element={<Appointment />} path="/appointments" />
				<Route element={<ClinicalQueue />} path="/clinicalqueue" />
				<Route element={<Patient />} exact path="/patients/:id" />
				<Route element={<Requests />} path="/requests">
					<Route element={<p>Request ID</p>} path=":id" />
				</Route>
				<Route element={<Scheduling />} exact path="/scheduling" />
				<Route element={<FormBuilder />} exact path="/formbuilder" />
			</Routes>
		</BrowserRouter>






				<Route element={<Patient />} exact path="/patients/:id">
					{routes.map((route, index) => (
						<Route element={route.component} key={index} path={route.path} />
					))}
				</Route>
 */
