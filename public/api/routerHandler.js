const emailRoute = require("./Email/routes");

module.exports = (app) => {
    app.use("/api-v1/send-email", emailRoute);
}