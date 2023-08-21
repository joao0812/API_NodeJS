import ProjectModel from '../models/ProjectModel.js'

const getProjectId = async (req, res) => {
    let project = req.params.project_id
    try {
        let doc = await ProjectModel.findOne({ _id: project })

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

const getAllProjects = async (req, res) => {
    try {
        let docs = await ProjectModel.find()
        if (docs.length === 0) {
            res.send('Notting found')
        }
        else {
            docs.map((doc) => { res.send(doc) })
        }
    }
    catch (err) {
        res.send(err)
    }
}

//--------------------------------POST---------------------------------------
const addProject = async (req, res) => {
    let project = new EmployModel(req.body)
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

export default { getProjectId, getAllProjects, addProject }
