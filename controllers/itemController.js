import ItemModel from "../models/ItemModel.js"

//--------------------------------GET---------------------------------------
const getItem = async (req, res) => {
    let item = req.params.item_id
    try {
        let doc = await ItemModel.findOne({ _id: item })

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
const getAllItem = async (req, res) => {
    try {
        let docs = await ItemModel.find()
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
const addItem = async (req, res) => {
    let item = new ItemModel(req.body)
    try {
        let doc = await item.save()
        console.log(`Image added \n ${doc}`)
        res.send(`Image added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

export default { getItem, getAllItem, addItem }