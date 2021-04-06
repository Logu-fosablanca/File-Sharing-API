const nodemailer = require('nodemailer');

const from = 'shareluxg33@gmail.com'

let mailTransporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    service: 'gmail',
    auth: {
        user: 'shareluxg33@gmail.com',
        pass: 'uzmienoiqpljixgg',
    }
});

let mailDetails = {
    from: ' shareluxg33@gmail.com',
    to: 'logu1331@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for fileSHaring ',
    html: '<h1>Hi</h1> '
};

mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});


