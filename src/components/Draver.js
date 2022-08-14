function Draver({onClose, items = [] }) {
    return(
        <div className="overlay overlay-hidden" >
            <div className="drawer">
                <h2>Корзина</h2>
                <button className="exit-cart" onClick={onClose}>
                    <img src="/img/cross.svg" alt="Close"/>
                </button>



                <div className="cartItemContainer">
                    {
                        items.map(obj =>

                            <div className="cartItem">
                                <img className="photo-cart-item" src={obj.imageURL} alt=""/>
                                <div className="textItem">
                                    <p>{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <div className="btnCart">
                                    <button>
                                        <img src="/img/cross.svg" alt=""/>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>


                <ul className="cartTotalBlock">
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 888 руб.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className="btnTotalBlock">Оформить заказ</button>
            </div>
        </div>
    );
}

export default Draver;
