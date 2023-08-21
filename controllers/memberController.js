import MemberModel from "../models/MemeberModel.js"

//--------------------------------GET---------------------------------------
const getMember = async (req, res) => {
    let member = req.params.member_id
    try {
        let doc = await MemberModel.findOne({ _id: member })

        if (doc.length === 0) {
            res.send('Notting found')
        }
        else {
            res.send(doc)
            console.log(doc._id.toString())
        }
    }
    catch (err) {
        res.send(err)
    }
}
const getAllMember = async (req, res) => {
    try {
        let docs = await MemberModel.find()
        if (docs.length === 0) {
            res.send('Notting found')
        }
        else {
            res.send(docs)
        }
    }
    catch (err) {
        res.send(err)
    }
}

//--------------------------------POST---------------------------------------
const addMember = async (req, res) => {
    let area = new MemberModel(req.body)
    try {
        let doc = await area.save()
        console.log(`Member added \n ${doc}`)
        res.send(`Member added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

export default { getMember, getAllMember, addMember }
