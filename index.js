const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// use middleware
app.use(cors());
app.use(express.json());


// Username: dbuser1
// Password: 6B0TvhL6jSKNxzhp

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tgnb0dt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
//   const collection = client.db("test").collection("devices");
  const collection = client.db("crudBookManagement").collection("book");
  console.log('crudBookManagement database connected');
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
    res.send('Running Books-Warehouse-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});