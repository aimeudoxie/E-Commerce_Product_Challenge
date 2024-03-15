import { useState } from 'react';
import "./navigation.css";
import logo from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import menu from './assets/icon-menu.svg';
import close from './assets/close.png';
import image1 from './assets/image-product-1.jpg';
import remove from './assets/delete.png';

const Navigation = () => {
    const [showSideLinks, setShowSideLinks] = useState(false);

    const toggleSideLinks = () => {
        setShowSideLinks(!showSideLinks);
    };
    const[ShowCart,setShowCart]=useState(false);

    const toggleCart =() =>{
        setShowCart(!ShowCart);
    };

    return (
        <>
            <div id="nav-headers">
                <div className="burger-menu" onClick={toggleSideLinks}>
                    <img src={menu} alt="menu" />
                </div>
                <div className="logo"><img src={logo} alt="logo image" /></div>
                <div id="links">
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div id="side-links" style={{ display: showSideLinks ? 'flex' : 'none' }}>
                    <img src={close} alt="close-image" onClick={toggleSideLinks} />
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div id="profile">
                    <div className="cart"> <img src={cart} onClick={toggleCart}/>
                    <span className='cart-number'>3</span></div>
                    <img src={avatar} className="avatar" />
                </div>
                <div className="cart-items" style={{ display: ShowCart ? 'flex' : 'none' }} >
                    <h4>Cart</h4>
                    <div className="item">
                        <img src={image1} className="product-Image" />
                        <p>Fall Limited Sneakers <br/>$125*3 = <b>$375.00</b></p>
                        <img src={remove} className="delete-icon" />
                        </div>
                        <button>Checkout</button>
                    
                </div>
            </div>
        </>
    );
};

export default Navigation;
