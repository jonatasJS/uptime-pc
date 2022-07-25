const express = require('express');
const app = express();
const coors = require('cors');
const port = 3000;
const serverStatus = require("express-status-monitor");
const bodyParser = require("body-parser");

app.use(coors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// app.use(express.static('public'));
// app.use(express.static('pages'));

// app.use("/status", serverStatus(app));
app.use(require("express-status-monitor")({
  title: "MEU PC",
}));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});