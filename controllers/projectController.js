import ProjectModel from '../models/ProjectModel.js'

//--------------------------------POST---------------------------------------
const addProject = async (req, res) => {
    let project = new ProjectModel(req.body)
    try {
        let doc = await project.save()
        console.log(`Project added \n ${doc}`)
        res.send(`Project added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

//--------------------------------GET---------------------------------------
const getOne = async (req, res) => {
    try {
        let doc = await ProjectModel.findOne({ _id: req.params.id })
            .populate('Area')
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
        let docs = await ProjectModel.find()
            .populate('Area')
            .populate('Member')

        docs.length === 0 ? res.send('Notting found') : res.send(docs)
    }
    catch (err) {
        res.send(err)
    }
}

//--------------------------------PUT---------------------------------------
const updateOne = async (req, res) => {
    let new_project = req.body
    try {
        let doc = await ProjectModel.findOneAndUpdate({_id: req.params.id}, {$set: new_project}, {new: true, upsert: true})
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
        let doc = await ProjectModel.findOneAndDelete({_id: id})
        doc ? console.log(`Area ${id} removed`) : console.log(doc)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export default { getOne, getAll, addProject, updateOne, removeOne }
