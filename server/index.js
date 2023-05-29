const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require("body-parser");
const {port} = require('./config/config');
const cors = require('cors');



const app = express();


app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use('/', routes)
app.listen(port, () => console.log(`server on port ${port}`));


