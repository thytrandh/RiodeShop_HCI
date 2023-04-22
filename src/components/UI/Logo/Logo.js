import "../Logo/Logo.scss";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../../settings/constant";

const Logo = ({ imgLogo }) => {
  return (
    <div className="logo mr-5">
      <Link to={HOME_PAGE} replace={false}>
        <img src={imgLogo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
