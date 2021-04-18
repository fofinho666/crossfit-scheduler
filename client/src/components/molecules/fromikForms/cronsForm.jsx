import React from "react"
import WeekDaysField from "../formikFields/weekDaysField"
import TimeField from "../formikFields/timeField"
import Tabs from "../tabs"

const CronsFrom = () => {
  return <>
    <Tabs initialTab="Weekly Job">
      <WeekDaysField label="Weekly Job" />
      <p label="Monthly Job">ToD0</p>
    </Tabs>

    <div label="start-time-group">Starts at :</div>
    <TimeField labelledby="start-time-group" />
  </>
}

export default CronsFrom

