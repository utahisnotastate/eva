import React, { useEffect } from "react";
import axios from "axios";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MUIDataTable from "mui-datatables";

export default function ViewInsurance(props) {
  const {
    register,
    control,
    handleSubmit,
    errors,
    watch,
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const watchmemberId = watch("member_id");
  let { id } = useParams();
  const onSubmit = (data) => {
    console.log(data);
  };
  const style = {
    formrow: {
      display: "flex",
      justifyContent: "space-between",
      padding: 10,
    },
    textwidth: {
      width: "100%",
    },
  };

  useEffect(() => {
    const insurance = props.insurance;
    for (const field in insurance) {
      if (insurance.hasOwnProperty(field)) {
        setValue(field, insurance[field]);
      }
    }
    /*setValue("id", props.insurance.id);
    setValue("insurance_name", props.insurance.insurance_name);
    setValue("member_id", props.insurance.member_id);*/
  }, [props.insurance]);

  const label = 2;
  const field = 10;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <GridContainer direction="column">
            <GridItem>
              <GridContainer direction="row">
                <GridItem>
                  <Typography>Terminate Insurance</Typography>
                </GridItem>
                <GridItem>
                  <TextField
                    type="date"
                    name="date_terminated"
                    defaultValue={props.insurance.date_terminated}
                    inputRef={register}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <GridContainer direction="row">
                <GridItem>
                  <Typography>Insurance Type:</Typography>
                </GridItem>
                <GridItem>
                  <div>
                    <select name="type" ref={register}>
                      <option value="primary">primary</option>
                      <option value="secondary">secondary</option>
                    </select>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        <div style={style.formrow}>
          <Typography>Insurance Name:</Typography>
          <TextField
            name={`insurance_name`}
            fullWidth
            defaultValue={props.insurance.insurance_name}
            inputRef={register}
          />
        </div>
        <div style={style.formrow}>
          <Typography>Member Number:</Typography>
          <TextField
            name={`member_id`}
            fullWidth
            defaultValue={props.insurance.member_id}
            inputRef={register}
          />
        </div>
        <div style={style.formrow}>
          <Typography>Group Number:</Typography>
          <TextField
            inputRef={register}
            fullWidth
            name="group_ID"
            defaultValue={props.insurance.group_ID}
          />
        </div>
        <div style={style.formrow}>
          <Typography>Bin Number:</Typography>
          <TextField
            inputRef={register}
            fullWidth
            name="bin_number"
            defaultValue={props.insurance.bin_number}
          />
        </div>
        <div style={style.formrow}>
          <Typography>PCN Number:</Typography>
          <TextField
            inputRef={register}
            fullWidth
            name="pcn"
            defaultValue={props.insurance.pcn}
          />
        </div>
        <div style={style.formrow}>
          <Typography>Date coverage began:</Typography>
          <TextField
            inputRef={register}
            fullWidth
            name="date_effective"
            defaultValue={props.insurance.date_effective}
          />
        </div>
        <div style={style.formrow}>
          <Typography>Copay Amount:</Typography>
          <TextField
            inputRef={register}
            fullWidth
            name="copay_amount"
            defaultValue={props.insurance.copay_amount}
          />
        </div>
      </div>
      <div>
        <MUIDataTable
          title={`Insurance eligibility logs`}
          data={[["1", "2", "3", "4", "5"]]}
          columns={[
            { label: "date" },
            { label: "date2" },
            { label: "date3" },
            { label: "date4" },
            { label: "date5" },
          ]}
        />
      </div>
      <div>
        <input type="submit" value="Save" />
      </div>
    </form>
  );
}

/*
{

          <Controller
            style={style.textwidth}
            label={`Enter Insurance Name`}
            name="insurance_name"
            defaultValue={props.insurance.insurance_name}
            as={<TextField inputRef={props.ref} />}
            control={control}
          />
    defaultValues: {
      type: props.insurance.type,
      insurance_name: props.insurance.insurance_name,
      member_id: props.insurance.member_id,
      group_ID: props.insurance.group_ID,
      bin_number: props.insurance.bin_number,
      pcn: props.insurance.pcn,
      date_effective: props.insurance.date_effective,
      copay_amount: props.insurance.copay_amount,
    },
  }
 */
