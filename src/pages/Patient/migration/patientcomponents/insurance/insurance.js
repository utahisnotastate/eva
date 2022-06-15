import React, { useState, useEffect } from "react";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Table from "../../../basestyledcomponents/Table/Table";
import style from "../../../basestyledcomponents/Table/contentAreas";
import InsuranceCard from "./InsuranceCard/insurancecard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Typography } from "@material-ui/core";
import Card from "../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../../basestyledcomponents/Card/CardBody";
import NoInsuranceListed from "./NoInsuranceListed/noinsurancelisted";
import MUIDataTable from "mui-datatables";
import { getPatientInsurance } from "../../../../api/patient.api";
import ViewInsurance from "./viewinsurance";
import Button from "../../../basestyledcomponents/Table/Button";
import Modal from "../../../basestyledcomponents/Modal/modal";
import AddInsuranceForm from "../../../Forms/Administrative/addinsuranceform";

const useStyles = makeStyles(style);
const API_URL = "http://127.0.0.1:8000/api";

export default function Insurance(props) {
  let { id } = useParams();
  const classes = useStyles();
  const patientinsurances = useSelector(
    (state) => state.patient.patientinsurances
  );
  const [insurances, setInsurances] = useState([
    {
      id: 1,
      insurance_name: "name 1",
      tradingPartnerId: "tp 1",
      group_ID: "sdfsdf",
      bin_number: "sdsdsdds",
      pcn: "ddd",
      type: "primary",
      member_id: "dfsdfsdf",
      relationship_code: "ssss",
      active: true,
      date_effective: "2020-05-24",
      date_terminated: "",
      copay_amount: "50",
    },
    {
      id: 2,
      insurance_name: "name 2",
      tradingPartnerId: "tp 2",
      group_ID: "asasd",
      bin_number: "aa",
      pcn: "2222",
      type: "secondary",
      member_id: "222222",
      relationship_code: "22222",
      active: true,
      date_effective: "2020-05-24",
      date_terminated: "",
      copay_amount: "100",
    },
    {
      id: 3,
      insurance_name: "name 3",
      tradingPartnerId: "tp 3",
      group_ID: "3333",
      bin_number: "3333",
      pcn: "3333",
      type: "333",
      member_id: "333",
      relationship_code: "333",
      active: true,
      date_effective: "333",
      date_terminated: "333",
      copay_amount: "3333",
    },
    {
      id: 4,
      insurance_name: "name 4",
      tradingPartnerId: "tp 4",
      group_ID: "4444",
      bin_number: "44",
      pcn: "4444",
      type: "444",
      member_id: "4444444",
      relationship_code: "444444",
      active: true,
      date_effective: "44444",
      date_terminated: "4444",
      copay_amount: "4444",
    },
    {
      id: 5,
      insurance_name: "name 5",
      tradingPartnerId: "5555",
      group_ID: "5555",
      bin_number: "5555",
      pcn: "5555",
      type: "secondary",
      member_id: "55555",
      relationship_code: "5555",
      active: true,
      date_effective: "",
      date_terminated: "",
      copay_amount: "444444",
    },
  ]);
  const [activeinsurance, setActiveInsurance] = useState("");

  const dispatch = useDispatch();
  const columns = [
    { label: "Company", name: "insurance_name" },
    {
      label: "Trading Partner ID",
      name: "tradingPartnerId",
      options: {
        display: "excluded",
      },
    },
    {
      label: "Group ID",
      name: "group_ID",
      options: {
        display: "excluded",
      },
    },
    {
      label: "Bin Number",
      name: "bin_number",
      options: {
        display: "excluded",
      },
    },
    {
      label: "PCN",
      name: "pcn",
      options: {
        display: "excluded",
      },
    },
    {
      label: "Member Id",
      name: "member_id",
      options: {
        display: "excluded",
      },
    },
    { label: "Type", name: "type" },

    { label: "Eligibility Began", name: "date_effective" },
    {
      name: "id",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(value);
                const insuranceselected = insurances.find(
                  (insurance) => insurance.id === value
                );
                console.log(insuranceselected);
                setActiveInsurance("");
                setActiveInsurance(insuranceselected);

                //console.log(tableMeta);
              }}
            >
              View
            </Button>
          </div>
        ),
      },
    },
  ];

  useEffect(() => {
    getPatientInsurance(id)
      .then((response) => {
        dispatch({ type: "load_insurance", insurance: response });
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <GridContainer style={{ paddingTop: 50 }} direction="column">
      <GridItem>
        <Modal buttontext={`Add Insurance`} form={AddInsuranceForm} />
      </GridItem>
      <GridItem>
        <GridContainer direction="row">
          <GridItem xs={4}>
            <MUIDataTable
              title={"Insurance"}
              data={patientinsurances}
              columns={columns}
            />
          </GridItem>
          {activeinsurance === "" ? null : (
            <GridItem xs={8}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitle}>
                    {activeinsurance.insurance_name}
                  </h4>
                  <p>Primary</p>
                </CardHeader>
                <CardBody>
                  <ViewInsurance insurance={activeinsurance} />
                </CardBody>
              </Card>
            </GridItem>
          )}
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
}

/*async function getPatientInsurances() {
        const result = await axios.get(`${API_URL}/patients/${id}/insurance/`)
        const insurances = result.data;
        return insurances;

    }*/
/*const data = [
  {
    id: 1,
    insurance_name: "name 1",
    tradingPartnerId: "tp 1",
    group_ID: "sdfsdf",
    bin_number: "sdsdsdds",
    pcn: "ddd",
    type: "primary",
    member_id: "dfsdfsdf",
    relationship_code: "ssss",
    active: true,
    date_effective: "2020-05-24",
    date_terminated: "",
    copay_amount: "50",
  },
  {
    id: 2,
    insurance_name: "name 2",
    tradingPartnerId: "tp 2",
    group_ID: "asasd",
    bin_number: "aa",
    pcn: "2222",
    type: "secondary",
    member_id: "222222",
    relationship_code: "22222",
    active: true,
    date_effective: "2020-05-24",
    date_terminated: "",
    copay_amount: "100",
  },
  {
    id: 3,
    insurance_name: "name 3",
    tradingPartnerId: "tp 3",
    group_ID: "3333",
    bin_number: "3333",
    pcn: "3333",
    type: "333",
    member_id: "333",
    relationship_code: "333",
    active: true,
    date_effective: "333",
    date_terminated: "333",
    copay_amount: "3333",
  },
  {
    id: 4,
    insurance_name: "name 4",
    tradingPartnerId: "tp 4",
    group_ID: "4444",
    bin_number: "44",
    pcn: "4444",
    type: "444",
    member_id: "4444444",
    relationship_code: "444444",
    active: true,
    date_effective: "44444",
    date_terminated: "4444",
    copay_amount: "4444",
  },
  {
    id: 5,
    insurance_name: "name 5",
    tradingPartnerId: "5555",
    group_ID: "5555",
    bin_number: "5555",
    pcn: "5555",
    type: "secondary",
    member_id: "55555",
    relationship_code: "5555",
    active: true,
    date_effective: "",
    date_terminated: "",
    copay_amount: "444444",
  },
];*/

/*
        /*if(response.length === 0) {
                dispatch({type: 'patient_has_no_insurance'});
            } else {
                dispatch({type: 'patient_has_insurance'});
                console.log(response.find(findPrimaryInsurance));
                dispatch({type: 'set_primary_insurance', primary_insurance: response.find(findPrimaryInsurance) });
                console.log(response.find(findSecondaryInsurance));
                if(response.find(findSecondaryInsurance) === false) {
                    dispatch({type: 'set_secondary_insurance', secondary_insurance: null})
                } else {
                    dispatch({type: 'set_secondary_insurance', secondary_insurance: response.find(findSecondaryInsurance) })
                }
            }


  const hasinsurance = useSelector((state) => state.patient.hasinsurance);
  const primary_insurance = useSelector(
    (state) => state.patient.primaryinsurance
  );
  const secondary_insurance = useSelector(
    (state) => state.patient.secondaryinsurance
  );
  function findPrimaryInsurance(insurance) {
    return (
      insurance.type === "primary" &&
      insurance.date_effective &&
      insurance.date_terminated === null
    );
  }

  function findSecondaryInsurance(insurance) {
    return (
      insurance.type === "secondary" &&
      insurance.date_effective &&
      insurance.date_terminated === null
    );
  }
      {hasinsurance ? (
        <GridContainer justify="center">
          <InsuranceCard
            insurance_type="primaryinsurance"
            insurance={primary_insurance}
          />
          <InsuranceCard
            insurance_type="secondaryinsurance"
            insurance={secondary_insurance}
          />
        </GridContainer>
      ) : (
        <NoInsuranceListed />
      )}
 */
