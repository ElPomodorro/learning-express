const express = require('express')
const app = express();

app.use(express.static('public'));

app.listen(process.argv[2])