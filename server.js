const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
var router = express.Router();
module.exports = router;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
    console.log('Listening on', port);
});
