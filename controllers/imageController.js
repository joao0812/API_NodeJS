import ImageModel from "../models/ImageModel.js"

//--------------------------------GET---------------------------------------
const getImage = async (req, res) => {
    let image = req.params.image_id
    try {
        let doc = await ImageModel.findOne({ _id: image })

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
const getAllImage = async (req, res) => {
    try {
        let docs = await ImageModel.find()
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
const addImage = async (req, res) => {
    let data = new ImageModel(req.body)
    try {
        let doc = await data.save()
        console.log(`Image added \n ${doc}`)
        res.send(`Image added \n ${doc}`)
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

export default { getImage, getAllImage, addImage }