import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import API_URL from '../../api/api_url'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
	Calendar as BigCalendar,
	momentLocalizer,
	Views,
} from 'react-big-calendar'
import moment from 'moment'
import { Grid, Card, CardContent } from '@material-ui/core'

import AppointmentScheduleEvent from './Day/Appointment/appointmentscheduleevent'

var toDate = require('@fav/type.to-date')

const localizer = momentLocalizer(moment)

export default function Scheduling() {
	let { id } = useParams()
	const providers = useSelector((state) => state.providers)
	const onSubmit = (data) => {
		console.log('Resource Id ' + slottoschedule.resourceId)
		console.log(data)
		axios
			.post('http://127.0.0.1:8000/api/appointments/', {
				patient: id,
				provider: slottoschedule.resourceId,
				type: data.type,
				status: 'scheduled',
				start: moment(slottoschedule.start).toISOString(),
				end: moment(slottoschedule.end).toISOString(),
			})
			.then((response) => {
				if (response.statusText === 'Created') {
					console.log('It worked!!!')
					hideModal()
					// getNewAppointments().catch(error => console.log(error));
				}

				//console.log(response);
			})
	}
	// console.log(errors);
	// resources are the providers
	const [resources, setResources] = useState([])
	const [appointments, setAppointments] = useState([])
	// holds the values of the appointment information for the form to have
	const [slottoschedule, setSlotToSchedule] = useState()
	/*	const [showModal, hideModal] = useModal(
		({ in: open, onExited }) => {
			console.log(slottoschedule)
			return (
				<div>
					<Dialog
						disableBackdropClick
						onClose={hideModal}
						onExited={onExited}
						open
					>
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<Fab color="primary" onClick={hideModal}>
								X
							</Fab>
						</div>
						<DialogTitle>Schedule appointment</DialogTitle>
						<DialogContent />
						<DialogActions>
							<Button onClick={handleSubmit(onSubmit)}>Schedule</Button>
						</DialogActions>
					</Dialog>
				</div>
			)
		},
		[slottoschedule],
	)*/
	useEffect(() => {
		//gets appointments on mount
		const fetchData = async () => {
			const result = await axios(`${API_URL}/appointments`)
			// console.log(result.data);
			let appointments = result.data
			let convertedappointments = []
			appointments.forEach((appointment) => {
				let newstart = toDate.RFC3339(appointment.start)
				let newend = toDate.RFC3339(appointment.end)
				let resourceId = appointment.provider
				// console.log(appointment.provider);
				// console.log({...appointment, ...{start: newstart, end: newend, resourceId: resourceId}})
				convertedappointments.push({
					...appointment,
					...{ start: newstart, end: newend, resourceId: resourceId },
				})
			})
			setAppointments(convertedappointments)
			// console.log(appointments);
		}
		fetchData()
	}, [])
	const handleSelect = ({ start, end, resourceId }) => {
		if (start === end) {
			return false
		}
		setSlotToSchedule({ start, end, resourceId })
		showModal()
	}
	const eventColors = (event) =>
		// console.log(event);
		({
			style: {
				backgroundColor: '#1f618d',
			},
		})
	const calendercomponents = {
		day: {
			event: AppointmentScheduleEvent,
		},
		week: {
			event: AppointmentScheduleEvent,
		},
	}

	const opentime = () => {
		let date = new Date()
		date.setHours(8, 0)
		return date
	}
	const closetime = () => {
		let date = new Date()
		date.setHours(17, 0)
		return date
	}
	return (
		<Grid container justifyContent="center">
			<Grid item md={10} sm={12} xs={12}>
				<Card>
					<CardContent>
						<BigCalendar
							components={calendercomponents}
							defaultDate={new Date()}
							defaultView={Views.DAY}
							drilldownView="day"
							eventPropGetter={eventColors}
							events={appointments}
							localizer={localizer}
							max={closetime()}
							min={opentime()}
							onSelectEvent={(event) => console.log(event)}
							onSelectSlot={handleSelect}
							onView={(view) => console.log('View is ' + view)}
							resourceIdAccessor={(resource) => resource.id}
							//resourceTitleAccessor="last_name"
							resourceTitleAccessor={(resource) =>
								`${resource.title}. ${resource.first_name} ${resource.last_name}`
							}
							resources={providers}
							scrollToTime={new Date(1970, 1, 1, 6)}
							selectable
							titleAccessor="type"
							views={['month', 'work_week', 'day']}
						/>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	)
}
/*


<ScheduleAppointmentModal
								control={control}
								patient={id}
								register={register}
								slottoschedule={slottoschedule}
							/>
onSelectEvent={event => selectedEvent()}
onSelectSlot={slotInfo => selectedSlot(slotInfo)}
const eventColors = event => {
        var backgroundColor = "event-";
        event.color
            ? (backgroundColor = backgroundColor + event.color)
            : (backgroundColor = backgroundColor + "default");
        return {
            className: backgroundColor
        };
    };
startAccessor={(event) => {
                            return moment(event.start).toDate();
                        }
                        }
                        endAccessor={(event) => {
                            console.log()
                            return moment(event.end).toDate();
                        }}
                      onSelectSlot={(slotInfo, view) => selectedSlot(slotInfo, view)}
                    const addNewEvent = (e, slotInfo) => {
        var newEvents = events;
        newEvents.push({
            title: e,
            start: slotInfo.start,
            end: slotInfo.end
        });
        setAlert(null);
        setEvents(newEvents);
    };

{
    "patient": 5,
    "provider": 1,
    "type": "appointment",
    "status": "scheduled",
    "start": "2020-01-27T17:00:00Z",
    "end": "2020-01-27T18:00:00Z"
}
 */

