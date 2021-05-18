const { bookingClass } = require("./booking_class")
const { fetchCookie } = require("./fetch_cookie")

const defineFetchCookie = (agenda, name) => {
  agenda.define(name, { priority: "lowest" }, async () => {
    await fetchCookie()
  })
}

const defineBookingClass = (agenda, name) => {
  agenda.define(name, async (agenda_job) => {
    const { local, hour, daysInAdvance } = agenda_job.attrs.data
    await bookingClass(local, hour, daysInAdvance)
  })
}

module.exports = {
  defineFetchCookie,
  defineBookingClass
}