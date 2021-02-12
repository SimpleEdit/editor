// SimpleEdit Editor v1.0
// Current version made by @wgyt, @D1WK and @thecoder876
// Look at LICENSE.md to read the license
console.log("starting server, hold on!")
console.log("Preforming Lakitu skip... (lol)")
// Set Up Express.Js
const express = require('express');
const app = express();
// Welcome Page
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});
// Config Page
app.get('/config', (req, res) => {
  res.sendFile(`${__dirname}/views/config.html`);
});
// Feedback Page
app.get('/feedback', (req, res) => {
  res.sendFile(`${__dirname}/views/feedback.html`);
});
/////////////////////////////////
// Listen On Port
/////////////////////////////////
app.listen(process.env.port||50000, () => {
  console.log("server started on port 50000")');
});
