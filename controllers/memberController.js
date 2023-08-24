import MemberModel from "../models/MemeberModel.js"

//--------------------------------POST---------------------------------------
const addMember = async (req, res) => {
    let area = new MemberModel(req.body)
    try {
        let doc = await area.save()
        console.log(`Member added \n ${doc}`)
        res.send(`Member added \n ${doc}`)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

//--------------------------------GET---------------------------------------
const getOne = async (req, res) => {
    try {
        let doc = await MemberModel.findOne({ _id: req.params.id })

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
        let docs = await MemberModel.find()
        .populate('position')
        .populate('area')
        docs.length === 0 ? res.send('Nenhum resultado encontrado') : res.send(docs);
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Ocorreu um erro ao buscar os membros');
    }
}

//--------------------------------PUT---------------------------------------
const updateOne = async (req, res) => {
    let new_area = req.body
    try {
        let doc = await MemberModel.findOneAndUpdate({ _id: req.params.id }, { $set: new_area }, { new: true, upsert: true })
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
        let doc = await MemberModel.findOneAndDelete({ _id: id })
        doc ? console.log(`Area ${id} removed`) : console.log(doc)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export default { getOne, getAll, addMember, updateOne, removeOne }
