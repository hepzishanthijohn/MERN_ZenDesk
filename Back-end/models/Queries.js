const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    queryTitle:{
        type: String,
        required: true
    },
    queryDesc:{
        type: String,
        required: true
    }
});
 
const Query =mongoose.model('Query', querySchema);

module.exports = Query;