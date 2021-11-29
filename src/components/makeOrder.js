import { Component } from "react";
import '../css/MakeOrder.css'
import Fotter from './fotter'
class MakeOrder extends Component{
    state = {
        orderLink: null,
        orderName: "1234",
        orderPrice: null,
        userName: null
    }
    componentDidMount(){
            
            let btn = document.getElementById('submit')
            let storage = window.localStorage
            let id = storage.getItem('orderToken')
            let phone = document.getElementById('phone')
            let adress = document.getElementById('adress')
            console.log(id.length)
            const getItem= async() =>{
                let response = await fetch('/item/get')
                let data = response.json()
                return data
            }
            const sendOrders = async(body) => {
                let res = await fetch("/order/send", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(body)
                });
            }    


            const getUserData = async() =>{
                let response = await fetch('/userData')
                let data = await response.json()
                return data
              }
            if(id.length < 1){
                let empty = document.getElementById('empty')
                empty.style.display = "flex"
                let mainOrder = document.getElementById('mainOrder')
                mainOrder.style.display ="none"
            }
            getUserData().then(res=>{
                this.setState({userName:res.login})
            })

            btn.addEventListener('click',e=>{
                if(phone.value !== '' && adress.value != ''){
                    sendOrders({itemsName:this.state.orderName,phoneNumber:phone.value,adress:adress.value,userName:this.state.userName})
                }
                storage.setItem('orderToken', " ")
            })

            getItem().then(res =>{
                for(let i =0; i< res.length; i++){
                    if(res[i]._id === id){
                        this.setState({orderLink: res[i].imglink, orderName:res[i].name,orderPrice:res[i].price})
                    }
                }
            })
            

    }
    render(){
        let storage = window.localStorage
        return <div>
            <div className="empty" id="empty"> Пусто</div>
            <div className="mainOrder" id="mainOrder">
                <div className="divImg">
                    <img src={this.state.orderLink} className="Img"></img>
                </div>
                <div className="orderName">Название {this.state.orderName}</div>
                <div className="orderPrice">Цена {this.state.orderPrice}</div>
                <div className="divGivePhone">
                    <input className="givePhone" id="phone" type="phone" placeholder="Номер телефона"/>
                </div>
                <br/>
                <div className="divGiveAdress">
                    <input className="giveAdress" id="adress" type="text" placeholder="Адресс"/>
                </div>
                <div className="Submit" id="submit">Подтвердить</div>
            </div>
            <Fotter/>
        </div>
    }
}

export default MakeOrder