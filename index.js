/////////////////////////////////
// SimpleEdit Editor v1.0
// Current version made by @wgyt and @D1WK
// Look at LICENSE.md to read the license
/////////////////////////////////
console.log("starting server, hold on!")
/////////////////////////////////
// Set Up Express.Js
/////////////////////////////////
const express = require('express');
const app = express();
/////////////////////////////////
// Welcome Page
/////////////////////////////////
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});
/////////////////////////////////
// Config Page
/////////////////////////////////
app.get('/config', (req, res) => {
  res.sendFile(`${__dirname}/views/config.html`);
});
/////////////////////////////////
// Listen On Port
/////////////////////////////////
app.listen(process.env.port||50000, () => {
  console.log('server started');
});
