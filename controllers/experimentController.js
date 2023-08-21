import ExperimentModel from "../models/ExperimentModel.js"

//--------------------------------GET---------------------------------------
const getExperiment = async (req, res) => {
    let experiment = req.params.experiment_id
    try {
        let doc = await ExperimentModel.findOne({ _id: experiment })

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
const getAllExperiment = async (req, res) => {
    try {
        let docs = await ExperimentModel.find()
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

export default { getExperiment, getAllExperiment, addExperiment }