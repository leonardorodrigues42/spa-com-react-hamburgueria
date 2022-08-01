import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(()=> {

    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products", {method: "GET"})
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
      
    }, [])
    
    function showProducts(){
      
    }

    function filterCurrent(item) {    

      if (item.count >= 2) {
        item.count--
        setCurrentSale([...currentSale])

      } else {      
        const newCurrent = currentSale.filter(product => item !== product)
        setCurrentSale(newCurrent) 

      }

    }
    
    function handleClick(item){
      

      if (currentSale.includes(item)) {
        console.log("O elemento " + item.name + " já existe")
        item.count ? item.count++ : item.count=2

        setCurrentSale([...currentSale])
        console.log(currentSale)
      } else {
        setCurrentSale([...currentSale, item])
        console.log(item)
      }

    }
  
  return (
    <>
      <Header/>
      <div className='App'>
        <div className='display'>
          <ProductsList handleClick={handleClick} products={products}/>
          <Cart currentSale={currentSale} filterCurrent={filterCurrent}/>
        </div>
      </div>
    </>
  );
}

export default App;
