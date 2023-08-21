import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    item_datetime: {type: Date, required: true},
    item_description: {type: String, required: true},
    experiment: {type: mongoose.Schema.Types.ObjectId, ref:'Experiments', required: true, onDelete: 'CASCADE'}
})

const ItemModel = mongoose.model('Item', ItemSchema)

export default ItemModel