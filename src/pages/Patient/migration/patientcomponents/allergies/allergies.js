import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AllergiesForm from './schema/allergies.form'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 20,
	},
	formcontainer: {
		marginBottom: 15,
	},
	areaicon: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 15,
	},
	areatitletext: {
		padding: 20,
	},
})

export default function Allergies() {
	let { id } = useParams()
	const [allergies, setAllergies] = useState([])
	return (
		<div style={{ margin: '20px' }}>
			<AllergiesForm />
		</div>
	)
}

/*
  useEffect(() => {
    getPatientLatexAllergies(id)
      .then((response) => {
        console.log("latex allergy is " + JSON.stringify(response));
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getPatientPollenAllergies(id)
      .then((response) => {
        console.log("pollen allergy is " + JSON.stringify(response));
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getPatientDrugAllergies(id)
      .then((response) => {
        console.log("drug allergy is " + JSON.stringify(response));
      })
      .catch((error) => console.log(error));
  }, [id]);
 */

/*
    const fetchData = async () => {
      const result = await axios(
        `http://127.0.0.1:8000/api/patients/${id}/drugallergy/`
      );
      return result;
      //console.log(result.data);
      //setDrugAllergies(result.data);
    };
const fetchData = async () => {
      const result = await axios(
        `http://127.0.0.1:8000/api/patients/${id}/latexallergy/`
      );
      return result;

      // setlatexstatus(result.data[0].status)
    };

const fetchData = async () => {
      const result = await axios(
        `http://127.0.0.1:8000/api/patients/${id}/pollenallergy/`
      );
      return result.data;
      // console.log(result.data[0].status)
      // setpollenstatus(result.data[0].status);
    };
 */
