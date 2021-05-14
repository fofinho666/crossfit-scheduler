import React from "react"
import FormatedDate from "./formatedDate"
import HumanCron from "./humanCron"
import CrossfitClassInfo from "./crossfitClassInfo"


const JobInfo = ({ job }) => {
  return <div>
    <p>job name: {job.name}</p>
    <p>puppet: {job.puppet}</p>

    <If condition={job.puppet === "bookingClass"}>
      <CrossfitClassInfo local={job.local} hour={job.hour} daysInAdvance={job.daysInAdvance} />
    </If>
    <p>interval: <HumanCron cron={job.interval}/></p>
    <p>last run: <FormatedDate date={job.lastRunAt}/></p>
    <p>next run: <FormatedDate date={job.nextRunAt}/></p>
    <hr/>
  </div>
}

export default JobInfo
