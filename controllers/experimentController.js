import ExperimentModel from "../models/ExperimentModel.js"

//--------------------------------POST---------------------------------------
const addExperiment = async (req, res) => {
    let experiment = new ExperimentModel(req.body)
    try {
        let doc = await experiment.save()
        console.log(`Experiment added \n ${doc}`)
        res.send(`Experiment added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

//--------------------------------GET---------------------------------------
const getOne = async (req, res) => {
    try {
        let doc = await AreaModel.findOne({ _id: req.params.id })

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
        let docs = await AreaModel.find()
        docs.length === 0 ? res.send('Notting found') : res.send(docs)
    }
    catch (err) {
        res.send(err)
    }
}

//--------------------------------PUT---------------------------------------
const updateOne = async (req, res) => {
    let new_area = req.body
    try {
        let doc = await AreaModel.findOneAndUpdate({_id: req.params.id}, {$set: new_area}, {new: true, upsert: true})
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
        let doc = await AreaModel.findOneAndDelete({_id: id})
        doc ? console.log(`Area ${id} removed`) : console.log(doc)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export default { getOne, getAll, addExperiment, updateOne, removeOne }