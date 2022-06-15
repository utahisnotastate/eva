import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useFormContext, Controller } from "react-hook-form";
//import "./newcomplaint.css";
import { TextField, Checkbox } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import Button from "../../../../../../basestyledcomponents/Button";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { addNewPatientDiagnosis } from "../../../../api/patient.api";

// https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&df=code,name

//old api https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm&terms=
const API_URL =
  "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&df=code,name&terms=";

const EVA_URL = "http://127.0.0.1:8000/api";

function getComplaintNameSuggestionValue(suggestion) {
  return `${suggestion[0]} ${suggestion[1]}`;
}
function renderSuggestion(suggestion) {
  return <span>{suggestion}</span>;
}

const useStyles = makeStyles({
  newcomplaintcontainer: {
    display: "flex",
    margin: "15px",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  searchinput: {
    padding: "15px",
    width: "100%",
    zIndex: "2",
  },
});

export default function NewDiagnosis(props) {
  let { id } = useParams();
  //let dispatch = useDispatch();
  //const { register, getValues, setValue, control, watch } = useFormContext();
  const classes = useStyles();
  const [suggestions, setSuggestions] = useState([]);
  // const clinical_complaint = useSelector(state => state.appointment.complaints.inputfields.patient_complaint)
  const [complaint_name, setComplaintName] = useState("");
  const onComplaintNameChange = (event, { newValue, method }) => {
    setComplaintName(newValue);
  };
  const onSuggestionsFetchRequested = ({ value }) => {
    fetch(`${API_URL}${value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //setSuggestions([...suggestions, ...data[3]]);
        setSuggestions(data[3]);
      });
  };
  const onComplaintNameSuggestionSelected = (
    event,
    { suggestion, suggestionValue }
  ) => {
    // event.preventDefault();
    console.log(suggestion);
    const newdiagnosis = {
      icd_code: suggestion[0],
      icd_description: suggestion[1],
    };
    //props.addAssessment(suggestion);
    addNewPatientDiagnosis(props.patientId, newdiagnosis).then((response) => {
      console.log(
        "After diagnosis creation response is " + JSON.stringify(response)
      );
      setComplaintName("");
      props.loadDiagnoses();
    });

    /*props.append({
          icd10assessmentcode: suggestion[0],
          icd_description: suggestion[1],
        });*/
    //setValue("complaint_name", suggestionValue);
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const inputComplaintNameDescriptionProps = {
    placeholder: "Search ICD Codes",
    value: complaint_name,
    className: classes.searchinput,
    onChange: onComplaintNameChange,
  };
  return (
    <Grid container direction="column">
      <Grid item className={classes.newcomplaintcontainer} xs={12}>
        <Typography>Search ICD codes</Typography>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getComplaintNameSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onComplaintNameSuggestionSelected}
          inputProps={inputComplaintNameDescriptionProps}
        />
      </Grid>
    </Grid>
  );
}

/*
<CardContent>
        <Grid container direction="column">
          <Grid item className={classes.newcomplaintcontainer} xs={12}>
            <Typography>Search ICD codes</Typography>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getComplaintNameSuggestionValue}
              renderSuggestion={renderSuggestion}
              onSuggestionSelected={onComplaintNameSuggestionSelected}
              inputProps={inputComplaintNameDescriptionProps}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
 */
