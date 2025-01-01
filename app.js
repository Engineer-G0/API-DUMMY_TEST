require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use('/uploadsLogo', express.static('uploadsLogo'));
app.use('/uploadsPhoto', express.static('uploadsPhoto'));

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});