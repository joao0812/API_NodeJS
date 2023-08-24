import mongoose from 'mongoose';

const EmploySchema = new mongoose.Schema({
    member: {type: mongoose.Schema.Types.ObjectId, ref:'members', required: true, onDelete: 'CASCADE'},
    experiment: {type: mongoose.Schema.Types.ObjectId, ref:'experiments', required: true, onDelete: 'CASCADE'}
})

const EmployModel = mongoose.model('Execute', EmploySchema);

export default EmployModel