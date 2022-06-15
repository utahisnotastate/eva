import React, { useState, useEffect } from 'react'
import { Field } from 'formik'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
import { RHFInput } from 'react-hook-form-input'
import TextField from ''
import axios from 'axios'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
		padding: 15,
	},
	labeltext: {
		color: '#000000',
	},
	inputfield: {
		padding: 20,
	},
	options: {
		width: 200,
		padding: 20,
	},
})

const genderoptions = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
]

const raceoptions = [
	{ value: 'black-non-hispanic', label: 'Black - Non Hispanic' },
	{ value: 'caucasian', label: 'Caucasian' },
	{ value: 'other', label: 'Other' },
]
const maritaloptions = [
	{ value: 'single', label: 'Single' },
	{ value: 'married', label: 'Married' },
	{ value: 'divorced', label: 'Divorced' },
	{ value: 'widow', label: 'Widow' },
]

/*
* 	<Field
		component={TextField}
		className={classes.header}
		fullWidth
		label={label}
		name={name}
		variant="standard"
	/>
*
* */

export default function BasicInfoForm() {
	const classes = useStyles()
	let { id } = useParams()
	return (
		<div>
			<div className={classes.root}>
				<div>
					<label>
						<Typography
							className={classes.labeltext}
							variant="body1">
							First Name:
						</Typography>
					</label>
					<Field name="first_name" placeholder={`Enter first name`} />
				</div>
				<div>
					<label>
						<Typography
							className={classes.labeltext}
							variant="body1">
							Middle Name:
						</Typography>
					</label>
					<TextField
						inputRef={register}
						name="patientnameanddetails.middle_name"
						defaultValue={``}
						placeholder={`Enter middle name`}
						className={classes.inputfield}
					/>
				</div>
				<div>
					<label>
						<Typography
							className={classes.labeltext}
							variant="body1">
							Last Name:
						</Typography>
					</label>
					<TextField
						inputRef={register}
						name="patientnameanddetails.last_name"
						defaultValue={``}
						placeholder={`Enter last name`}
						className={classes.inputfield}
					/>
				</div>
				<div>
					<label>
						<Typography
							className={classes.labeltext}
							variant="body1">
							Preferred Name:
						</Typography>
					</label>
					<TextField
						inputRef={register}
						name="patientnameanddetails.preferred_name"
						defaultValue={``}
						placeholder={`Enter preferred name`}
						className={classes.inputfield}
					/>
				</div>
			</div>
			<div className={classes.root}>
				<div>
					<TextField
						type={`date`}
						inputRef={register}
						label={<Typography>Date Of Birth</Typography>}
						name="patientnameanddetails.date_of_birth"
						defaultValue={``}
						placeholder={`mm/dd/yyyy`}
						className={classes.inputfield}
					/>
				</div>
			</div>
			<div>
				<label>
					<Typography className={classes.labeltext} variant="body1">
						SSN:
					</Typography>
				</label>
				<TextField
					inputRef={register}
					name="patientnameanddetails.ssn"
					defaultValue={``}
					placeholder={`Enter SSN`}
					className={classes.inputfield}
				/>
			</div>
		</div>
	)
}

/*
<div>
          <Controller
            name={`demographics.marital_status`}
            as={<Select options={maritaloptions} className={classes.options} />}
            control={control}
            placeholder={`Please choose Marital status`}
          />
        </div>
<div>
          <Controller
            name={`demographics.race`}
            as={<Select options={raceoptions} className={classes.options} />}
            control={control}
            placeholder={`Please choose Race`}
          />
        </div>
<div>
          <Controller
            name={`demographics.gender`}
            as={<Select options={genderoptions} className={classes.options} />}
            control={control}
          />
        </div>

<Controller
            name={`patientnameanddetails.date_of_birth`}
            as={
              <TextField
                type="date"
                label={`Date of Birth`}
                className={classes.inputfield}
              />
            }
            control={control}
            placeholder={`mm/dd/yyyy`}
          />
<RHFInput
            setValue={setValue}
            register={register}
            name="patientnameanddetails.preferred_name"
            as={<TextField className={classes.inputfield} />}
          />
<RHFInput
            setValue={setValue}
            register={register}
            name="patientnameanddetails.last_name"
            as={<TextField className={classes.inputfield} />}
          />
<RHFInput
            setValue={setValue}
            register={register}
            name="patientnameanddetails.middle_name"
            as={<TextField className={classes.inputfield} />}
          />

<RHFInput
            setValue={setValue}
            register={register}
            name="patientnameanddetails.first_name"
            as={<TextField className={classes.inputfield} />}
          />
  useEffect(() => {
    async function setFormFields() {
      const result = {
        patientnameanddetails,
      };
      reset(result);
    }
    setFormFields();
  }, [reset]);



useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}`);
            console.log(result);
            reset({
                    first_name: result.data.first_name,
                    middle_name: result.data.middle_name,
                    date_of_birth: result.data.date_of_birth,
                    last_name: result.data.last_name,
                    preferred_name: result.data.preferred_name,
                }
            );
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
            console.log(result);
            // console.log(result.data);
            return result.data;
        };
        fetchData().then(response => {
                reset({
                    gender: response[0].gender,
                    race: response[0].race,
                    marital_status: response[0].marital_status,
                    employment_status: response[0].employment_status,
                    email: response[0].email
                });
        }).catch(error => console.log(error));
    }, []);
reset({
                    first_name: result.data.first_name,
                    middle_name: result.data.middle_name,
                    date_of_birth: result.data.date_of_birth,
                    last_name: result.data.last_name,
                    preferred_name: result.data.preferred_name,
                }
            );
 */

/*
if(result.data[0] === undefined) {
                console.log('new patient so settings arent there');
            }
            else {
                reset({
                    gender: result.data[0].gender,
                    race: result.data[0].race,
                    marital_status: result.data[0].marital_status,
                    employment_status: result.data[0].employment_status,
                    email: result.data[0].email
                });
            }
 */
/*
fetchData().then(response => {
            if(response === undefined) {
                console.log('new patient so settings arent there');
            }
            else {
                reset({
                    gender: response[0].gender,
                    race: response[0].race,
                    marital_status: response[0].marital_status,
                    employment_status: response[0].employment_status,
                    email: response[0].email
                });
            }

        }).catch(error => console.log(error));
 */
