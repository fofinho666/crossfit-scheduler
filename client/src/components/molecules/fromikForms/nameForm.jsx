import React from "react"
import TextField from "../formikFields/textField"

const NameForm = () => {
  const validateName = (value) => {
    if (!value || value.trim() === "") {
      return "You must provide a valid name for the job"
    }
    else
      return null
  }
  
  return <div className="field">
    <TextField name="name" label="Job Name" validate={validateName} />
  </div>
}

export default NameForm

