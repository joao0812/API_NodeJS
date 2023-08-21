import mongoose from 'mongoose';

// Esquema para a coleção Project
const ProjectSchema = new mongoose.Schema({
  project_name: { type: String, required: true, unique: true },
  project_acro: { type: String, required: true },
  project_description: { type: String, required: true },
  area: { type: mongoose.Schema.Types.ObjectId, ref: 'Areas', required: true, onDelete: 'CASCADE' },
  lead: { type: mongoose.Schema.Types.ObjectId, ref:'Members', required: true, onDelete: 'CASCADE' }
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;