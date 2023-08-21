import PositionModel from "../models/PositionModel.js"

//--------------------------------GET---------------------------------------
const getPosition = async (req, res) => {
    let position = req.params.position_id
    try {
        let doc = await PositionModel.findOne({ _id: position })

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
const getAllPosition = async (req, res) => {
    try {
        let docs = await PositionModel.find()
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
const addPosition = async (req, res) => {
    let area = new PositionModel(req.body)
    try {
        let doc = await area.save()
        console.log(`Positon added \n ${doc}`)
        res.send(`Positon added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

export default { getPosition, getAllPosition, addPosition }
