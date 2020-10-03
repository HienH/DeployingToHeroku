const express = require('express');
const app = express();
app.use(express.static('./dist/heroku-deployment'));
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/heroku-deployment/index.html');
});
app.listen(process.env.PORT || 8080);