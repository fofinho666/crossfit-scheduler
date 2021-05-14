import React from "react"
import { Field } from 'formik'

const NumberField = ({ name, lenght, validate }) => (
<Field name={name} as="select" validate={validate} >
  <option/>
    {Array.from(Array(lenght), (_, i) =>
      <option key={i} value={`${i}`}>{i}</option>
    )}
  </Field>
)

export default NumberField