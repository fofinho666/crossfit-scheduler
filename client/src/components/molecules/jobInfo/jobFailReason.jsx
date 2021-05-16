import React from "react"


const JobFailReason = ({ reason }) => <>
  <p style={{ backgroundColor: "red" }}>failed:</p>
  <p style={{ whiteSpace: "pre-line" }} >{reason}</p>
</>


export default JobFailReason
