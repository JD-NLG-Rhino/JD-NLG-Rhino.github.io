import { DESC_LIST } from "../../assests/config";
import { Button } from "antd";
import "./index.scss";
const Desc = () => {
  return (
    <div className="desc-module">
      {DESC_LIST.map((item) => {
          return (
            <div key={item.title}>
            <div className="title">{item.title}</div>
            <div className="desc" dangerouslySetInnerHTML={{__html:item.desc}}/>
            <div className="url-list">
            {
                item.downList&&item.downList.map(item=>{
                    return (
                        <div className="item">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <Button type="primary"  shape="round">{item.title}</Button>
                            </a>
                        </div>
                    )
                })
            }
            </div>
          </div>
          )
      })}
    </div>
  );
};
export default Desc;
