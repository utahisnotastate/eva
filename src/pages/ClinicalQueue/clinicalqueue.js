import React from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import CustomTabs from '../../components/ui/CustomTabs/CustomTabs'

export default function ClinicalQueue() {
	const queuetabs = [
		{
			tabName: 'Upcoming',
			tabIcon: AccessibilityNewIcon,
			tabContent: <div>Upcoming</div>,
		},
		{
			tabName: 'In Waiting Room',
			tabIcon: AccessibilityNewIcon,
			tabContent: <div>Waiting Room</div>,
		},
		{
			tabName: 'Waiting in Exam Room',
			tabIcon: AccessibilityNewIcon,
			tabContent: <div>Waiting in exam room</div>,
		},
		{
			tabName: 'In Exam Room',
			tabIcon: AccessibilityNewIcon,
			tabContent: <div>In exam room</div>,
		},
		{
			tabName: 'Completed',
			tabIcon: AccessibilityNewIcon,
			tabContent: <div>Completed</div>,
		},
	]
	return (
		<div>
			<CustomTabs headerColor="primary" tabs={queuetabs} />
		</div>
	)
}
