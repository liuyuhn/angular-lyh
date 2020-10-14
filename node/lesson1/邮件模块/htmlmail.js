var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: '163',
  auth: {
    user: 'm15609845089@163.com',
    pass: '19961228lyh'
  }
});

var mailOptions = {
  from: 'm15609845089@163.com',
  to: '864048903@qq.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});     