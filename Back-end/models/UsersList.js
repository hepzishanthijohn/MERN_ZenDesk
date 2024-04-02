const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    name: String,
    email: String,
    contact: Number,
})

const UserList = mongoose.model("UserList", userSchema);

module.exports = UserList;