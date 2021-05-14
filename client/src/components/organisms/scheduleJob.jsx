import React, {forceUpdate} from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { weeklyCron } from "../../services/translateToCron"
import PuppetsForm from "../molecules/fromikForms/puppetsForm"
import CronsFrom from "../molecules/fromikForms/cronsForm"
import { postJob } from "../../services/jobsApi"

const ScheduleJob = ({onSave}) => {

  const sanitazedObject = (value, filter) => (
    Object
      .entries(value)
      .reduce((acc, [key, value]) => {
        if (filter.test(key)) {
          const sanitazedKey = key.replace(filter, "")
          return {
            [sanitazedKey]: value,
            ...acc
          }
        }
        return acc
      }, {})
  )

  const genCron = (values) => {
    if (values.weekDays) {
      return weeklyCron(values.weekDays, values.hours, values.minutes, values.seconds)
    }
  }

  const validateName = (value) => {
    if (!value || value.trim()==="") {
      return "You must provide a valid name for the job"
    }
    else
    return null
  }

  const submit = (values) => {
    const puppetFields = sanitazedObject(values, /puppet-form-/)
    const interval = genCron(values)

    const payload = {
      ...puppetFields,
      name: values.name.trim(),
      interval,
    }

    postJob(payload).then(onSave)
  }

  return (<Formik initialValues={{}} onSubmit={submit} >
    {({ isValid, dirty }) => (
      <Form>
        <label htmlFor="name">Job name:</label>
        <Field name="name" validate={validateName}/>
        <ErrorMessage name="name" />

        <PuppetsForm />

        <CronsFrom />

        <button type="submit" disabled={!(isValid && dirty)}>Submit</button>
      </Form>
    )}
  </Formik>)
}

export default ScheduleJob