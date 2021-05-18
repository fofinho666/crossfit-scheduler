const router = require("express").Router()
const { GetAll, GetById } = require("../finders/jobs")
const { JobValue, JobValues } = require("../values/jobs")
const { defineFetchCookie, defineBookingClass } = require("../puppets/agenda_definitions")

router
    .get("/", (req, res) => {
        GetAll()
            .then((jobs) => JobValues(jobs))
            .then((jobValues) => res.send(jobValues))

    })
    .post("/", async (req, res) => {
        const {puppet, name, interval, local, hour, daysInAdvance} = req.body
        const agenda = req.app.get("agenda")
        const options = {timezone: "Europe/Lisbon"}

        switch (puppet) {
        case "fetchCookie":
            defineFetchCookie(agenda, name)

            agenda.every(interval || "one time today", name, {puppet}, options)
                .then((agenda_job) => GetById(agenda_job.attrs._id))
                .then((job) => JobValue(job))
                .then((jobValue) => res.send(jobValue))
            break
        case "bookingClass":
            defineBookingClass(agenda, name)

            agenda.every(interval || "one time today", name, { local, hour, daysInAdvance, puppet }, options)
                .then((agenda_job) => GetById(agenda_job.attrs._id))
                .then((job) => JobValue(job))
                .then((jobValue) => res.send(jobValue))
            break
        default:
            res.sendStatus(400)
        }
    })


module.exports = router