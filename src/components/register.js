import { Component } from "react";

class Register extends Component{
 

    componentDidMount(){
        const sendToRegister = async(body) => {
            let res = await fetch("/register", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            });
        }    

        let login = document.getElementById('inputLogin')
        let mail = document.getElementById('mail')
        let pwd = document.getElementById('pwd')
        let phone = document.getElementById('phone')
        if(login.value !== '' && mail.value !== '' && pwd.value !== '' && phone.value !== ''){
            sendToRegister({login:login.value,mail:mail.value,pwd:pwd.value,phoneNumber:phone.value})
        }
    }
    
    render() {
        return <div className="main" id="main">
                    <div className="registration-cssave">
                        <div className="form" >
                            <h3 className="text-center">Зарегистрироваться</h3>
                            <div className="form-group">
                                <input className="form-control item" type="text" name="login" maxLength="15" id="inputLogin" minLength="4"
                                    pattern="^[a-zA-Z0-9_.-]*$"  placeholder="Логин" required />
                            </div>
                            <div className="form-group">
                                <input className="form-control item" type="mail" name="mail" minLength="6" id="mail"
                                    placeholder="Почта" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control item" type="password" name="password" minLength="6" id="password"
                                    placeholder="Пароль" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control item" type="phone" name="phone" minLength="6" id="phone]"
                                    placeholder="Номер телефона" required/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block create-account" type="submit" id="btnEnter">Зарегистрироваться</button>
                            </div>
                            </div>
                        </div>
                    </div>
    }
}
export default Register