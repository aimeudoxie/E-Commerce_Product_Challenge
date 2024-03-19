import { useEffect, useState } from 'react';
import "./navigation.css";
import logo from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import menu from './assets/icon-menu.svg';
import close from './assets/close.png';
import remove from './assets/delete.png';

interface CartItem {
    image: string;
    title: string;
    price: number;
    nbr: number;
    totalPrice: number;
}

const Navigation = () => {
    const [showSideLinks, setShowSideLinks] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('item');
        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);

    const toggleSideLinks = () => {
        setShowSideLinks(!showSideLinks);
    };

    const [ShowCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!ShowCart);
    };

    const deleteItem = (index: number) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        localStorage.setItem('item', JSON.stringify(newCartItems));
    }

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
                    <div className="cart"> 
                        <img src={cart} onClick={toggleCart}/>
                        {cartItems.length > 0 && <span className='cart-number'>{cartItems.length}</span>}
                    </div>
                    <img src={avatar} className="avatar" />
                </div>
                <div className="cart-items" style={{ display: ShowCart ? 'flex' : 'none' }} >
                    <h4>Cart</h4>
                    {cartItems.length === 0 ? (
                        <p>No items in cart</p>
                    ) : (
                        <>
                            {cartItems.map((item, index) => (
                                <div className="item" key={index}>
                                    <img src={item.image} className="product-Image" />
                                    <p>{item.title} <br />${item.price}*{item.nbr} = <b>${item.totalPrice.toFixed(2)}</b></p>
                                    <img src={remove} className="delete-icon" onClick={() => deleteItem(index)} />

                                </div>
                            ))}
                            <button>Checkout</button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navigation;
