import React from "react"
import { ErrorMessage, useField } from 'formik'
import NumberField from "./numberField"

const TimeField = ({ labelledby }) => {

  const [, hoursMeta] = useField("hours")
  const [, minutesMeta] = useField("minutes")
  const [, secondsMeta] = useField("seconds")

  const validateHours = (value) => {
    if (!value) {
      return "Hours are requeired"
    } else if (!/^(2[0-3]|1[0-9]|[0-9])$/.test(value)){
      return "Invalid hours"
    }
    return null
  }

  const validateMinutes = (value) => {
    if (!value) {
      return "Minutes are requeired"
    } else if (!/^[1-5]?[0-9]$/.test(value)){
      return "Invalid hours"
    }
    return null
  }

  const validateSeconds = (value) => {
    if (!value) {
      return "Seconds are requeired"
    } else if (!/^[1-5]?[0-9]$/.test(value)){
      return "Invalid hours"
    }
    return null
  }

  const TimeError = () => {
    if (hoursMeta.error) {
      return <ErrorMessage component="span" name="hours" />
    }
    else if (minutesMeta.error) {
      return <ErrorMessage component="span" name="minutes" />
    }
    else if (secondsMeta.error) {
      return <ErrorMessage component="span" name="seconds" />
    }
    return null
  }

  return (<div role="group" aria-labelledby={labelledby}>
    <NumberField name="hours" lenght={24} validate={validateHours}/>
    <span>:</span>
    <NumberField name="minutes" lenght={60} validate={validateMinutes}/>
    <span>:</span>
    <NumberField name="seconds" lenght={60} validate={validateSeconds}/>
    <TimeError />
  </div>)
}

export default TimeField