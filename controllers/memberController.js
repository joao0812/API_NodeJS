import MemberModel from "../models/MemeberModel.js"

// Verifica se a senha contém pelo menos uma letra maiúscula
const regexMaiuscula = /[A-Z]/;
// Verifica se a senha contém pelo menos uma letra minúscula
const regexMinuscula = /[a-z]/;
// Verifica se a senha contém pelo menos um número
const regexNumero = /[0-9]/;

//--------------------------------POST---------------------------------------
const addMember = async (req, res) => {
    let member = new MemberModel(req.body)
    try {
        if (regexMaiuscula.test(member.member_password) && regexMinuscula.test(member.member_password) && regexNumero.test(member.member_password)) {
            let num_members = await MemberModel.find()
            num_members.length === 0 ? member.admin = true : member.admin = false
            let doc = await member.save()
            console.log(`Member added \n ${doc}`)
            res.send(`Member added \n ${doc}`)
        } else{
            res.send('Password incomplete')
        }
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
            .populate('position')
            .populate('area')

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
    let new_member = req.body
    try {
        let doc = await MemberModel.findOneAndUpdate({ _id: req.params.id }, { $set: new_member }, { new: true, upsert: true })
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
        doc ? res.send(`Area ${id} removed`) : res.send(doc)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export default { getOne, getAll, addMember, updateOne, removeOne }
