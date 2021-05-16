import React from "react"
import FormatedDate from "./formatedDate"
import HumanCron from "./humanCron"
import CrossfitClassInfo from "./crossfitClassInfo"
import isEqual from 'date-fns/isEqual'
import JobFailReason from "./jobFailReason"


const JobInfo = ({ job }) => {

  const jobFailed = (failedAt, lastFinishedAt) => {
    const failedDate = Date.parse(failedAt)
    const lastFinishedDate = Date.parse(lastFinishedAt)
    return isEqual(failedDate, lastFinishedDate)
  }

  return <div>
    <p>job name: {job.name}</p>
    <p>puppet: {job.puppet}</p>

    <If condition={job.puppet === "bookingClass"}>
      <CrossfitClassInfo local={job.local} hour={job.hour} daysInAdvance={job.daysInAdvance} />
    </If>
    <p>interval: <HumanCron cron={job.interval}/></p>
    <p>last run: <FormatedDate date={job.lastRunAt}/></p>
    <p>next run: <FormatedDate date={job.nextRunAt}/></p>
    <If condition={ jobFailed(job.failedAt, job.lastFinishedAt) }>
      <JobFailReason reason={job.failReason} />
    </If>
    <hr/>
  </div>
}

export default JobInfo
