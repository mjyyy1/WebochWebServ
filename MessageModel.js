const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: String,
    text: String
});

const Message = mongoose.model('Message', messageSchema);
