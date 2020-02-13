const express = require('express')
const app = express();
const { User } = require('./models/user')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/key')
const cookieParser = require('cookie-parser')
const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
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