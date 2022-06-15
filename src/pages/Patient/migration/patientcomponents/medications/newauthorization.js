import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Button from "../../../basestyledcomponents/Button";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import {
  addNewMedicationAuthorization,
  getPatientMedications,
} from "../../../../api/patient.api";

export default function NewMedicationAuthorization(props) {
  const dispatch = useDispatch();
  const { register, control, handleSubmit, errors, watch } = useForm();
  const authorized = watch("authorized");

  const addAuthorizationAndReload = (authorization) => {};
  const onSubmit = (data) => {
    console.log(data);
    const authorization = { ...data, ...{ medication: props.prescription.id } };
    if (data.authorized === false) {
      authorization.authorized_on = null;
      authorization.date_of_next_authorization = null;
      addNewMedicationAuthorization(
        props.prescription.patient,
        props.prescription.id,
        authorization
      ).then((response) => {
        console.log(
          "Just added authorization response is " + JSON.stringify(response)
        );
        getPatientMedications(props.prescription.patient).then((response) => {
          dispatch({ type: "load_all_medications", medications: response });
        });
      });
    } else {
      addNewMedicationAuthorization(
        props.prescription.patient,
        props.prescription.id,
        authorization
      ).then((response) => {
        console.log(
          "Just added authorization response is " + JSON.stringify(response)
        );
        getPatientMedications(props.prescription.patient).then((response) => {
          dispatch({ type: "load_all_medications", medications: response });
        });
      });
    }
  };
  console.log(props);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="row" justify={`space-evenly`} spacing={2}>
        <Grid item>
          <Typography>Log authorization attempt</Typography>
        </Grid>
        <Grid item>
          <Typography>Medication</Typography>
          <Typography>{props.prescription.name}</Typography>
          <Typography>{props.prescription.strength}</Typography>
        </Grid>
        <Grid item>
          <Typography>Date Effective</Typography>
          {authorized ? (
            <TextField
              type={`date`}
              name="authorized_on"
              variant={`outlined`}
              inputRef={register}
            />
          ) : null}
        </Grid>
        <Grid item>
          <Typography>Contact Method</Typography>
          <select name="contact_method" ref={register}>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="fax">fax</option>
          </select>
        </Grid>
        <Grid item>
          <Typography>Authorization expiration date</Typography>
          {authorized ? (
            <TextField
              type={`date`}
              name="date_of_next_authorization"
              variant={`outlined`}
              inputRef={register}
            />
          ) : null}
        </Grid>
        <Grid item>
          <Typography align="center">Outcome</Typography>
          <Grid container direction="row">
            <Grid item>
              <Typography>Denied</Typography>
            </Grid>
            <Grid item>
              <Switch inputRef={register} name={`authorized`} color="primary" />
            </Grid>
            <Grid item>
              {" "}
              <Typography>Approved</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button color="primary" onClick={handleSubmit(onSubmit)}>
            Save outcome
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
