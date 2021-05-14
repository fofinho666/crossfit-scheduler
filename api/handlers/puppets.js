const router = require("express").Router()

router
    .get("/", async (req, res) => {
        res.send([
            {name: "Fetch Cookie", puppet: "fetchCookie", fields: []},
            {
                name: "Booking Class",
                puppet: "bookingClass",
                default: true,
                fields: ["local", "hour", "daysInAdvance"]},
        ])
    })


module.exports = router