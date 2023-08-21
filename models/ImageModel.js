import mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema({
    image_data: {type: Buffer, required: true},
    image_contentType: {type: String, required: true},
    item: {type: mongoose.Schema.Types.ObjectId, ref:'Itens', required: true, onDelete: 'CASCADE'}
})

const ImageModel = mongoose.model('Image', ImageSchema)

export default ImageModel