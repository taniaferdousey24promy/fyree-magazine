import logo from "../../../assets/logo.svg";
import instaIcon from "../../../assets/insta-icon.svg";
import twitterIcon from "../../../assets/twitter-icon.svg";
import utubeIcon from "../../../assets/utube-icon.svg";
import wifiIcon from "../../../assets/wifi-icon.svg";
const Header = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg  border-bottom border-dark-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Art
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Magazine
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Podcast
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <button className="btn ms-5 " href="">
                <img src={utubeIcon} alt="" />
              </button>
              <button className="btn  " href="">
                <img src={instaIcon} alt="" />
              </button>
              <button className="btn  " href="">
                <img src={twitterIcon} alt="" />
              </button>
              <button className="btn  " href="">
                <img src={wifiIcon} alt="" />
              </button>{" "}
            </span>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default Header;
