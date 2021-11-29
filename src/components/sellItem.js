import { Component } from "react";

import "./../css/sellItem.css"
class SellItem extends Component{
    constructor(props) {
        super(props);
        this.makeOder = this.makeOder.bind(this)
    }
    componentDidMount(){
        
    }
    makeOder(e) {
        let storage = window.localStorage
        storage.setItem('orderToken',this.props.specId)
    }
    render(){
        return <div className="RingItem" id="RingItem">
            <img src={this.props.imgLink} className="ringImg" alt = "ring"/>
            <div className="ringPrice">{this.props.name}</div>
            <div className="ringPrice">Цена {this.props.price}</div>
            <div className="ringPop">Популярность {this.props.pop}%</div>
            <div className="ringTxT">{this.props.desc}</div>
            <div className="ringOrderButton" id="orderBtn" onClick={this.makeOder}><div className="ringOrderButtonTxT">Купить</div></div>
        </div>

    }
}
export default SellItem