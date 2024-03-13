import "./navigation.css"
import logo from "./assets/logo.svg"
import cart from "./assets/icon-cart.svg"
import avatar from "./assets/image-avatar.png"
import menu from './assets/icon-menu.svg';

const Navigation = ()=>{ 
    return(
        <><div id="nav-headers">
            <div className="burger-menu"><img src={menu} alt="menu" /></div>
        <div className="logo"><img src={logo} alt="logo image"/></div>
         
            <div id="links">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        
        </div> 
        <div id="profile">
            <img src={cart} className="cart"/>
            <img src={avatar} className="avatar"/>
        </div>

        </div>
        </>
    )
}
export default Navigation;