import React from 'react'
import { NavLink } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Card from '../../../../../../components/ui/Card/Card'
import CardHeader from '../../../../../../components/ui/Card/CardHeader'
import { Typography } from '@material-ui/core'

export default function AppointmentScheduleEventCard(props) {
	return (
		<Card>
			<CardHeader color="rose">
				<Typography>Patient Name</Typography>
				<Typography>Date of Birth: </Typography>
			</CardHeader>
			<List component="nav">
				<ListItem>
					<NavLink to={`/patient/${props.event.patient.id}/demographics`}>
						<Typography variant="subtitle2">View Profile</Typography>
					</NavLink>
				</ListItem>
			</List>
		</Card>
	)
}

/*

<ListItem>
					<Modal
						buttontext="Check In"
						form={CheckInForm}
						modaltitle="Patient Check In"
					/>
				</ListItem>
*<ListItem>
					<Modal buttontext="Verify Insurance" />
				</ListItem>
				<ListItem>
					<Modal buttontext="No Show" />
				</ListItem>
*
*
export default function AppointmentScheduleEventCard(props) {
    return (
        <Card>
            <CardHeader color="rose">
                <Typography>Patient Name</Typography>
                <Typography>Date of Birth: </Typography>
            </CardHeader>
            <List component="nav">
                <ListItem>
                    <NavLink to={`/patient/${props.event.patient.id}/demographics`}><Typography variant="subtitle2">
                        View Profile
                    </Typography></NavLink>
                </ListItem>
                <ListItem>
                    <Modal buttontext="Check In" modaltitle={`Patient Check In`} form={CheckInForm} />
                </ListItem>
                <ListItem>
                    <Modal buttontext="Verify Insurance" />
                </ListItem>
                <ListItem>
                    <Modal buttontext="No Show" />
                </ListItem>
            </List>
        </Card>
    );
}
*
*
* */
