let mailer = require("../../config/mailer");

exports.sendEmail = async (req, res) => {
    try {
        mailer.contactForm(req.body.email, req.body.name, req.body.msg, req.body.phone)

        res.status(200).json({
            msg: "Welcome Onboard",
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}
