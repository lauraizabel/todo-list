require("dotenv").config()
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: "Session ended: no token provided"
        })
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({
                auth: false,
                message: "Authentication fail"
            })
        }

        req.userId = decoded.id
        next()
    })
}
        