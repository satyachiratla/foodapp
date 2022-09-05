const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const client = await mongoose.connect("mongodb+srv://playersapi:vivek777@cluster0.5rfbh13.mongodb.net/meals?retryWrites=true&w=majority")
    return client;
}

module.exports = connectToDatabase