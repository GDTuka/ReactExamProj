const db = require("mongoose")

const user = "Tuka"
const pwd = "23445667423Ar"
const uri = `mongodb+srv://Tuka:${pwd}@cluster0.xg3td.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

db.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = db