import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Typography } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PresentUnpresentAllergy from "./presentunpresentallergy/presentunpresentallergy";
import React from "react";

<div style={{ margin: 20 }}>
  <Grid container className={classes.root} alignItems="flex-start">
    <div>
      <Paper className={classes.areaicon} square>
        <AssignmentIcon />
        <Typography className={classes.areatitletext} variant="subtitle2">
          Drug Allergies
        </Typography>
      </Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square>
        <MUIDataTable
          data={drugallergies}
          options={options}
          columns={drugallergycolumns}
        />
      </Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square>
        <AssignmentIcon />
        <Typography className={classes.areatitletext} variant="subtitle2">
          Food Allergies
        </Typography>
      </Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square></Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square>
        <AssignmentIcon />
        <Typography className={classes.areatitletext} variant="subtitle2">
          Insect Allergies
        </Typography>
      </Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square></Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square>
        <AssignmentIcon />
        <Typography className={classes.areatitletext} variant="subtitle2">
          Latex Allergy
        </Typography>
      </Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square>
        <PresentUnpresentAllergy allergy={`Latex`} status={latexstatus} />
      </Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square>
        <AssignmentIcon />
        <Typography className={classes.areatitletext} variant="subtitle2">
          Pet Allergies
        </Typography>
      </Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square></Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square>
        <AssignmentIcon />
        <Typography className={classes.areatitletext} variant="subtitle2">
          Pollen Allergy
        </Typography>
      </Paper>
    </div>
    <div>
      <Paper className={classes.areaicon} square>
        <PresentUnpresentAllergy allergy={`Pollen`} status={pollenstatus} />
      </Paper>
    </div>
  </Grid>
</div>;
