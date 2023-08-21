import mongoose from 'mongoose'

const ExperimentSchema = new mongoose.Schema({
    experiment_name: {type: String, required: true},
    experiment_date: {type: Date, required: true},
    experiment_location: {type: String, required: true},
    experiment_description: {type: String, required: true},
    project: {type: mongoose.Schema.Types.ObjectId, ref:'Projects', required: true, onDelete: 'CASCADE'}
})

const ExperimentModel = mongoose.model('Experiment', ExperimentSchema)

export default ExperimentModel