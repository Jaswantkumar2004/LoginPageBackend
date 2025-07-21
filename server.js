

const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'user@example.com' && password === 'password123') {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }
});


app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  
  if (email === 'user@example.com') {
    
    res.json({ success: true, message: 'A password reset link has been sent to your email.' });
  } else {
    
    res.json({ success: true, message: 'If that email address is in our records, we will send a password reset link.' });
  }
});


app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});