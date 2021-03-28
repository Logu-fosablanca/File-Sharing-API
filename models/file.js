const moongose = require('mongoose')

const Schema = moongose.Schema;


const fileSchema = new Schema({

    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String, required: false },
    receiver: { type: String, required: false },
}, { timestamps: true });

module.exports = moongose.model('File',fileSchema);