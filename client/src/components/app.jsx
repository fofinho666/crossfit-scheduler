import React, { useEffect, useState } from "react"
import { getJobs } from "../services/jobsApi"
import JobList from "./molecules/jobList"
import ScheduleJob from "./organisms/scheduleJob"

const App = () => {

    const [jobs, setJobs] = useState([])

    const loadJobs = () => { getJobs().then(setJobs) }

    useEffect(() => { loadJobs() }, [])

    return <div className="container is-mobile">
    <ScheduleJob onSave={loadJobs}/>
    <JobList jobs={jobs}/>
    </div>
}

export default App