import "./description.css"
import minus from "./assets/icon-minus.svg"
import plus from "./assets/icon-plus.svg"
import cart from "./assets/icon-cart.svg"
const Description=()=>{
    return(
        <>
        <div id='description'> 
            <h2>SNEAKER COMPANY</h2>
            <h1>Fall Limited Edition <br/>Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear 
                companion.Featuring a durable rubber outer sole, they'll 
                withstand everything the weather can offer</p>
            <div className="prices"><p><b>$125.00</b><span id="percentage" >50%</span></p>
            <p className="line-through">$250.00</p></div>
            <div id="cart">
                <div className="count">
                <img src={minus} alt="minus icon" className="minus" />
                <b>0</b>
                <img src={plus} alt="plus icon" className="plus" />
                </div>
                <div id="button">
                    <img src={cart} alt="cart icon" /> 
                    <b>Add to cart</b>
                </div>

            </div>
        </div>
        </>
    )
}
export default Description;