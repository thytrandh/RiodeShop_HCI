import "../Logo/Logo.scss";
const Logo = ({imgLogo}) => {
  return (
    <div className="logo mr-5">
      <img src={imgLogo} alt="" />
    </div>
  );
};

export default Logo;
