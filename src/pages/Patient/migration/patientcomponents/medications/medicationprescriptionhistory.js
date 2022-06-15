import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Checkbox,
  TextField,
  Button,
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import NewMedication from "../../../basestyledcomponents/MedicationSearch/medicationsearch";
import {
  addNewMedicationPrescription,
  getMedicationPrescriptionHistory,
  stopPrescribingMedication,
} from "../../../../api/patient.api";

const useStyles = makeStyles({
  addmedicationcontainer: {
    border: "2px solid black",
  },
});

export default function MedicationPrescriptionHistory(props) {
  const [medicationchanges, setMedicationChanges] = useState("");
  const [medicationrefills, setMedicationRefills] = useState(0);
  const [prescriptionhistory, setPrescriptionHistory] = useState([]);
  const [reasonstopped, setReasonStopped] = useState("");
  const classes = useStyles();
  const columns = [
    { label: "Dosage", name: "strength" },
    { label: "Frequency", name: "frequency" },
    { label: "Refills", name: "refills" },
    { label: "Written On", name: "written_on" },
  ];
  const options = {
    elevation: 0,
  };
  const handleRadioSelect = (event) => {
    console.log(event.target.value);
    setMedicationChanges(event.target.value);
  };

  const loadPrescriptionHistory = (patient, prescriptionId) => {
    getMedicationPrescriptionHistory(patient, prescriptionId).then(
      (response) => {
        console.log(
          "Prescription history response is " + JSON.stringify(response)
        );
        setPrescriptionHistory(response.prescriptions);
      }
    );
  };

  const addMedicationWithNoChanges = (medication) => {
    const newprescription = {
      strength: medication.strength,
      frequency: medication.frequency,
      name: medication.name,
      medicationId: props.prescription.id,
      refills: medication.refills,
    };
    console.log(newprescription);
    addNewMedicationPrescription(
      props.prescription.patient,
      newprescription
    ).then((response) => {
      console.log("new prescription is " + JSON.stringify(response));
      loadPrescriptionHistory(
        props.prescription.patient,
        props.prescription.id
      );
    });
  };

  const stopMedication = () => {
    console.log(props.prescription.patient);
    console.log(props.prescription.id);
    console.log({
      name: props.prescription.name,
      reason_stopped: reasonstopped,
    });
    stopPrescribingMedication(
      props.prescription.patient,
      props.prescription.id,
      {
        name: props.prescription.name,
        reason_stopped: reasonstopped,
      }
    ).then((response) => {
      loadPrescriptionHistory(
        props.prescription.patient,
        props.prescription.id
      );
    });
  };

  const addMedication = (medication) => {
    console.log(medication);
  };
  useEffect(() => {
    getMedicationPrescriptionHistory(
      props.prescription.patient,
      props.prescription.id
    ).then((response) => {
      console.log(
        "Prescription history response is " +
          JSON.stringify(response.prescriptions)
      );
      setPrescriptionHistory(response.prescriptions);
    });
  }, [props.prescription.id]);
  return (
    <Grid container direction="column">
      <Grid item>
        <MUIDataTable
          title={"Prescriptions Written"}
          data={prescriptionhistory}
          columns={columns}
          options={options}
        />
      </Grid>
      <Grid item>
        <Typography>
          Please select one of the following details which reflects the
          prescription being written
        </Typography>
      </Grid>
      <Grid item>
        <div onChange={handleRadioSelect}>
          <input type="radio" value="no_changes" name="gender" /> No Changes
          <input type="radio" value="medication_changes" name="gender" />{" "}
          Medication Changes
          <input type="radio" value="stop_medication" name="gender" /> Stop
          Medication
        </div>
      </Grid>
      {medicationchanges === "no_changes" ? (
        <Grid item>
          <Grid
            container
            direction="column"
            className={classes.addmedicationcontainer}
          >
            <Grid item>
              <Typography>
                Log New Prescription Written(No changes to current prescription)
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction={`row`}
                justify={`space-around`}
                alignItems={`center`}
              >
                <Grid item>
                  <Typography>{`${props.prescription.name} ${props.prescription.strength} ${props.prescription.frequency}`}</Typography>
                </Grid>
                <Grid item>
                  {" "}
                  <Typography>refills</Typography>
                  <input
                    type="number"
                    onChange={(event) =>
                      setMedicationRefills(event.target.value)
                    }
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() =>
                      addMedicationWithNoChanges({
                        name: props.prescription.name,
                        strength: props.prescription.strength,
                        frequency: props.prescription.frequency,
                        refills: medicationrefills,
                      })
                    }
                  >
                    Log New prescription written{" "}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      ) : null}
      {medicationchanges === "medication_changes" ? (
        <Grid item>
          <Grid
            container
            direction="column"
            className={classes.addmedicationcontainer}
          >
            <Grid item>
              <Typography>Log Prescription Change</Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction={`row`}
                justify={`space-around`}
                alignItems={`center`}
              >
                <Grid item>
                  <Typography>{`${props.prescription.name} ${props.prescription.strength} ${props.prescription.frequency}`}</Typography>
                </Grid>
                <Grid item>
                  {" "}
                  <Typography>refills</Typography>
                  <input type="number" />
                </Grid>
                <Grid item>
                  <Button variant="contained">Log Prescription Changes </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      ) : null}
      {medicationchanges === "stop_medication" ? (
        <Grid item>
          <Grid
            container
            direction="column"
            className={classes.addmedicationcontainer}
          >
            <Grid item>
              <Typography>Log Prescription Stop</Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction={`row`}
                justify={`space-around`}
                alignItems={`center`}
              >
                <Grid item>
                  <Typography>{`${props.prescription.name} ${props.prescription.strength} ${props.prescription.frequency}`}</Typography>
                </Grid>
                <Grid item>
                  <input
                    type="textarea"
                    placeholder={`Enter reason medication was stopped`}
                    onChange={(event) => setReasonStopped(event.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() =>
                      stopMedication(props.prescription.id, {
                        name: props.prescription.name,
                        reason_stopped: reasonstopped,
                      })
                    }
                  >
                    Log Prescription Stop{" "}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}
/*
        <NewMedication
          addMedication={addMedication}
          label={`Prescription details`}
        />
 */
