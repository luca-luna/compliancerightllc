import express from 'express';
import path from 'path';
import ContactForm from './components/ContactForm';

const app = express();
const port = 3002;

// Serve the static files
app.use(express.static(path.join(__dirname, 'build')));

// API route for sending email
app.post('/sendEmail', (req, res) => {
  // Handle sending email here
  res.send('Email sent successfully');
});

// Serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
