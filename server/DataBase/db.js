const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const client = await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://playersapi:vivek777@cluster0.5rfbh13.mongodb.net/meals?retryWrites=true&w=majority")
    return client;
}

module.exports = connectToDatabase