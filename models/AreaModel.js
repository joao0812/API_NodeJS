import mongoose from 'mongoose';

const AreaSchema = new mongoose.Schema({
  area_name: { type: String, required: true, unique: true },
});

const AreaModel = mongoose.model('Area', AreaSchema);

export default AreaModel;