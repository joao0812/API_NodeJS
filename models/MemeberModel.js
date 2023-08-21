import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
    member_name: {type: String, required: true},
    member_surname: {type: String, required: true},
    member_title: {type: String, required: true},
    member_email: {type: String, required: true},
    member_password: {type: String, required: true},
    member_adimission: {type: String, required: true},
    member_profileImage: {type: String, required: true},
    position: {type: mongoose.Schema.Types.ObjectId, ref: 'Positions', required: true, onDelete: true},
    area: {type: mongoose.Schema.Types.ObjectId, ref: 'Areas', required: true, onDelete: true}
})

const MemberModel = mongoose.model('Member', MemberSchema)

export default MemberModel