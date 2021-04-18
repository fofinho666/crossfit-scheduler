import React from "react"
import { Field, ErrorMessage } from 'formik'


const WeekDaysField = () => {
  const validateWeekDays = (value) => {
    if (!value || !value.length) {
      return "Should at least select 1 day"
    }
    return null
  }

  return <>
    <div label="checkbox-group">Job Days</div>
    <div role="group" aria-labelledby="checkbox-group">
      <label> <Field type="checkbox" name="weekDays" value="0" validate={validateWeekDays} /> Sunday </label>
      <label> <Field type="checkbox" name="weekDays" value="1" validate={validateWeekDays} /> Monday </label>
      <label> <Field type="checkbox" name="weekDays" value="2" validate={validateWeekDays} /> Tuesday </label>
      <label> <Field type="checkbox" name="weekDays" value="3" validate={validateWeekDays} /> Wednesday </label>
      <label> <Field type="checkbox" name="weekDays" value="4" validate={validateWeekDays} /> Thursday </label>
      <label> <Field type="checkbox" name="weekDays" value="5" validate={validateWeekDays} /> Friday </label>
      <label> <Field type="checkbox" name="weekDays" value="6" validate={validateWeekDays} /> Saturday </label>
    </div>
    <ErrorMessage name="weekDays" />
  </>
}

export default WeekDaysField