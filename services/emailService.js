const nodemailer = require("nodemailer");
module.exports =  ({ from, to, subject, text, html }) => {
    let transporter = nodemailer.createTransport(
        {host : 'smtp.gmail.com',
        service: 'gmail',
        auth:
         {
        user: 'shareluxg33@gmail.com',
        pass: 'uzmienoiqpljixgg',}
    });
    const mailOptions = {
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    }  

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error Occurs');
            console.log(err)
        } else {
            console.log('Email sent successfully');
        }
    });

}