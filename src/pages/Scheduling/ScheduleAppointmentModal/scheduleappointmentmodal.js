import React, { Fragment, useEffect, useState } from 'react'
import moment from 'moment'
import TextField from '@material-ui/core/TextField'

export default function ScheduleAppointmentModal(props) {
	console.log(props.slottoschedule)
	console.log('Start: ' + moment(props.slottoschedule.start).toISOString())
	return (
		<div>
			<select name="type" ref={props.register}>
				<option value="first_appointment">first_appointment</option>
				<option value="medication_management">medication_management</option>
				<option value="follow_up">follow_up</option>
				<option value="appointment">appointment</option>
			</select>
		</div>
	)
}
