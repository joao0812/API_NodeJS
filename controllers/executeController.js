import ExecuteModel from '../models/ExecuteModel.js'

//--------------------------------GET---------------------------------------
const getExecute = async (req, res) => {
    let execute = req.params.execute_id
    try {
        let doc = await ExecuteModel.findOne({ _id: execute })

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
const getAllExecute = async (req, res) => {
    try {
        let docs = await ExecuteModel.find()
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

export default { getExecute, getAllExecute, addExecute }