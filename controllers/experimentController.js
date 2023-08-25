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
        let doc = await ExperimentModel.findOne({ _id: req.params.id })
            .populate('Project')

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
        let docs = await ExperimentModel.find()
            .populate('Project')

        docs.length === 0 ? res.send('Notting found') : res.send(docs)
    }
    catch (err) {
        res.send(err)
    }
}

//--------------------------------PUT---------------------------------------
const updateOne = async (req, res) => {
    let new_experiment = req.body
    try {
        let doc = await ExperimentModel.findOneAndUpdate({_id: req.params.id}, {$set: new_experiment}, {new: true, upsert: true})
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
        let doc = await ExperimentModel.findOneAndDelete({_id: id})
        doc ? console.log(`Area ${id} removed`) : console.log(doc)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export default { getOne, getAll, addExperiment, updateOne, removeOne }