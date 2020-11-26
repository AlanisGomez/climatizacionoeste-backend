const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars")

let transporter = nodemailer.createTransport({
    host: 'mail.climatizacionoeste.com',
    port: 465,
    secure: true,
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
        partialsDir: 'public/views/patials',
        layoutsDir: 'public/views/layouts',
        defaultLayout: '',
    },
    viewPath: 'public/views/templates',
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