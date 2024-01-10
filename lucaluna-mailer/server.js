const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// OAuth2 configuration
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Function to retrieve an access token
function getAccessToken() {
  return new Promise((resolve, reject) => {
    oAuth2Client.getAccessToken((error, token) => {
      if (error) {
        console.error('Error retrieving access token:', error.message);
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
}

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: 'luca@lucaluna.tech',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: getAccessToken().then((token) => token),
  },
});

app.post('/sendEmail', cors(), async (req, res) => {
  const { name, email, message } = req.body;

  // Email configuration
  const mailOptions = {
    from: 'CONTACT FORM <luca@lucaluna.tech>',
    to: 'compliancerightllc@gmail.com',
    subject: 'CONTACT FORM MESSAGE',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p>Name: ${name}<br>Email: ${email}<br>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    res.send('Email sent successfully');
  } catch (error) {
    console.log('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
