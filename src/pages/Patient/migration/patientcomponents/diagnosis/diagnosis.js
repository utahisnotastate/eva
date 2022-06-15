import React, { useEffect, useState } from "react";
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
import DiagnosisSummary from "./diagnosissummary";
import { getPatientDiagnoses } from "../../../../api/patient.api";
import { useSelector, useDispatch } from "react-redux";
import { patientdiagnoses } from "../../../../store/reducers/patient/patient.reducers";
import NewDiagnosis from "./addDiagnosis";
import ResolvedDiagnoses from "./ResolvedDiagnoses";
import DiagnosisMedications from "./diagnosismedications";
import DiagnosisRadiology from "./diagnosisRadiology";
import DiagnosisLabs from "./diagnosisLabs";
import DiagnosisReferrals from "./diagnosisReferrals";
import {
  setPatientDiagnosisActive,
  setPatientDiagnosisStatus,
} from "../../../../api/patient.api";

const useStyles = makeStyles(style);

export default function Diagnosis(props) {
  const classes = useStyles();
  let { id } = useParams();
  const dispatch = useDispatch();
  const diagnoses = useSelector((state) => state.patient.patientdiagnoses);
  const activediagnoses = diagnoses.filter(
    (diagnosis) => diagnosis.status !== "resolved"
  );
  const resolveddiagnoses = diagnoses.filter(
    (diagnosis) =>
      diagnosis.status === "inactive" || diagnosis.status === "resolved"
  );
  //const [diagnoses, setDiagnoses] = useState(["Flu", "Asthma"]);
  const columnheaders = [
    "Type",
    "Status",
    "Date Opened",
    "Assigned to",
    "Last Updated",
    "Actions",
  ];
  const fillButtons = [{ color: "success", icon: Person }].map((prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const loadDiagnoses = () => {
    getPatientDiagnoses(id).then((response) => {
      console.log("Diagnosis response is " + JSON.stringify(response));
      dispatch({ type: "load_all_diagnoses", diagnoses: response });
    });
  };
  const setDiagnosisActive = (diagnosisId) => {
    setPatientDiagnosisActive(id, diagnosisId).then((response) => {
      console.log(
        "Response after diagnosis set active is " + JSON.stringify(response)
      );
      loadDiagnoses();
    });
  };

  const setDiagnosisStatus = (diagnosisId, status) => {
    setPatientDiagnosisStatus(id, diagnosisId, status).then((response) => {
      console.log(
        "response after diagnosis status changed " + JSON.stringify(response)
      );
      loadDiagnoses();
    });
  };

  useEffect(() => {
    getPatientDiagnoses(id).then((response) => {
      console.log("Diagnosis response is " + JSON.stringify(response));
      dispatch({ type: "load_all_diagnoses", diagnoses: response });
    });
  }, [id]);
  return (
    <GridContainer direction="column" justify="center">
      <GridItem xs={12} sm={10}>
        <NewDiagnosis patientId={id} loadDiagnoses={loadDiagnoses} />
      </GridItem>

      {activediagnoses.length > 0 ? (
        activediagnoses.map((diagnosis) => (
          <GridItem xs={12} sm={10}>
            <Typography>{`${diagnosis.diagnosis_icd_code} ${diagnosis.diagnosis_description}`}</Typography>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Summary",
                  tabIcon: Person,
                  tabContent: (
                    <DiagnosisSummary
                      diagnosisId={diagnosis.id}
                      setDiagnosisStatus={setDiagnosisStatus}
                    />
                  ),
                },
                {
                  tabName: "Medications",
                  tabIcon: Person,
                  tabContent: <DiagnosisMedications />,
                },
                {
                  tabName: "Radiology History",
                  tabIcon: Person,
                  tabContent: <DiagnosisRadiology />,
                },
                {
                  tabName: "Lab History",
                  tabIcon: Person,
                  tabContent: <DiagnosisLabs />,
                },
                {
                  tabName: "Referral History",
                  tabIcon: Person,
                  tabContent: <DiagnosisReferrals />,
                },
              ]}
            />
          </GridItem>
        ))
      ) : (
        <Typography>
          No diagnoses has been listed for the patient. Please enter any.
        </Typography>
      )}
      <GridItem xs={12} sm={10}>
        <ResolvedDiagnoses
          resolveddiagnoses={resolveddiagnoses}
          setDiagnosisActive={setDiagnosisActive}
        />
      </GridItem>
    </GridContainer>
  );
}
