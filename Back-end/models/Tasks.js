const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    FESrcCodeLink:{
        type: String,
        required: true
    },
    BESrcCodeLink:{
        type: String,
        required: true
    },
    FEDpdURL:{
        type: String,
        required: true
    },
    BEDpdURL:{
        type: String,
        required: true
    }
});
 
const Task =mongoose.model('Task', querySchema);

module.exports = Task;