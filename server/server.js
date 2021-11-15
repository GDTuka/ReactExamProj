const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const {User,Item} = require('./data/model/model.js')
const {sign,verify} = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {createToken} = require('./data/jwt/jwt.js');
const parser = require('cookie-parser')

app.use(parser())
app.use(express.urlencoded(true)); 
app.use(express.json())

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.post('/register',async (req,res)=>{
  const {login,mail,pwd,phoneNumber} = req.body

  bcrypt.hash(pwd, 10).then((hash) =>{
      User({login:login,pwd:hash,mail:mail,phoneNumber:phoneNumber}).save()
  })
  res.redirect('/login')
})

app.post('/login',async (req,res)=>{
    const {login, pwd } = req.body
    const user = req.body
    console.log(user.login)
    const isUserExist = await User.findOne({login:login})
    if(!isUserExist){
        console.log('Логин гавно')
    } else{
         bcrypt.compare(pwd,isUserExist.pwd).then((match)=>{
        if(!match){
            console.log("Пароль говно")
        } else{

            const accessToken = createToken(user)
            res.cookie("token",accessToken,{
                maxAge:60*60*24*30*1000
            })

        res.redirect('/')
        }
    })
    }
})

app.get('/userData',async(req,res)=>{
    const accessToken = req.cookies["token"] 
    const validtoken = verify(accessToken,"jwt-secret")
    const user = await User.findOne({login:validtoken.login})
    res.send(user)
})
app.get('/logout',async(req,res) =>{
    res.clearCookie('token')
})
app.post('/item/add',async(req,res)=>{
    const {type,name,price,imgLink,desc} = req.body
    Item({type:type ,name:name, price:price,imglink:imgLink,desc:desc}).save()
})
app.get('/item/get',async(req,res)=>{
    const data = await Item.find()
    res.json(data)
})


