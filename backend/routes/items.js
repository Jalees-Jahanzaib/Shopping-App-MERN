const express = require('express');
const router = express.Router();

const Item = require('./../models/items');


router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});


router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name, seller: req.body.seller, quantity: req.body.quantity, price: req.body.price, minimum: req.body.minimum
    });

    newItem.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;