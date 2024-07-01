/* 
TODO:
[ ] A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
[ ] A request to /api/whoami should return a JSON object with your preferred language in the language key.
[ ] A request to /api/whoami should return a JSON object with your software in the software key.
 */

// basic express test
const express = require('express');
const fs = require('fs');
const path = require('path');

// initialize the app
const app = express();

// public folder
app.use(express.static(path.join(__dirname, 'public')));

// // start the home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  // res.send('Hello');
});

// // example API
// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello, friend.' });
// });

// whoami api
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress,
    language,
    software
  });
});




// =======================
// FIN
// =======================

// Listen
const port = process.env.PORT || 3000;
// console.log(port);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
