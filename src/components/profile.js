import { Component } from "react";
import './../css/profile.css'
import Fotter from './fotter'
class Profile extends Component{

    componentDidMount(){
        let login = document.getElementById('login')
        let mail = document.getElementById('mail')
        let phone = document.getElementById('phone')
        let logout = document.getElementById('logout')

        
        const getUserData = async() =>{
            let response = await fetch('/userData')
            let data = await response.json()
            return data
        }
        getUserData().then(res =>{
            login.innerHTML += ` ${res.login}`
            mail.innerHTML += ` ${res.mail}`
            phone.innerHTML +=` ${res.phoneNumber}`
        })
        logout.addEventListener('click', async e=>{
            await fetch('/logout')
        })
    }

    render(){
        return <div>
            <div className="mainProfile">
                <div className="Zag">
                    Страница профиля
                </div>
                <div className="Login" id="login">
                    Логин
                </div>
                <div className="Mail" id='mail'>
                    Почта
                </div>
                <div className="Phone" id='phone'>
                    Телефон
                </div>  
                <div className="Logout" id='logout'>
                    <a href="/">Выйти</a>
                </div>
            </div>
            <div className="fotterMargin">

            </div>
            <Fotter/>
        </div>
    }
}
export default Profile