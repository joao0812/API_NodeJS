import ExecuteModel from '../models/ExecuteModel.js'

//--------------------------------POST---------------------------------------
const addExecute = async (req, res) => {
    let execute = new ExecuteModel(req.body)
    try {
        let doc = await execute.save()
        console.log(`Execute added \n ${doc}`)
        res.send(`Execute added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

//--------------------------------GET---------------------------------------
const getOne = async (req, res) => {
    try {
        let doc = await ExecuteModel.findOne({ _id: req.params.id })
            .populate('Member')
            .populate('Experiment')

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
        let docs = await ExecuteModel.find()
        docs.length === 0 ? res.send('Notting found') : res.send(docs)
    }
    catch (err) {
        res.send(err)
    }
}

//--------------------------------PUT---------------------------------------
const updateOne = async (req, res) => {
    let new_execute = req.body
    try {
        let doc = await ExecuteModel.findOneAndUpdate({_id: req.params.id}, {$set: new_execute}, {new: true, upsert: true})
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
        let doc = await ExecuteModel.findOneAndDelete({_id: id})
        doc ? console.log(`Area ${id} removed`) : console.log(doc)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export default { getOne, getAll, addExecute, updateOne, removeOne }