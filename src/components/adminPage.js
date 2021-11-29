import { Component } from "react";
import './../css/Admin.css'
import Fotter from './fotter'
class Admin extends Component{

    componentDidMount(){
        const sendToItem = async(body) => {
            let res = await fetch("/item/add", {
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
            console.log(data)
            return data
          }
        getUserData().then(res=>{
            console.log(res.login)
            if (res.login !== 'Admin'){
                let empty = document.querySelector('.checkifempty')
                empty.style.display = "none"
            }
        })
        let type = document.getElementById('type')
        let imglink = document.getElementById('imgLink')
        let name = document.getElementById('name')
        let price = document.getElementById('price')
        let desc = document.getElementById('desc')
        let submit = document.getElementById('submit')
        submit.addEventListener('click', e=>{
            sendToItem({type:type.value,name:name.value,price:price.value,imgLink:imglink.value,desc:desc.value})
        })
    }
    render(){
        return <div className="checkifempty"><div className="mainAdmin">
            <input type="text" placeholder="Тип" id="type" className="name"/>
            <input type="text" placeholder="Ссылка на картинку" id="imgLink" className="name"/>
            <input type="text" placeholder="Название" id="name" className="name"/>
            <input type="number" placeholder="Цена" id="price" className="price"/>
            <input type="text" placeholder="Описание" id="desc" className="desc"/>
            <div className="adminPageSubmit" id="submit">
                Подтвердить
            </div>
            
        </div>
        <Fotter/>
        </div>
    }
}
export default Admin