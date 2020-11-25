const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars")

let transporter = nodemailer.createTransport({
    host: 'mail.climatizacionoeste.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

const handlebarOptions = {
    viewEngine: {
        extName: '.handlebars',
        partialsDir: 'server/views/patials',
        layoutsDir: 'server/views/layouts',
        defaultLayout: '',
    },
    viewPath: 'server/views/templates',
    extName: '.handlebars',
};
transporter.use('compile', hbs(handlebarOptions));

exports.contactForm = (email, name, message, phone) => transporter.sendMail({
    from: "'Climatización Oeste' <contacto@climatizacionoeste.com>",
    to: 'climatizacionoeste.info@gmail.com',
    subject: "Consulta y/o pedido de presupuesto",
    template: "contact",
    context: {
        user: name,
        email: email,
        msg: message,
        phone: phone,
    }
});