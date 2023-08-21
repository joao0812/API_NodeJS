import mongoose from 'mongoose';

const EmploySchema = new mongoose.Schema({
    member: {type: mongoose.Schema.Types.ObjectId, ref:'Members', required: true, onDelete: 'CASCADE'},
    experiment: {type: mongoose.Schema.Types.ObjectId, ref:'Experiments', required: true, onDelete: 'CASCADE'}
})

const EmployModel = mongoose.model('Execute', EmploySchema);

export default EmployModel