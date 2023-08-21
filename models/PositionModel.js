import mongoose from "mongoose";

const PositionSchema = new mongoose.Schema({
    position_name: {type: String, required: true}
})

const PositionModel = mongoose.model('Position', PositionSchema)

export default PositionModel