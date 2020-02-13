const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Jalees:jal123@cluster0-bwh1r.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
).then(() => console.log('Mongoose Connected')).catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send("Hello! World")
})
app.listen(5000)