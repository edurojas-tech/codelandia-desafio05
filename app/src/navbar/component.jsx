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
        {Links.map((link, index) => (
          <a href={link.desc} key={index} target="__blank">
            <img src={link.icon} alt={link.desc} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default component;
