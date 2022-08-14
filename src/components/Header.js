function Header(props) {


    return(
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                <div className="headerInfo">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li onClick={props.onClickCard}><img width={18} height={18} src="/img/cart.svg" alt="card"/> <span>1205 руб.</span></li>
                <li><img width={18} height={18} src="/img/prof.svg" alt="prof"/></li>
            </ul>
        </header>
    );
}

export default Header;

