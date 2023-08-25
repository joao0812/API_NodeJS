import EmployModel from "../models/EmployModel.js"

//--------------------------------POST---------------------------------------
const addEmploy = async (req, res) => {
    let employ = new EmployModel(req.body)
    try {
        let doc = await employ.save()
        console.log(`Employ added \n ${doc}`)
        res.send(`Employ added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

//--------------------------------GET---------------------------------------
const getOne = async (req, res) => {
    try {
        let doc = await EmployModel.findOne({ _id: req.params.id })
            .populate('Project')
            .populate('Member')

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
const getAll = async (req, res) => {
    try {
        let docs = await EmployModel.find()
        .populate('Project')
        .populate('Member')

        docs.length === 0 ? res.send('Notting found') : res.send(docs)
    }
    catch (err) {
        res.send(err)
    }
}

//--------------------------------PUT---------------------------------------
const updateOne = async (req, res) => {
    let new_employ = req.body
    try {
        let doc = await EmployModel.findOneAndUpdate({_id: req.params.id}, {$set: new_employ}, {new: true, upsert: true})
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

//--------------------------------DELETE-------------------------------------
const removeOne = async (req, res) => {
    let id = req.params.id
    try {
        let doc = await EmployModel.findOneAndDelete({_id: id})
        doc ? console.log(`Area ${id} removed`) : console.log(doc)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export default { getOne, getAll, addEmploy, updateOne, removeOne }