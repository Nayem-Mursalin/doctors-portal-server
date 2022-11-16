const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5500;

const app = express();


//middleware
app.use(cors())
app.use(express.json())





const uri = "mongodb+srv://<username>:<password>@cluster0.c8rri4v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




app.get('/', async (req, res) => {
    res.send('Doctor\'s portal Server is Running ')
})

app.listen(port, () => {
    console.log(`doctor's portal running on Server : ${port}`)
})