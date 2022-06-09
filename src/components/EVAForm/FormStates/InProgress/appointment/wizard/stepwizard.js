import React from 'react'
import StepZilla from 'react-stepzilla'
import StepWizard from 'react-step-wizard'
import Assessment from '../components/assessment'
import Complaints from '../components/complaints/complaints'
import FollowUp from '../components/followup'
import PhysicalExam from '../components/physicalexam'
import ReviewOfSystems from '../components/reviewofsystems'
import Summary from '../components/summary'
export default function EVAWizard() {
	return (
		<StepWizard>
			<Assessment />
			<Complaints />
			<FollowUp />
			<PhysicalExam />
			<ReviewOfSystems />
			<Summary />
		</StepWizard>
	)
}
