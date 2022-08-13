import Card from './components/Card'
import  Header from './components/Header'
import  Draver from './components/Draver'


const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12250, imageURL:'/img/sneakers/1.svg'},
    {title: 'Мужские Кроссовки Nike Air Max 270', price: 22000, imageURL:'/img/sneakers/2.svg'},
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 13650, imageURL:'/img/sneakers/3.svg'},
    {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 21220, imageURL:'/img/sneakers/4.svg'},

];

function App() {
  return (
    <div className="wrapper">
        <Draver/>
        <Header />

        <div className="content">
            <div className="info-content">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>

            <div className="sneakers">

                {arr.map((obj) =>(
                    <Card
                        title={obj.title}
                        price={obj.price}
                        imageURL={obj.imageURL}
                    />
                ))}

            </div>
        </div>
    </div>
  );
}

export default App;
