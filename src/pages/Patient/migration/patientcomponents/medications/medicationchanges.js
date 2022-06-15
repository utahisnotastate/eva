import React, { useEffect, useState } from "react";
import { Grid, Typography, Checkbox, TextField } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

export default function MedicationPrescriptionChanges(props) {
  const columns = [
    "Type",
    "New Strength",
    "Dosage",
    "New Frequency",
    "Reason For Change",
    "Date Changed",
    "Changed By",
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  return (
    <Grid container direction="column">
      <Grid item>
        <MUIDataTable
          title={"Prescription Changes"}
          data={data}
          columns={columns}
        />
      </Grid>
    </Grid>
  );
}
