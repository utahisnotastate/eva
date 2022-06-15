import React, { useEffect, useState } from "react";
import axios from "axios";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Table from "../../../basestyledcomponents/Table/Table";
import style from "../../../basestyledcomponents/Table/contentAreas";
import Person from "@material-ui/icons/Person";
import Button from "../../../basestyledcomponents/Table/Button";
import { Paper, Typography } from "@material-ui/core";
import CustomTabs from "../../../basestyledcomponents/CustomTabs/CustomTabs";
import MUIDataTable from "mui-datatables";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../../basestyledcomponents/Modal/modal";
import AddNewMedicationForm from "../../../Forms/Clinical/Patient/addNewMedication";
import NewMedication from "../../../basestyledcomponents/MedicationSearch/medicationsearch";
import {
  getPatientMedications,
  addNewPatientMedication,
  getPatientMedicationSummary,
} from "../../../../api/patient.api";
import MedicationSummary from "./medicationsummary";
import MedicationPrescriptionHistory from "./medicationprescriptionhistory";
import MedicationPrescriptionChanges from "./medicationchanges";
import MedicationAuthorizations from "./medicationauthorizations";
import MedicationDiagnoses from "./medicationdiagnoses";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  addmedicationcontainer: {},
}));
const API_URL = "http://127.0.0.1:8000/api";

//https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?sf=RXCUIS&df=DISPLAY_NAME,STRENGTHS_AND_FORMS,RXCUIS (+ "terms" parameter)

function AddNewMedication(props) {
  return <Modal buttontext={`Add Medication`} form={AddNewMedicationForm} />;
}

export default function Medications(props) {
  const classes = useStyles();
  let { id } = useParams();
  const dispatch = useDispatch();

  const medications = useSelector((state) => state.patient.patientmedications);
  const [activemedicationId, setActiveMedicationId] = useState("");
  const [prescription, setPrescription] = useState("");
  const [prescriptionlog, setPrescriptionLog] = useState([]);
  const [authorizations, setAuthorizations] = useState([]);
  const [prescriptionhistory, setPrescriptionHistory] = useState([]);
  const [changes, setChanges] = useState([]);

  const loadMedicationDetails = (medicationId) => {
    console.log("load details for " + medicationId);
    getPatientMedicationSummary(id, medicationId).then((response) => {
      console.log("Summary response is " + JSON.stringify(response));
      setPrescription(response);
      setActiveMedicationId(medicationId);
    });
    //setActiveMedicationId(medicationId);
  };

  const [options, setOptions] = useState({
    searchOpen: false,
    serverSide: false,
    textLabels: {
      body: {
        noMatch: "SORRY NO MATCHES FOUND",
      },
    },
    elevation: 0,
    searchPlaceholder: "Search by medication name",
    print: false,
    filter: false,
    download: false,
    //customToolbar: AddNewMedication,
    selectableRows: "none",
    viewColumns: false,
  });
  const columns = [
    {
      name: "active",
      label: "Currently Taking",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>{value ? <DoneOutlineIcon /> : <CancelIcon />}</div>
        ),
      },
    },
    {
      name: "name",
      label: "Medication",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "strength",
      label: "Dosage",
    },
    {
      name: "frequency",
      label: "Frequency",
    },

    {
      name: "prescribed_by",
      label: "Prescribed by",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "id",
      label: "View Details",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => loadMedicationDetails(value)}
            >
              View Details for {value}
            </Button>
          </div>
        ),
      },
    },
  ];

  const addMedication = (medication) => {
    console.log(medication);
    addNewPatientMedication(id, medication).then((response) => {
      console.log(
        "new medication creation response is " + JSON.stringify(response)
      );
      getPatientMedications(id).then((response) => {
        dispatch({ type: "load_all_medications", medications: response });
      });
    });
  };
  useEffect(() => {
    getPatientMedications(id).then((response) => {
      console.log(
        "patient medications response is " + JSON.stringify(response)
      );
      dispatch({ type: "load_all_medications", medications: response });
    });
  }, [id]);

  return (
    <GridContainer direction={`column`} justify="center">
      <GridItem xs={12} sm={10}>
        <NewMedication addMedication={addMedication} />
      </GridItem>
      <GridItem xs={12} sm={10}>
        <MUIDataTable
          title={`Medications`}
          data={medications}
          columns={columns}
          options={options}
        />
      </GridItem>
      <GridItem xs={12} sm={10}>
        {activemedicationId === "" ? null : (
          <CustomTabs
            headerColor={`primary`}
            title={`${prescription.name}`}
            tabs={[
              {
                tabName: "Summary",
                tabContent: (
                  <MedicationSummary patient={id} summary={prescription} />
                ),
              },
              {
                tabName: "Prescription Log",
                tabContent: (
                  <MedicationPrescriptionHistory
                    patient={id}
                    prescription={prescription}
                  />
                ),
              },
              {
                tabName: "Authorizations",
                tabContent: (
                  <MedicationAuthorizations
                    patient={id}
                    prescription={prescription}
                  />
                ),
              },
            ]}
          />
        )}
      </GridItem>
    </GridContainer>
  );
}

/*
              {
                tabName: "Changes",
                tabContent: <MedicationPrescriptionChanges />,
              },

                            {
                tabName: "Diagnoses",
                tabContent: <MedicationDiagnoses />,
              },
 */
