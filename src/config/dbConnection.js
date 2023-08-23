import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://logbookSenai:senha123@logbookcluster.hiablpo.mongodb.net/logBook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let logBookDB = mongoose.connection

export default logBookDB