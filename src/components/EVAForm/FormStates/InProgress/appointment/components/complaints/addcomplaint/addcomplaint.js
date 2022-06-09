/*
import React, { useEffect, useState } from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import Autosuggest from 'react-autosuggest'
import { useFormikContext } from 'formik'
//import makestyles from @mui
import { makeStyles } from '@material-ui/core/styles'
import './addcomplaint.css'
import Card from '../../../../../../../../../../evaformedit/src/components/Card/Card'
import CardBody from '../../../../../../../../../../evaformedit/src/components/Card/CardBody'
import CardHeader from '../../../../../../../../../../evaformedit/src/components/Card/CardHeader'
const API_URL =
	'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm&terms='

export default function AddComplaint({ push }) {
	const { values, setFieldValue, handleChange } = useFormikContext()
	const [suggestions, setSuggestions] = useState([])

	const onSuggestionsFetchRequested = ({ value }) => {
		fetch(`${API_URL}${value}`)
			.then((response) => response.json())
			.then((data) => {
				setSuggestions([...suggestions, ...data[3]])
			})
	}

	const onSuggestionSelected = (event, { suggestionValue }) => {
		// event.preventDefault();
		console.log(suggestionValue)
		push({ condition: suggestionValue, description: '', onset: '' })
		setFieldValue('complaint_name', '')
	}
	const getSuggestionValue = (suggestion) => suggestion[0]
	const renderSuggestion = (suggestion) => <Typography>{suggestion}</Typography>
	const onSuggestionsClearRequested = () => {
		setSuggestions([])
	}

	const inputProps = {
		placeholder: 'Search for a complaint',
		name: 'complaint_name',
		value: values.complaint_name,
		className: 'searchinput',
		onChange: handleChange,
	}

	return (
		<Card>
			<CardHeader>
				<Typography variant="h5">Add Complaint</Typography>
				<Divider />
			</CardHeader>
			<CardBody>
				<Autosuggest
					getSuggestionValue={getSuggestionValue}
					inputProps={inputProps}
					onSuggestionSelected={onSuggestionSelected}
					onSuggestionsClearRequested={onSuggestionsClearRequested}
					onSuggestionsFetchRequested={onSuggestionsFetchRequested}
					renderSuggestion={renderSuggestion}
					suggestions={suggestions}
				/>
			</CardBody>
		</Card>
	)
}
*/
