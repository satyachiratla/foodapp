const mongoose = require('mongoose');

const Orders = mongoose.Schema({
    user: [],
    orderedItems: []
})

module.exports = mongoose.model('orders', Orders);