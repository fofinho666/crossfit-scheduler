export const getJobs = () => fetch("/api/jobs").then(res => res.json())

export const postJob = (payload) => fetch("/api/jobs", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  }, body: JSON.stringify(payload)
})
