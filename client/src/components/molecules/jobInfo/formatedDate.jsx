import React from "react"
import { isValid, format, parseJSON } from "date-fns"
import { pt } from "date-fns/locale"
import EmptyValue from "../../atoms/emptyValue"

const FormatedDate = ({ date }) => {
  const parsedDate = parseJSON(date)

  return <Choose>
    <When condition={isValid(parsedDate)}>
      {format(parsedDate, "HH:mm:ss dd/MM/yyyy", { locale: pt })}
    </When>
    <Otherwise>
      <EmptyValue />
    </Otherwise>
  </Choose >
}

export default FormatedDate
