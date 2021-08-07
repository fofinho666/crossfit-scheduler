import React from "react"
import JobPovider from "./atoms/jobsProducer"
import JobList from "./organisms/jobList"
import NewJobButton from "./organisms/NewJobButton"

const App = () => {


    return <div className="container is-mobile">
        <JobPovider>
            <div className="navbar has-background-primary-dark">
                <div class="navbar-start">
                    <div class="navbar-item">
                        <h1 class="title is-4 has-text-white">CrossFit Scheduler 🗓</h1>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <NewJobButton />
                    </div>
                </div>
            </div>
            <JobList />
        </JobPovider>
    </div>
}

export default App