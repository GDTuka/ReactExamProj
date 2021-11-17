import { Component } from "react";
import SellItem from "./sellItem";
import '../css/Rings.css'
import Fotter from './fotter'

class Rings extends Component{
    state={
        items:[]
    }
    componentDidMount(){
        let allitemsArr = []
        const getItems = async() =>{
            let res = await fetch('/item/get')
            let data = res.json()
            return data
        }   
        getItems().then(res=>{
            for(let i =0;i<res.length;i++){
                if(res[i].type === "Ring"){
                    allitemsArr.push(<SellItem name={res[i].name}  price={res[i].price} desc={res[i].desc } specId={res[i]._id}/>)
                }
            }
            
            this.setState({items: allitemsArr})
        })
    }
    render(){
        return <div >
           <div className="main">
               {this.state.items}
           </div>
        <Fotter/>
        </div>
    }
}
export default Rings