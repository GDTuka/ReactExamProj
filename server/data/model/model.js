const db = require('../mongoApi/dbGoose')

const UserSchema = new db.Schema({
    login: {type: String, unique:true,required:true},
    pwd:{type:String,required:true},
    mail:{type: String,unique:true,require:true},
    Admin:{type:Boolean, default:false},
    phoneNumber:{type:Number}
})
const ItemSchema = new db.Schema({
    type:{type:String},
    name:{type: String,unique:true},
    price:{type:Number},
    imglink:{type:String},
    desc:{type:String},
    pop:{type:String}
})
const OrderSchema = new db.Schema({
    itemsName:{type:String},
    phoneNumber:{type:String},
    adress:{type:String},
    userName:{type:String}
})

const User = db.model('User',UserSchema)
const Order = db.model("Order",OrderSchema)
const Item = db.model("Item",ItemSchema)

module.exports = {User,Order,Item}