import React, { useEffect, useState } from "react";
import { Grid, Typography, Checkbox, TextField } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

export default function MedicationDiagnoses(props) {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>Related to which of the patient's diagnoses</Typography>
      </Grid>
      <Grid item>
        <Typography>Add New Diagnoses</Typography>
      </Grid>
    </Grid>
  );
}
