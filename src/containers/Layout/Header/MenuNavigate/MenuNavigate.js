
import "../MenuNavigate/MenuNavigate.scss";
import Menu from "./Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";

const MenuNavigate = () => {
  return (
    <div className="menu-navigate">
      <Menu />
      <div className="division mr-3"></div>
      <SearchBar/>
    </div>
  );
};

export default MenuNavigate;
