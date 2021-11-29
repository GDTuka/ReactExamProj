import { Component } from "react";
import './../css/login.css'
import Fotter from "./fotter";

class Login extends Component{
    state ={
        data:null
    }
    componentDidMount(){
        let login = document.getElementById('btnEnter')

        const sendToLogin = async(body) => {
            let res = await fetch("/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            });
        }

        login.addEventListener('click',e=>{
            let login = document.getElementById('inputLogin')
            let pwd = document.getElementById('password')
            if(login.value !== '' && pwd.value !== ''){
                sendToLogin({login:login.value,pwd:pwd.value})
            }
        })
    }


    render(){


        return <><div className="main" id="main">
         <div className="registration-cssave">
            <div className="form" >
                <h3 className="text-center">Вход в систему</h3>
                <div className="form-group">
                    <input className="form-control item" type="text" name="login" maxLength="15" id="inputLogin" minLength="4"
                        pattern="^[a-zA-Z0-9_.-]*$"  placeholder="Логин" required />
                </div>
                <div className="form-group">
                    <input className="form-control item" type="password" name="password" minLength="6" id="password"
                        placeholder="Пароль" required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block create-account" type="submit" id="btnEnter">Войти</button>
                </div>
                <div className="toRegister">
                    <a href="/Register" >Регистрация</a>
                </div>
            </div>
        </div>
        </div>
        <Fotter/>
        </>
    
    }
}
export default Login