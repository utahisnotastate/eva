import React, { useEffect, useState } from "react";
import Button from "../../../basestyledcomponents/Button";
import { Grid, Typography, Checkbox, TextField } from "@material-ui/core";
import {
  getMedicationClinicalDetails,
  changeMedicationStatus,
} from "../../../../api/patient.api";
// ADDERALL (Oral Pill) -  5 mg Tab, 7.5 mg Tab,10 mg Tab,12.5 mg Tab,15 mg Tab,20 mg Tab,30 mg Tab - 541879,1009147,541894,687045,577960,577962,541365
export default function MedicationSummary(props) {
  const rowspacing = 4;
  useEffect(() => {
    console.log(props.summary.name);
    getMedicationClinicalDetails(props.summary.name).then((response) => {
      console.log("Clinical details is " + response);
    });
  }, [props.summary.id, changeMedicationStatus]);
  console.log(props);
  return (
    <Grid container direction="column">
      <Grid item>
        {props.summary.active ? (
          <Typography variant="h4">
            Patient is currently on this medication
          </Typography>
        ) : (
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">
                Patient has stopped taking medication
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={rowspacing}>
                <Grid item>
                  <Typography>Reason Stopped</Typography>
                </Grid>
                <Grid item>
                  <Typography>{props.summary.reason_stopped}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={() =>
                  changeMedicationStatus(
                    props.summary.patient,
                    props.summary.id,
                    true
                  )
                }
              >
                Mark as active
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row" spacing={rowspacing}>
              <Grid item>
                <Typography>Name</Typography>
              </Grid>
              <Grid item>
                <Typography>{props.summary.name}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row" spacing={rowspacing}>
              <Grid item>
                <Typography>Strength</Typography>
              </Grid>
              <Grid item>
                <Typography>{props.summary.strength}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row" spacing={rowspacing}>
              <Grid item>
                <Typography>Frequency</Typography>
              </Grid>
              <Grid item>
                <Typography>{props.summary.frequency}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
