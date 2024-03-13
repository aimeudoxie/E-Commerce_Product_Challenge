import "./navigation.css"
import logo from "./assets/logo.svg"
import cart from "./assets/icon-cart.svg"
import avatar from "./assets/image-avatar.png"

const Navigation = ()=>{
    return(
        <><div id="nav-headers">
        <div className="logo"><img src={logo} alt="logo image"/></div>
         
            <div id="links">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        
        </div>
        <div id="profile">
            <img src={cart}/>
            <img src={avatar} id="avatar"/>
        </div>

        </div>
        </>
    )
}
export default Navigation;