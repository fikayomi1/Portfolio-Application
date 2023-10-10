const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const username = process.env.EMAIL_USERNAME;
const password = process.env.EMAIL_PASSWORD;





//Makes sure the application makes use of the bodyparser for parsing the body of the request which would get posted
app.use(bodyParser.json());


app.use(cors());


//Using the Nodemailer
const transporter = nodemailer.createTransport({   // Uses the tranporter
    service: 'gmail',
    auth: {
        user: username,
        pass: password
    }
});


app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(req.body)

    const mailOptions = {
        from: username,
        to: username,
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});