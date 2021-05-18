const { Agenda } = require("agenda")
const { GetAll } = require("./finders/jobs")
const { defineFetchCookie, defineBookingClass } = require("./puppets/agenda_definitions")


module.exports = async (mongoClient) => {
    const agenda = new Agenda({ mongo: mongoClient.db("agenda") })

    await agenda.start()
        .then(() => GetAll())
        .then(jobs => jobs.map((job) => {
            switch (job.data.puppet) {
                case "fetchCookie":
                    defineFetchCookie(agenda, job.name)
                    break
                case "bookingClass":
                    defineBookingClass(agenda, job.name)
                    break
            }
        }))
    return agenda
}