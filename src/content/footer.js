import '../css/index.css'

function Footer() {
  return (
    <footer>
        <div className='footer-links'>
            <ul className="">
                    <li className=""><a href="#">Home</a></li>
                    <li className=""><a href="#">Predmeti</a></li>
                    <li className=""><a href="#">Galerija</a></li>
                    <li className=""><a href="#">Music Visualizer</a></li>
                    <li className=" "><a href="#">Upcoming Testi</a></li>
                    <li className=" "><a href="#">Pac nek link</a></li>
                    {/* <li className="header-button change-to-light"><a href="#"><img src={NightModePhoto} alt="" /></a></li> */}
            </ul>
        </div>
        <hr/>
        <div className='footer-feedback'>

        </div>
        
        <div className='footer-authors'>
            Spletno stran sta s skupnimi mocmi naredila Andriy Gryban in Lin Sadez
        </div>
    </footer>
  );
}

export default Footer;