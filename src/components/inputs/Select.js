import React from 'react'
import { Field } from 'formik'
import MenuItem from '@mui/material/MenuItem'
import { TextField } from 'formik-mui'

export default function EVASelect(props) {
	const { name, label, options } = props

	return (
		<Field
			InputLabelProps={{
				shrink: true,
			}}
			component={TextField}
			label={label}
			name={name}
			select
			type="text"
		>
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</Field>
	)
}

/* 
*
* <FormControl>
              <InputLabel shrink={true} htmlFor="tags">
                Tags
              </InputLabel>
              <Field
                component={Select}
                type="text"
                name="tags"
                multiple={true}
                inputProps={{name: 'tags', id: 'tags'}}
              >
                <MenuItem value="dogs">Dogs</MenuItem>
                <MenuItem value="cats">Cats</MenuItem>
                <MenuItem value="rats">Rats</MenuItem>
                <MenuItem value="snakes">Snakes</MenuItem>
              </Field>
            </FormControl>
*
*
* */
