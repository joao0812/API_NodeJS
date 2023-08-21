import mongoose from 'mongoose'

const ChecklistSchema = new mongoose.Schema({
    checklist_value: { type: String, required: true },
    checklist_status: { type: Number, default: 0 },
    experiment: { type: mongoose.Schema.Types.ObjectId, ref: 'Experimens', required: true, onDelete: 'CASCADE' }
})

const ChecklistModel = mongoose.model('Checklist', ChecklistSchema)

export default ChecklistModel