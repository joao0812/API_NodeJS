import ChecklistModel from "../models/ChecklistModel.js";

//--------------------------------GET---------------------------------------
const getChecklist = async (req, res) => {
    let checklist = req.params.checklist_id
    try {
        let doc = await ChecklistModel.findOne({ _id: checklist })

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
const getAllChecklist = async (req, res) => {
    try {
        let docs = await ChecklistModel.find()
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
const addChecklist = async (req, res) => {
    let checklist = new ChecklistModel(req.body)
    try {
        let doc = await checklist.save()
        console.log(`Checklist added \n ${doc}`)
        res.send(`Checklist added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

export default { getChecklist, getAllChecklist, addChecklist }