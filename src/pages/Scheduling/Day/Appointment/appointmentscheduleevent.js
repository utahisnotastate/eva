import React from 'react'

import AppointmentScheduleEventToolTip from './components/AppointmentScheduleEventToolTip/appointmentscheduleeventtooltip'
import { makeStyles } from '@material-ui/core/styles'

export default function AppointmentScheduleEvent(props) {
	return <AppointmentScheduleEventToolTip event={props.event} />
}
