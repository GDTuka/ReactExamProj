import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter, Link,Routes,Route} from "react-router-dom"
import App from "./components/main"
import Rings from "./components/Rings"
import EarRings from './components/earrings'
import Necklase from './components/necklace';
import Bracelets from './components/bracelets'
import Login from './components/login'
import Profile from './components/profile'
import Register from './components/register'
import Admin from './components/adminPage'
import MakeOrder from './components/makeOrder';

const getUserData = async() =>{
  let response = await fetch('/userData')
  let data = await response.json()
  return data
}
ReactDOM.render(  
    <div>
      <div><div className="nav">
         <BrowserRouter>
          <div className="shapka">
            <a className="login" id="shit" href="/Login">Войти</a>
          </div>
          
          <div className="navItems">
              <Link to='/Rings' className="navItem">Кольца</Link>
              <Link to='/Earrings' className="navItem">Серёжки</Link>
              <Link to='/' className="navItem">Главная страница</Link>
              <Link to='/Bracelets' className="navItem">Браслеты</Link>
              <Link to='/Necklace' className="navItem">Ожерелья</Link>
              <Link to="/Admin" className="navItem">Админ</Link>
          </div>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/Rings" element={<Rings/>}/>
              <Route path="/EarRings" element={<EarRings/>}/>
              <Route path="/bracelets" element={<Bracelets/>}/>
              <Route path="/Necklace" element={<Necklase/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/Admin" element={<Admin/>}/>
              <Route path="/MakeOrder" element={<MakeOrder/>}/>
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>,
  document.getElementById('mainDiv')
);
let data 
let profileOrLogin = document.getElementById('shit')

getUserData().then(res =>{
  data = res.login
  if(data !== ''){
    profileOrLogin.innerHTML = data
    profileOrLogin.setAttribute('href','/Profile')
  }
})

