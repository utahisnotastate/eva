//IGNORE THIS FILE
import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function DiagnosisSummary(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Medications</Typography>
      </Grid>
      <Grid item xs={12}>
        <List component="div" disablePadding>
          <Typography>Current Medications</Typography>
          <ListItem>Medication Name</ListItem>
        </List>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
