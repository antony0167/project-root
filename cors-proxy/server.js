const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname)));

const dir = path.join(__dirname, '..');

app.use(express.static(dir + "/host-app/dist/host-app/browser"));

app.get('/', function(req, res) {
    res.sendFile(dir + "/host-app/dist/host-app/browser/index.html");
});

app.use('/mf', express.static(dir + "/mf-template/dist/mf-template/browser"));

app.get('/mf', function(req, res) {
    res.sendFile(dir + "/mf-template/dist/mf-template/browser/index.html");
});

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});