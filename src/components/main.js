import { Component } from "react"
import Fotter from './fotter'
class App extends Component{
    render(){
        return <div><div className="main">
            <div className="mainZag">
                Разделы
            </div>
            <div className="block1" id="block1">
                <div className="blockZag">Кольца</div>
                <div className="left">

                </div>
                <div className="right">

                </div>
            </div>
            <div className="block2">
                <div className="blockZag">Сережки</div>
                <div className="left">

                </div>
                <div className="right">

                </div>
            </div>
            <div className="block3">
                <div className="blockZag">Браслеты</div>
                <div className="left">

                </div>
                <div className="right">

                </div>
            </div>
            <div className="block3">
                <div className="blockZag">Ожерелья</div>
                <div className="left">

                </div>
                <div className="right">

                </div>
            </div>
            <Fotter/>
        </div>
        </div>
    }
}
export default App