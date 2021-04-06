const nodemailer = require('nodemailer');
const config = require('config.json');

const from = 'shareluxg33@gmail.com';
const to= 'logu.r19@iiits.in';
const subject= ' Hey Sending mail Using Google SMTP Server';



async function sendMAil({from,to ,subject}){
    var smtpconfig = {
        host: 'smtp.google.com',
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'shareluxg33@gmail.com', // generated ethereal user
            pass: 'uzmienoiqpljixgg', // generated ethereal password
        },
    }
    const transporter = nodemailer.createTransport(smtpconfig);

    const mailOptions=({
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line  
        html: '<h1> Testing SMTP Server </h1>', // html body
    });
   
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);

        else
            console.log(info);
    });
}



sendMAil(from,to, subject)


