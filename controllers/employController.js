import EmployModel from "../models/EmployModel.js"

//--------------------------------GET---------------------------------------
const getEmploy = async (req, res) => {
    let employ = req.params.employ_id
    try {
        let doc = await EmployModel.findOne({ _id: employ })

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
const getAllEmploy = async (req, res) => {
    try {
        let docs = await EmployModel.find()
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

export default { getEmploy, getAllEmploy, addEmploy }