const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// use middleware
app.use(cors());
app.use(express.json());

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tgnb0dt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send/get to/from the database
async function run() {
    try {
        await client.connect();
        const bookCollection = client.db('crudBookManagement').collection('book');
        const orderCollection = client.db('crudBookManagement').collection('order');

        /* For bookCollection */

        // get all books data (json format) from database by creating book's GET API for bookCollection
        app.get('/book', async (req, res) => {
            const query = {};
            const cursor = bookCollection.find(query);
            const books = await cursor.toArray();
            res.send(books);
        });

        // POST a book data from server-side to database for bookCollection
        app.post('/book', async (req, res) => {
            const newBook = req.body;
            console.log('Adding a new book', newBook);
            const result = await bookCollection.insertOne(newBook);
            res.send(result);
        });

        // DELETE a book data and send from server-side to database for bookCollection
        app.delete('/book/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await bookCollection.deleteOne(query);
            console.log('One book item is deleted');
            res.send(result);
        });

        // Load a particular book data from database to server-side | (id-wise data load) for bookCollection
        app.get('/book/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await bookCollection.findOne(query);
            res.send(result);
        });

        // Update a book data from server-side to database for bookCollection
        app.put('/book/:id', async (req, res) => {
            const id = req.params.id;
            const bookData = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    quantity: bookData.quantity
                }
            };
            const result = await bookCollection.updateOne(filter, updateDoc, options);
            console.log('Product is updated');
            res.send(result);
        });

        /* For orderCollection */

        // POST a ordered book data from server-side to database for orderCollection
        app.post('/order', async (req, res) => {
            const newOrder = req.body;
            console.log('Adding a new book', newOrder);
            const result = await orderCollection.insertOne(newOrder);
            res.send(result);
        });

        // get all ordered books data (json format) from database by creating order's GET API for orderCollection
        app.get('/order', async (req, res) => {
            const query = {};
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();
            res.send(orders);
        });

        // Load a particular ordered book data from database to server-side | (id-wise data load) for orderCollection
        app.get('/order/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await orderCollection.findOne(query);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Books-Warehouse-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});