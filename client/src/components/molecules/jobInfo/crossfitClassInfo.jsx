import React from "react"
import EmptyValue from "../../atoms/emptyValue"
import ErrorValue from "../../atoms/errorValue"


const CrossfitClassInfo = ({ local, hour, daysInAdvance }) => {
  const LocalValue = () => local ? local : <EmptyValue />
  const HourValue = () => hour ? hour : <EmptyValue />
  const DaysInAdvanceValue = () => {
    if (daysInAdvance == 1) {
      return "1 day"
    } else if (daysInAdvance > 1 || daysInAdvance == 0) {
      return `${daysInAdvance} days`
    }
    else if (daysInAdvance < 0) {
      return <ErrorValue />
    }
    return <EmptyValue />
  }

  return <div>
    class info:
    <p>class local: <LocalValue /></p>
    <p>class hour: <HourValue /></p>
    <p>scheduled in advance: <DaysInAdvanceValue /></p>
  </div>
}

export default CrossfitClassInfo
