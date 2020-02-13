const express = require('express')
const app = express();
const { User } = require('./models/user')
const mongoose = require('mongoose')
const db = 'mongodb+srv://Jahanzaib:zxcvbnm123@cluster0-bwh1r.mongodb.net/test?retryWrites=true&w=majority'
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cookieParser())
app.get('/', (req, res) => {
    res.send("Hello! World")
})
app.post('api/users/register', async (req, res) => {
    const user = new User(res.body)
    await user.save()


})
app.listen(5000)