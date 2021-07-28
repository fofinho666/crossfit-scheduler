import React from "react"
import { Field, ErrorMessage, useField } from 'formik'


const WeekDaysField = () => {

  const [, weekDaysMeta] = useField("weekDays")

  const validateWeekDays = (value) => {
    if (!value || !value.length) {
      return "Should at least select 1 day"
    }
    return null
  }

  const labelClass = (weekDaysMeta.touched && weekDaysMeta.error)
    ? "checkbox has-text-danger"
    : "checkbox"

  const WeekDaysError = () => {
    if (weekDaysMeta.touched && weekDaysMeta.error) {
      return <ErrorMessage className="help is-danger" name="weekDays" component="p" />
    }
    return <p className="help">&nbsp;</p>
  }

  return <>
    <div className="label" label="checkbox-group">Job Days</div>
    <div className="columns is-mobile is-multiline is-centered" role="group" aria-labelledby="checkbox-group">
      <div className="column is-narrow"><label className={labelClass}> <Field type="checkbox" name="weekDays" value="1" validate={validateWeekDays} /> Monday </label></div>
      <div className="column is-narrow"><label className={labelClass}> <Field type="checkbox" name="weekDays" value="2" validate={validateWeekDays} /> Tuesday </label></div>
      <div className="column is-narrow"><label className={labelClass}> <Field type="checkbox" name="weekDays" value="3" validate={validateWeekDays} /> Wednesday </label></div>
      <div className="column is-narrow"><label className={labelClass}> <Field type="checkbox" name="weekDays" value="4" validate={validateWeekDays} /> Thursday </label></div>
      <div className="column is-narrow"><label className={labelClass}> <Field type="checkbox" name="weekDays" value="5" validate={validateWeekDays} /> Friday </label></div>
      <div className="column is-narrow"><label className={labelClass}> <Field type="checkbox" name="weekDays" value="6" validate={validateWeekDays} /> Saturday </label></div>
      <div className="column is-narrow"><label className={labelClass}> <Field type="checkbox" name="weekDays" value="0" validate={validateWeekDays} /> Sunday </label></div>
    </div>
    <WeekDaysError />
  </>
}

export default WeekDaysField