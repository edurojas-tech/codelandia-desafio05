import "./style.css";
import logo from "../assets/logo.svg";
import Links from "./schema";

function component() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" className="navbar__imagem" />
      </div>
      <div className="navbar__links">
        {Links.map(link => (
          <a href={link.desc} target="_blank"><img src={link.icon} alt="" /></a>
        ))}
      </div>
    </div>
  );
}

export default component;
