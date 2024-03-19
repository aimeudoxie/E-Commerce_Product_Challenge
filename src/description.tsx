import "./description.css"
import minus from "./assets/icon-minus.svg"
import plus from "./assets/icon-plus.svg"
import cart from "./assets/shopping-cart.png"
import { useState } from "react"; 
import image from './assets/image-product-1.jpg';

const Description = () => {
    const [nbr, setNbr] = useState(0); 

    const decrement = () => {
        setNbr(nbr - 1); 
    }

    const increment = () => {
        setNbr(nbr + 1); 
    }
    const title='Fall Limited Edition Sneakers';
    const price=125.00;
    const percentage='50%';
    const oldprice=250.00;
    const totalPrice=price*nbr;

    const addItem = () => {
        const storedItem = localStorage.getItem("item");
        const item = storedItem ? JSON.parse(storedItem) : []; // Parse JSON directly
    
        console.log("Item from localStorage:", item);
    
        item.push({
            title: title,
            image: image,
            price: price,
            totalPrice: totalPrice,
            nbr: nbr
        });
        console.log("Updated item:", item);
        const itemJSON = JSON.stringify(item);
        localStorage.setItem('item', itemJSON);
        window.location.reload();
    
    }
   
    return (
        <>
            <div id='description'>
                <h2>SNEAKER COMPANY</h2>
                <h1>{title}</h1>
                <p>These low-profile sneakers are your perfect casual wear
                companion.Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer</p>
                <div className="prices">
                    <p><b>${price}.00</b><span id="percentage">{percentage}</span></p>
                    <p className="line-through">${oldprice}.00</p>
                </div>
                <div id="cart">
                    <div className="count">
                        <div className="minus" onClick={decrement}><img src={minus} alt="minus icon" className="minus" /></div>
                        <b>{nbr}</b>
                        <div className="plus" onClick={increment}><img src={plus} alt="plus icon" className="plus" /></div>
                    </div>
                    <div id="button" onClick={addItem}>
                        <img src={cart} alt="cart icon" />
                        <b>Add to cart</b>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description;
