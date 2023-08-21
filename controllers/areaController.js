import AreaModel from '../models/AreaModel.js'

//--------------------------------GET---------------------------------------
const getArea = async (req, res) => {
    let area = req.params.area_id
    try {
        let doc = await AreaModel.findOne({ _id: area })

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
const getAllArea = async (req, res) => {
    try {
        let docs = await AreaModel.find()
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
const addArea = async (req, res) => {
    let area = new AreaModel(req.body)
    try {
        let doc = await area.save()
        console.log(`Area added \n ${doc}`)
        res.send(`Area added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

export default { getArea, getAllArea, addArea }
