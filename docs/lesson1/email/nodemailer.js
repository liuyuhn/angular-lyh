var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: '163',
    auth: {
        user: 'm15609845089@163.com',
        pass: '19961228lyh'
    }
})

var mailOption = {
    from: 'm15609845089@163.com',
    to: '864048903@qq.com',
    subject: 'Sending Email using Node.js!',
    text: 'That was easy!'
};

transporter.sendMail(mailOption, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent:' + info.response);
    }
});