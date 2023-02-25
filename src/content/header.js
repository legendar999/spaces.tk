import '../css/index.css'
// import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700&display=swap'
import NightModePhoto from '../photos/night-mode.svg'

function Header() {
  return (
    <header>
        <nav>
            <ul className="header-links">
                <li className="header-button active-page"><a href="#">Home</a></li>
                <li className="header-button"><a href="#">Predmeti</a></li>
                <li className="header-button"><a href="#">Galerija</a></li>
                <li className="header-button"><a href="#">Music Visualizer</a></li>
                <li className="header-button "><a href="#">Upcoming Testi</a></li>
                {/* <li className="header-button change-to-light"><a href="#"><img src={NightModePhoto} alt="" /></a></li> */}
            </ul>
        </nav>
     </header>

  );
}

export default Header;
