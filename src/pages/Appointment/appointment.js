import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Card from '../../components/ui/Card/Card'
import CardHeader from '../../components/ui/Card/CardHeader'
import CardFooter from '../../components/ui/Card/CardFooter'
import { FormikWizard } from 'formik-wizard-form'
import Assessments from './inprogress/assessments/assessments'
import PhysicalExam from './inprogress/physicalexam/physicalexam'
import ReviewOfSystems from './inprogress/reviewofsystems/reviewofsystems'
import Summary from './inprogress/summary/summary'
import Finalize from './inprogress/finalize/finalize'
import FollowUp from './inprogress/followup/followup'
import CardBody from '../../components/ui/Card/CardBody'
import Complaints from './inprogress/complaints/complaints'

export default function Appointment() {
	const [finalValues, setFinalValues] = React.useState({})
	const [finished, setFinished] = React.useState(false)
	return (
		<div className="App">
			<Card>
				<FormikWizard
					activeStepIndex={0}
					initialValues={{
						preappointment: '',
						complaints: ['neck pain', 'headache'],
						physicalexams: [],
						reviewofsystems: [],
						assessments: [],
						follwups: [],
						summary: '',
					}}
					onSubmit={(values) => {
						setFinalValues(values)
						setFinished(true)
					}}
					steps={[
						{
							component: Complaints,
						},
						{
							component: PhysicalExam,
						},
						{
							component: ReviewOfSystems,
						},
						{
							component: Assessments,
						},
						{
							component: FollowUp,
						},
						{
							component: Summary,
						},
						{
							component: Finalize,
						},
					]}
					validateOnNext
				>
					{({
						currentStepIndex,
						renderComponent,
						handlePrev,
						handleNext,
						isNextDisabled,
						isPrevDisabled,
					}) => (
						<>
							<CardHeader
								color="primary"
								sx={{ width: '100%', my: '1rem', color: 'white' }}
							>
								<Stepper activeStep={currentStepIndex}>
									<Step completed={currentStepIndex > 0}>
										<StepLabel>Complaints</StepLabel>
									</Step>
									<Step completed={currentStepIndex > 1}>
										<StepLabel>Physical Exam</StepLabel>
									</Step>
									<Step completed={currentStepIndex > 2}>
										<StepLabel>Review of Systems</StepLabel>
									</Step>
									<Step completed={currentStepIndex > 3}>
										<StepLabel>Assessment</StepLabel>
									</Step>
									<Step completed={currentStepIndex > 4}>
										<StepLabel>Follow Up</StepLabel>
									</Step>
									<Step completed={currentStepIndex > 5}>
										<StepLabel>Summary</StepLabel>
									</Step>
									<Step completed={currentStepIndex > 6}>
										<StepLabel>Finalize</StepLabel>
									</Step>
								</Stepper>
							</CardHeader>
							<CardBody my="2rem">{renderComponent()}</CardBody>
							<CardFooter display="flex" justifyContent="space-between">
								<Button
									disabled={isPrevDisabled}
									onClick={handlePrev}
									type="primary"
									variant="contained"
								>
									Previous
								</Button>
								<Button
									disabled={isNextDisabled}
									onClick={handleNext}
									type="primary"
									variant="contained"
								>
									Next
									{!!currentStepIndex === 2 && 'Finish'}
								</Button>
							</CardFooter>
							<Box>
								<pre>{JSON.stringify(finalValues, null, 2)}</pre>
							</Box>
						</>
					)}
				</FormikWizard>
			</Card>
		</div>
	)
}
