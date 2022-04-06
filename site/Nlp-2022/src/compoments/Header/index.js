import {
  PROJECT_TITLE,
  PROJECT_TITLE_DESC,
  HEADER_BG_IMG,
} from "../../assests/config";
import "./index.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="bg-img">
        <img src={HEADER_BG_IMG} alt="" />
      </div>
      <div className="text">
        <h1 className="title">{PROJECT_TITLE}</h1>
        <h4 className="desc">{PROJECT_TITLE_DESC}</h4>
      </div>
    </div>
  );
};

export default Header;
