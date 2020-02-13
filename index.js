const express = require('express')
const app = express();
const mongoose = require('mongoose')
const db = 'mongodb+srv://Jahanzaib:zxcvbnm123@cluster0-bwh1r.mongodb.net/test?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('MongoDb connected;')

    }
    catch (err) {
        console.error(err.message);
        process.exit(0)
    }
}
connectDB()
app.get('/', (req, res) => {
    res.send("Hello! World")
})
app.listen(5000)