const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;

const MessageSchema = Schema({
    text: {
        type: String,
        required: true
    },
    public: {
        type: Boolean,
        required: true
    }
});

MessageSchema.plugin(timestamps);

module.exports = mongoose.model('Message', MessageSchema);
