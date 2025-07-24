const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.static(path.join(__dirname)));

const dir = path.join(__dirname, '..');

// app.use('/host', createProxyMiddleware({
//     target: 'http://localhost:4200',
//     changeOrigin: true,
//     pathRewrite: { '^/host': '' }
// }));
//
// app.use('/template', createProxyMiddleware({
//     target: 'http://localhost:4201',
//     changeOrigin: true,
//     pathRewrite: { '^/template': '' },
// }));

app.use(express.static(dir + "mf-template/dist/mf-template/browser"));

app.get('/', function(req, res) {
    res.sendFile(dir + "mf-template/dist/mf-template/browser/index.html");
});

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});