/*
<Typography>Appointment Start: {moment(props.slottoschedule.slots[0]).format('MMMM Do @ h:mm A')}</Typography>
            <Typography>Appointment End: {moment(props.slottoschedule.slots[props.slottoschedule.slots.length - 1]).format('MMMM Do @ h:mm A')}</Typography>
 */
/*
<Button onClick={() => {
                                appointments.push({
                                    title: "Meeting",
                                    start: slottoschedule.slots[0],
                                    end: slottoschedule.slots[slottoschedule.slots.length - 1],
                                    allDay: false,
                                    color: 'green'
                                });
                                // setEvents(appointments);
                                hideModal()
                            }}>Save</Button>
 */
/*
{id ? <ScheduleAppointmentDialog slottoschedule={slottoschedule} patient={id} register={register}/> : (
                                <div>
                                    <PatientSearch/>
                                    <Typography>Start
                                        = {moment(slottoschedule.start).format('MMM DD YYYY @ h:mm a')}</Typography>
                                    <Typography>End
                                        = {moment(slottoschedule.end).format('MMM DD YYYY @ h:mm a')}</Typography>
                                    <Typography>Provider {slottoschedule.resourceId}</Typography>
                                </div>
                            )}

                            <ScheduleAppointmentDialog slottoschedule={slottoschedule} patient={id} register={register} control={control}/>
                            function PatientSearch() {
    return (
        <div>
            <Typography>Patient Search</Typography>
        </div>
    );
}

function ScheduleAppointmentDialog(props) {
    console.log(props);
    return (
        <Fragment>
            <select name="type" ref={props.register}>
                <option value="first_appointment">first_appointment</option>
                <option value="medication_management">medication_management</option>
                <option value="follow_up">follow_up</option>
                <option value="appointment">appointment</option>
            </select>
            <Typography>Start = {moment(props.slottoschedule.start).format('MMM DD YYYY @ h:mm a')}</Typography>
            <Typography>End = {moment(props.slottoschedule.end).format('MMM DD YYYY @ h:mm a')}</Typography>
            <TextField />
            <Typography>Patient First Name: {props.patient}</Typography>
            <Typography>Patient Last Name</Typography>
            <Typography>Patient Contact Number</Typography>
            <Typography>Notify if an earlier appointment opens up?</Typography>
        </Fragment>
    )
}
 */
