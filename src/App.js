


function App() {
  return (
    <div className="wrapper">
      <header>
          <div className="headerLeft">
              <img width={40} height={40} src="/img/logo.png"/>
              <div className="headerInfo">
                  <h3>REACT SNEAKERS</h3>
                  <p>Магазин лучших кроссовок</p>
              </div>
          </div>
          <ul className="headerRight">
              <li><img width={18} height={18} src="/img/cart.svg"/> <span>1205 руб.</span></li>
              <li><img width={18} height={18} src="/img/prof.svg"/></li>
          </ul>
      </header>
        <div className="content">
            <h1>Все кроссовки</h1>

            <div className="sneakers">
                <div className="card">
                    <img className="photo-sneakers" width={133} height={112} src="/img/sneakers/sneakers-photo.svg" alt=""/>
                    <p className="name-sneakers">Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className="card-title">
                        <div>
                            <p>Цена:</p>
                            <b>11 111 руб.</b>
                        </div>
                        <button>
                            <img width={11} height={11} src="/img/add-cart.svg"/>
                        </button>
                    </div>
                </div><div className="card">
                <img className="photo-sneakers" width={133} height={112} src="/img/sneakers/sneakers-photo.svg" alt=""/>
                <p className="name-sneakers">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="card-title">
                    <div>
                        <p>Цена:</p>
                        <b>11 111 руб.</b>
                    </div>
                    <button>
                        <img width={11} height={11} src="/img/add-cart.svg"/>
                    </button>
                </div>
            </div><div className="card">
                <img className="photo-sneakers" width={133} height={112} src="/img/sneakers/sneakers-photo.svg" alt=""/>
                <p className="name-sneakers">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="card-title">
                    <div>
                        <p>Цена:</p>
                        <b>11 111 руб.</b>
                    </div>
                    <button>
                        <img width={11} height={11} src="/img/add-cart.svg"/>
                    </button>
                </div>
            </div><div className="card">
                <img className="photo-sneakers" width={133} height={112} src="/img/sneakers/sneakers-photo.svg" alt=""/>
                <p className="name-sneakers">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="card-title">
                    <div>
                        <p>Цена:</p>
                        <b>11 111 руб.</b>
                    </div>
                    <button>
                        <img width={11} height={11} src="/img/add-cart.svg"/>
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default App;
