import React, { useEffect } from "react"
import { Field, useFormikContext } from 'formik'
import { sentenceCase } from "change-case";

const PuppetFields = ({ puppet }) => {
  const { setFieldValue } = useFormikContext()

  useEffect(() => { setFieldValue("puppet-form-puppet", puppet.puppet) }, [])

  return (
    <For each="field" index="idx" of={puppet.fields}>
      <label key={`label-${idx}`} htmlFor={`puppet-form-${field}`}>{sentenceCase(field)}: </label>
      <Field key={`field-${idx}`} label={`puppet-form-${field}`} name={`puppet-form-${field}`} />
    </For>
  )
}

export default PuppetFields
