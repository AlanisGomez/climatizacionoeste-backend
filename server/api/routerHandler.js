const emailRoute = require("./Email/routes");

module.exports = (app) => {
    app.use("/send-email", emailRoute);
}