import {PROJECT_TITLE,PROJECT_TITLE_DESC,HEADER_BG_IMG} from '../../assests/config'
import './index.scss'
const Header =()=>{
    return (
        <div  className="header" style={{ backgroundImage: `url(${HEADER_BG_IMG})` }}>
            <h1 className='title'>
                {PROJECT_TITLE}
            </h1>
            <h4 className='desc'>
                {PROJECT_TITLE_DESC}
            </h4>
        </div>
    )
}

export default Header