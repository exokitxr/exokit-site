const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

const port = process.env['PORT'] || 8000;

const app = express();
app.get('*', express.static(__dirname));

app.post('/sendEmail', bodyParser.json(), (req, res) =>{
  console.log(req.body);
  res.send("hello");

  if(req.body.fName != '' && req.body.lName != '' &&
   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email) === true && req.body.message != '')
   {
    const transporter = nodemailer.createTransport('smtps://exokitsender@gmail.com:ExoEmail2!@smtp.gmail.com');

    const mailOptions = {
      from: `"${req.body.fName} ${req.body.lName}, ${req.body.email}`,
      to: 'Exokit, hello@webmr.io',
      subject: 'New inquiry from new.webmr.io',
      text: req.body.message + "\n\n" + 
      "Company: " + req.body.company + "\n\n" +
      "Name: " + req.body.fName + " " + req.body.lName + "\n\n" +
      "Sender Email: " + req.body.email
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
  }
  else{
    console.log('email info does not meet needs')
  }

  
});

http.createServer(app)
  .listen(port);
