


const CartItem = (props) => {

    return(
        <div className="cart-item-container">
            <div className="cart-item-img">
                <img src={props.img} alt="" />
            </div>
            <div className="cart-item-name">
                {props.name}
            </div>
            <div className="cart-item-count">
                <div
                    className="cart-item-count-arithmetics"
                    onClick={handleMinus}
                > 
                    -
                </div>
                <div className="cart-item-count-number">{ props.num }</div>
                <div 
                    className="cart-item-count-arithmetics"
                    onClick={handlePlus}
                > 
                    + 
                </div>
                
            </div>
            <div className="cart-item-sum"> { props.num * props.price } грн</div>
            <div className="cart-item-del">
                <DeleteFilled onClick={handleDeleteItem}/>
            </div>
        </div>
    )
}

export default CartItem