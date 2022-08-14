import Card from './components/Card'
import  Header from './components/Header'
import  Draver from './components/Draver'
import React from "react";


// const arr = [
//
//     //     {
//     //         "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     //         "price": 12250,
//     //         "imageURL": "/img/sneakers/1.svg"
//     //     },
//     //     {
//     //         "title": "Мужские Кроссовки Nike Air Max 270",
//     //         "price": 22000,
//     //         "imageURL": "/img/sneakers/2.svg"
//     //     },
//     //     {
//     //         "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     //         "price": 13650,
//     //         "imageURL": "/img/sneakers/3.svg"
//     //     },
//     //     {
//     //         "title": "Кроссовки Puma X Aka Boku Future Rider",
//     //         "price": 21220,
//     //         "imageURL": "/img/sneakers/4.svg"
//     //     },
//     // {
//     //     "title": "Мужские Кроссовки Under Armour Curry 8",
//     //     "price": 23432,
//     //     "imageURL": "/img/sneakers/5.svg"
//     // },
//     // {
//     //     "title": "Мужские Кроссовки Jordan Air Jordan 11",
//     //     "price": 23432,
//     //     "imageURL": "/img/sneakers/6.svg"
//     // },
//     // {
//     //     "title": "Мужские Кроссовки Nike Kyrie 7",
//     //     "price": 12888,
//     //     "imageURL": "/img/sneakers/7.svg"
//     // },
//     // {
//     //     "title": "Мужские Кроссовки Nike LeBron XVIII",
//     //     "price": 12333,
//     //     "imageURL": "/img/sneakers/8.svg"
//     // },
//     // {
//     //     "title": "Мужские Кроссовки Nike Lebron XVIII Low",
//     //     "price": 23455,
//     //     "imageURL": "/img/sneakers/9.svg"
//     // },
//     // {
//     //     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     //     "price": 10044,
//     //     "imageURL": "/img/sneakers/10.svg"
//     // },
//     // {
//     //     "title": "Кроссовки Puma X Aka Boku Future Rider",
//     //     "price": 32444,
//     //     "imageURL": "/img/sneakers/11.svg"
//     // },
//     // {
//     //     "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//     //     "price": 2344,
//     //     "imageURL": "/img/sneakers/12.svg"
//     // }
//
//
//
// ];

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([ ]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() =>{
        fetch('https://62f8308a73b79d015363b406.mockapi.io/items').then(res => {
            return res.json();
        }).then(json => {
            setItems(json);
        })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [... prev, obj]);
    }

  return (
    <div className="wrapper">

        {cartOpened ?<Draver items={cartItems} onClose={() => setCartOpened(false)} /> : null}

        <Header onClickCard={() => setCartOpened(true)} />

        <div className="content">
            <div className="info-content">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>

            <div className="sneakers">

                {items.map((item) =>(
                    <Card
                        title={item.title}
                        price={item.price}
                        imageURL={item.imageURL}
                        onFavorite={() => console.log('Нажали добавить в закладки')}
                        onPlus={(obj) => onAddToCart(obj)}
                    />
                ))}

            </div>
        </div>
    </div>
  );
}

export default App;
