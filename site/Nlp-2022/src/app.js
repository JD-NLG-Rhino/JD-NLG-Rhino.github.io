import Header from "./compoments/Header"
import Desc from "./compoments/Desc"
import Rank from "./compoments/Rank"
import './app.scss'
import './iphone.scss'

const Nlp2020=()=>{
  return <div className="nlp-2020">
      <Header/>
      <div className="content">
        <Desc/>
        <Rank/>
      </div>
  </div>
}
export default Nlp2020