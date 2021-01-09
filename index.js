/////////////////////////////////
// SimpleEdit Editor
// Made by @wgyt and @D1WK
// LOOK AT LICENSE to read the LICENSE
/////////////////////////////////
console.log("starting server")
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
