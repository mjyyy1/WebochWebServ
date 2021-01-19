const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    text: String
});

const User = mongoose.model('User', UserSchema);


exports.createUser = (inMail, inPassword) => {
    var user = new User({
        email: inMail,
        text: inPassword
    })

    return user
}