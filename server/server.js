const config = require('./config.json');
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8888;

// apply middleware to the application level
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/lotr/search', require('./endpoints/lotr/search'));
app.use('/lotr/history', require('./endpoints/lotr/history'));

const url = `mongodb+srv://${config.username}:${config.password}@${config.cluster}/${config.database}?retryWrites=true&w=majority`;
const client = new MongoClient(url);

client.connect((err) => {
    // if there is an error then throw because our server depends on our database
    if (err) {
        throw new Error('Failed to connect to MongoDB');
    }

    console.log('Connected to MongoDB');

    // storing the database instance in the app.locals object to reference in search
    // and history
    app.locals.db = client.db();

    // start the server after connecting to mongo
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});