const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// use middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running Books-Warehouse-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});