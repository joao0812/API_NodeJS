import mongoose from 'mongoose';

const EmploySchema = new mongoose.Schema({
    project: [{type: mongoose.Schema.Types.ObjectId, ref:'projects', required: true, onDelete: 'CASCADE'}],
    member: {type: mongoose.Schema.Types.ObjectId, ref:'members', required: true, onDelete: 'CASCADE'},
    emplot_date: {type: Date},
    function: {type: String}
})

const EmployModel = mongoose.model('Employ', EmploySchema);

export default EmployModel