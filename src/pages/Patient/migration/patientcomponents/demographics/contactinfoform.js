import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useForm,
  Controller,
  useFormContext,
  useFieldArray,
} from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import { RHFInput } from "react-hook-form-input";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 15,
  },
  add_contact_method: {
    display: "flex",
    flexDirection: "row",
  },
  labeltext: {
    color: "#000000",
  },
  inputfield: {
    padding: 20,
  },
  options: {
    width: 200,
    padding: 20,
  },
});

export default function ContactForm(props) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    control,
  } = useFormContext();
  let { id } = useParams();
  const classes = useStyles();
  const patient_contact_methods = useSelector(
    (state) => state.patient.patient_contact_methods
  );
  const new_type = watch("new_type");
  const new_number = watch("new_number");
  const new_special_instructions = watch("new_special_instructions");

  const resetNewContactFormInput = () => {
    setValue("new_type", "");
    setValue("new_number", "");
    setValue("new_special_instructions", "");
  };

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "patient_contact_methods",
    }
  );
  useEffect(() => {
    const updateContactMethods = async () => {
      append(patient_contact_methods);
    };
    updateContactMethods();
  }, [id, patient_contact_methods]);
  return (
    <GridContainer className={classes.root}>
      {fields.length > 0 ? (
        fields.map((field, index) => (
          <div key={index} style={{ display: "flex" }}>
            <GridItem>
              <div>
                <label>
                  <Typography className={classes.labeltext} variant="body1">
                    Type:
                  </Typography>
                </label>
                <select
                  name={`patient_contact_methods[${index}].type`}
                  ref={register()}
                  defaultValue={field.type}
                >
                  <option value="cell">cell</option>
                  <option value="home">home</option>
                  <option value="work">work</option>
                </select>
              </div>
            </GridItem>
            <GridItem>
              <TextField
                name={`patient_contact_methods[${index}].number`}
                inputRef={register()}
                type="tel"
                defaultValue={field.number}
              />
            </GridItem>
            <GridItem>
              <TextField
                name={`patient_contact_methods[${index}].special_instructions`}
                inputRef={register()}
                type="textarea"
                defaultValue={field.special_instructions}
              />
            </GridItem>
            <GridItem>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  console.log("delete!");
                  remove(index);
                }}
              >
                X
              </Button>
            </GridItem>
          </div>
        ))
      ) : (
        <Typography>0</Typography>
      )}
      <GridItem className={classes.add_contact_method}>
        <GridContainer>
          <GridItem>
            <Typography>Add New Contact Method</Typography>
          </GridItem>
          <GridItem>
            <div>
              <label>
                <Typography className={classes.labeltext} variant="body1">
                  Type:
                </Typography>
              </label>
              <select name={`new_type`} ref={register} defaultValue={``}>
                <option value="cell">cell</option>
                <option value="home">home</option>
                <option value="work">work</option>
              </select>
            </div>
          </GridItem>
          <GridItem>
            <TextField
              name={`new_number`}
              inputRef={register}
              type="tel"
              defaultValue={``}
            />
          </GridItem>
          <GridItem>
            <TextField
              name={`new_special_instructions`}
              inputRef={register}
              type="textarea"
              defaultValue={``}
            />
          </GridItem>
          <GridItem>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const values = getValues();
                const phone_prefix = "+1";
                console.log(phone_prefix.concat("", new_number));
                append({
                  type: new_type,
                  number: phone_prefix.concat("", new_number),
                  special_instructions: new_special_instructions,
                });
                resetNewContactFormInput();
              }}
            >
              Add
            </Button>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
}
/*
  const [formfields, setFormFields] = useState([
    { label: "Type", name: "type" },
    { label: "Number", name: "number" },
    {
      label: "Special Instructions",
      name: "special_instructions",
      component: "TextField",
    },
  ]);
  //const values = getValues();
  console.log([]);
<TextField
          name={`new_special_instructions`}
          ref={register()}
          type="textarea"
          defaultValue={``}
        />
        <TextField
          name={`new_special_instructions`}
          ref={register()}
          type="textarea"
          defaultValue={``}
        />
 */

/*
<div>
                <label>
                  <Typography className={classes.labeltext} variant="body1">
                    When To Call:
                  </Typography>
                </label>
                <select name="when_to_call" ref={register}>
                  <option value="morning">morning</option>
                  <option value="daytime">daytime</option>
                  <option value="evening">evening</option>
                  <option value="anytime">anytime</option>
                </select>
              </div>
 */
/*
<GridItem>
        <div>
          <label>
            <Typography className={classes.labeltext} variant="body1">
              Type:
            </Typography>
          </label>
          <select name="type" ref={register}>
            <option value="cell">cell</option>
            <option value="home">home</option>
            <option value="work">work</option>
          </select>
        </div>
      </GridItem>
      <GridItem>
        <div>
          <label>
            <Typography className={classes.labeltext} variant="body1">
              When To Call:
            </Typography>
          </label>
          <select name="when_to_call" ref={register}>
            <option value="morning">morning</option>
            <option value="daytime">daytime</option>
            <option value="evening">evening</option>
            <option value="anytime">anytime</option>
          </select>
        </div>
      </GridItem>
 */
/*
{formfields
        .filter(
          (field) => field.label !== "Type" && field.label !== "When To Call"
        )
        .map((Formfield) => (
          <GridItem key={Formfield.label}>
            <div>
              <Controller
                name={Formfield.name}
                as={
                  <TextField
                    label={Formfield.label}
                    className={classes.inputfield}
                  />
                }
                control={control}
              />
            </div>
          </GridItem>
        ))}
 */
/*
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/contactinformation/`);
            console.log(result);
            reset({
                    type: result.data[0].type,
                    number: result.data[0].number,
                    when_to_call: result.data[0].when_to_call,
                    special_instructions: result.data[0].special_instructions,
                }
            );

        };
        fetchData().catch(error => console.log(error));
    }, []);
 */
