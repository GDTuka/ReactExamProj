import { Component } from "react";
import "./../css/sellItem.css"
import ring from '../photos/rings/ringOne.jpg'
class SellItem extends Component{

    componentDidMount(){
        let storage = window.localStorage
        let orderButton = document.getElementById('orderBtn')
        orderButton.addEventListener('click',e=>{
            console.log('1234')
        })
    }

    render(){
        
        return <div className="RingItem" id="RingItem">
            <img src={ring} className="ringImg" alt = "ring"/>
            <div className="ringPrice">{this.props.name}</div>
            <div className="ringPrice">Цена {this.props.price}</div>
            <div className="ringPop">Популярность {this.props.pop}%</div>
            <div className="ringTxT">{this.props.desc}</div>
            <div className="ringOrderButton" id="orderBtn"><div className="ringOrderButtonTxT">Купить</div></div>
        </div>
    }
}
export default SellItem