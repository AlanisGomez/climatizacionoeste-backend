
const router = require("express").Router();
const emailController = require("./controller");

router.post("/", emailController.sendEmail);

module.exports = router;