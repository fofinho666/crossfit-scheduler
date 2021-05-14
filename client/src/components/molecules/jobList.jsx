import React from "react"
import JobInfo from "./jobInfo/jobInfo"

const JobList = ({ jobs }) => <>
    <For each="job" of={jobs}>
        <JobInfo key={job.id} job={job} />
    </For>
</>

export default JobList
