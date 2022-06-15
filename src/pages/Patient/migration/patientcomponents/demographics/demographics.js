import React, { Component, useEffect, useState } from 'react'
import { Field } from 'formik'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import { TextField } from 'formik-mui'
import DemographicsForm from './schema/demographics.form'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 20,
	},
	formcontainer: {
		marginBottom: 15,
	},
	areaicon: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 15,
	},
	areatitletext: {
		padding: 20,
	},
})

const basicfields = [
	{
		name: 'first_name',
		label: 'First Name',
		type: 'text',
	},
	{
		name: 'last_name',
		label: 'Last Name',
		type: 'text',
	},
	{
		name: 'middle_name',
		label: 'Middle Name',
		type: 'text',
	},
	{
		name: 'preferred_name',
		label: 'Preferred Name',
		type: 'text',
	},
	{
		name: 'ssn',
		label: 'SSN',
		type: 'text',
	},
	{
		name: 'date_of_birth',
		label: 'Date of Birth',
		type: 'date',
	},
	{
		name: 'details.demographics.race',
		label: 'Race',
		type: 'text',
	},
	{ name: 'details.demographics.gender', label: 'Gender', type: 'text' },
	{
		name: 'details.demographics.marital_status',
		label: 'Marital Status',
		type: 'text',
	},
	{
		name: 'details.demographics.employment_status',
		label: 'Employment Status',
		type: 'text',
	},
	{
		name: 'details.address.address_one',
		label: 'Address 1',
		type: 'text',
	},
	{
		name: 'details.address.address_two',
		label: 'Address 2',
		type: 'text',
	},
	{
		name: 'details.address.city',
		label: 'City',
		type: 'text',
	},
	{
		name: 'details.address.state',
		label: 'State',
		type: 'text',
	},
	{
		name: 'details.address.zip',
		label: 'Zip',
		type: 'text',
	},
]

export default function Demographics() {
	const classes = useStyles()
	return (
		<Grid container className={classes.root} alignItems="flex-start">
			<DemographicsForm />
		</Grid>
	)
}

/*

{basicfields.map((field, index) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					key={index}
					className={classes.formcontainer}>
					<Field
						name={field.name}
						label={field.label}
						type={field.type}
						component={TextField}
						fullWidth
					/>
				</Grid>
			))}
* 	<div>
					<BasicInfoForm />
			</div>
			<div>
					<AssignmentIcon />
					<Typography
						className={classes.areatitletext}
						variant='subtitle2'>
						Address
					</Typography>
			</div>
			<div>
					<AddressForm />
			</div>
			<div>
					<AssignmentIcon />
					<Typography
						className={classes.areatitletext}
						variant='subtitle2'>
						Contact Info
					</Typography>
			</div>
			<div>
					<ContactForm />
			</div>
*
*
* */
