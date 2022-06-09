import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import { useFormikContext } from 'formik'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Assessment from './appointment/components/assessment'
import Complaints from './appointment/components/complaints/complaints'
import FollowUp from './appointment/components/followup'
import Review from './appointment/components/review/review'
import PhysicalExam from './appointment/components/physicalexam/physicalexam'
import ReviewOfSystems from './appointment/components/reviewofsystems/reviewofsystems'
import Summary from './appointment/components/summary'
import Card from '../../../../../../evaformedit/src/components/Card/Card'
import CardBody from '../../../../../../evaformedit/src/components/Card/CardBody'
import CardHeader from '../../../../../../evaformedit/src/components/Card/CardHeader'
import CardFooter from '../../../../../../evaformedit/src/components/Card/CardFooter'
import EVAArrayFieldPage from './appointment/components/EVAArrayFieldPage'

const steps = [
	'Complaints',
	'Assessment',
	'Physical Exam',
	'Review of Systems',
	'Follow Up',
	'Summary',
	'Review',
]
function getStepContent(step, values) {
	switch (step) {
		case 0:
			return <Complaints />
		case 1:
			return (
				<EVAArrayFieldPage
					items={values.assessments}
					name="assessments"
					title="Assessments"
				/>
			)
		case 2:
			return <PhysicalExam />
		case 3:
			return <ReviewOfSystems />
		case 4:
			return (
				<EVAArrayFieldPage
					items={values.followup}
					name="followup"
					title="Follow Up"
				/>
			)
		case 5:
			return <Summary />
		case 6:
			return <Review />
		default:
			return <Complaints />
	}
}

export default function InProgress() {
	const [activeStep, setActiveStep] = React.useState(0)
	const [completed, setCompleted] = React.useState({})
	const { values, setFieldValue } = useFormikContext()

	const totalSteps = () => steps.length

	const completedSteps = () => Object.keys(completed).length

	const isLastStep = () => activeStep === totalSteps() - 1

	const allStepsCompleted = () => completedSteps() === totalSteps()

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1
		setActiveStep(newActiveStep)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleStep = (step) => () => {
		setActiveStep(step)
	}

	const handleComplete = () => {
		const newCompleted = completed
		newCompleted[activeStep] = true
		setCompleted(newCompleted)
		handleNext()
	}

	const handleReset = () => {
		setActiveStep(0)
		setCompleted({})
	}

	const handleSubmit = (values) => {
		console.log(values)
	}
	return (
		<Card>
			<CardHeader color="primary">
				<Typography component="h2" variant="h5">
					In Progress{' '}
				</Typography>
			</CardHeader>
			<CardHeader>
				<Stepper activeStep={activeStep} nonLinear>
					{steps.map((label, index) => (
						<Step completed={completed[index]} key={label}>
							<StepButton color="inherit" onClick={handleStep(index)}>
								{label}
							</StepButton>
						</Step>
					))}
				</Stepper>
			</CardHeader>
			<CardBody>{getStepContent(activeStep, values)}</CardBody>
			<CardFooter>
				{allStepsCompleted() ? (
					<>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - you&apos;re finished
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleSubmit}>Save</Button>
						</Box>
					</>
				) : (
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							color="primary"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleNext} sx={{ mr: 1 }}>
							Next
						</Button>
					</Box>
				)}
			</CardFooter>
		</Card>
	)
}

/*
<Card>
			<CardHeader color="primary">
				<Typography component="h2" variant="h5">
					In Progress{' '}
				</Typography>
			</CardHeader>
			<CardHeader>
				<Stepper activeStep={activeStep} nonLinear>
					{steps.map((label, index) => (
						<Step completed={completed[index]} key={label}>
							<StepButton color="inherit" onClick={handleStep(index)}>
								{label}
							</StepButton>
						</Step>
					))}
				</Stepper>
			</CardHeader>
			<CardBody>
				{getStepContent(activeStep)}
				{allStepsCompleted() ? (
					<>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - you&apos;re finished
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleSubmit}>Save</Button>
						</Box>
					</>
				) : (
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							color="primary"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleNext} sx={{ mr: 1 }}>
							Next
						</Button>
					</Box>
				)}
			</CardBody>
		</Card>
 */
/*
*return (
		<Formik
			initialValues={{
				complaints: [],
				assessment: [],
				physicalexam: {},
				reviewofsystems: {},
				summary: '',
			}}
			onSubmit={handleSubmit}
		>
			<Form>
				<Box sx={{ width: '100%' }}>
					<Stepper activeStep={activeStep} nonLinear>
						{steps.map((label, index) => (
							<Step completed={completed[index]} key={label}>
								<StepButton color="inherit" onClick={handleStep(index)}>
									{label}
								</StepButton>
							</Step>
						))}
					</Stepper>
					<>
						{getStepContent(activeStep)}
						{allStepsCompleted() ? (
							<>
								<Typography sx={{ mt: 2, mb: 1 }}>
									All steps completed - you&apos;re finished
								</Typography>
								<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
									<Box sx={{ flex: '1 1 auto' }} />
									<Button onClick={handleSubmit}>Save</Button>
								</Box>
							</>
						) : (
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Button
									color="primary"
									disabled={activeStep === 0}
									onClick={handleBack}
									sx={{ mr: 1 }}
								>
									Back
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleNext} sx={{ mr: 1 }}>
									Next
								</Button>
							</Box>
						)}
					</>
				</Box>
			</Form>
		</Formik>
	)
*
*
* {activeStep !== steps.length &&
									(completed[activeStep] ? (
										<Typography
											sx={{ display: 'inline-block' }}
											variant="caption"
										>
											Step {activeStep + 1} already completed
										</Typography>
									) : (
										<Button onClick={handleComplete}>
											{completedSteps() === totalSteps() - 1
												? 'Finish'
												: 'Complete Step'}
										</Button>
									))}
*
*
* */
