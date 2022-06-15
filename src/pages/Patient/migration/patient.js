import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import SimpleSideBar from './patientcomponents/simplesidebar/simplesidebar'
import routes from './routes'
import blankpatient from './patient.mock'

const useStyles = makeStyles((theme) => ({
	list: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		backgroundColor: '#BADDFF',
		minHeight: '100vh',
		boxShadow: '0 2px 4px rgba(0,0,0,.15)',
	},
	listitem: {
		display: 'flex',
		justifyContent: 'flex-start',
	},
	sideitem: {
		color: '#414141',
	},
}))

export default function Patient() {
	let { path, url } = useRouteMatch()
	const classes = useStyles()
	let { id } = useParams()
	const [patient, setPatient] = useState(blankpatient)

	const dispatch = useDispatch()

	const handleSave = (patient) => {
		console.log(patient)
	}
	useEffect(() => {
		console.log('lol')
	}, [id])
	return (
		<Grid container>
			<Grid item xs={2}>
				<SimpleSideBar routes={routes} />
			</Grid>
			<Grid item xs={10}>
				<Paper>
					<Switch>
						<Route exact path={path}>
							<Typography variant="body1">Content</Typography>
						</Route>
						{routes.map((route) => (
							<Route
								component={route.component}
								exact
								key={route.path}
								path={`${path}${route.path}`}
							/>
						))}
					</Switch>
				</Paper>
			</Grid>
		</Grid>
	)
}

/*
<Formik
						initialValues={patient}
						enableReinitialize
						onSubmit={(patient) => handleSave(patient)}>
						<Form>
							<Switch>
								<Route exact path={path}>
									<Typography variant="body1">
										Content
									</Typography>
								</Route>
								{routes.map((route) => (
									<Route
										key={route.path}
										exact
										path={`${path}${route.path}`}
										component={route.component}
									/>
								))}
							</Switch>
						</Form>
					</Formik>


* <Grid item xs={10}>
				<Switch>
					<Route exact path={path}>
						<Typography variant="body1">Content</Typography>
					</Route>
					{routes.map((route) => (
						<Route
							key={route.path}
							exact
							path={`${path}${route.path}`}
							component={route.component}
						/>
					))}
				</Switch>
			</Grid>
*
*
* */
/*
				<List className={classes.list}>
					{routes.map((route) => (
						<ListItem className={classes.listitem} key={route.path}>
							<NavLink
								activeStyle={{ color: '#0232b2' }}
								to={`${url}${route.path}`}>
								<ListItemText
									primary={
										<Typography
											className={classes.sideitem}
											variant="body1">
											{route.label}
										</Typography>
									}
								/>
							</NavLink>
						</ListItem>
					))}
				</List>


  useEffect(() => {
    apifetch(getFullPatientInformation, id).then((fullpatientinformation) => {
      handleDemographicsAddressContactMethodsReduxLoad(fullpatientinformation);
    });
  }, [id]);
if (patient.address === null || patient.demographics === null) {
      // set address to its default blank values
      dispatch({ type: "address_is_null" });
      // set demographics to its default blank values
      dispatch({ type: "demographics_is_null" });
      // set patient contact methods to values in DB
      // handlePatientContactMethods(patient.patient_contact_methods);

      dispatch({
        type: "load_patient_contact_methods",
        patient_contact_methods: patient.patient_contact_methods,
      });
    } else {
      // load the address into the redux store
      dispatch({ type: "load_address", address: patient.address });
      //load the demographics into the store
      dispatch({ type: "load_demographics", address: patient.demographics });
      // handlePatientContactMethods(patient.patient_contact_methods);

      // set patient contact methods to values in DB
      dispatch({
        type: "load_patient_contact_methods",
        patient_contact_methods: patient.patient_contact_methods,
      });
    }

useEffect(() => {
  const fetchData = async () => {
    const result = await getFullPatientInformation(id);
    //const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
    console.log(result);
  };
  fetchData();
}, [id]);
 */
