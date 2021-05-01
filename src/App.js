// import logo from './logo.svg';
import './App.css';
import Card from "./card";
import { useState } from 'react';

function App() {
  let product = [
    {
      id: 1,
      name: "Item 1",
      price: 24,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 3
    },

    {
      id: 2,
      name: "Item 2",
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 5
    },

    {
      id: 3,
      name: "Item 3",
      price: 24.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 4
    },

    {
      id: 4,
      name: "Item 4",
      price: 30,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 3
    },

    {
      id: 5,
      name: "Item 5",
      price: 40,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 2
    },

    {
      id: 6,
      name: "Item 6",
      price: 45,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 5
    },
  ]
  const [cart,setCart] = useState([])
  const [total,setTotal] = useState(0)

  let addToCart = (product) => {
    setCart([...cart,product])
    setTotal(total + product.price)
  }

  let removeCart = (item) => {
    setCart(cart.filter(obj => obj.id !== item.id))
    setTotal(total - item.price)
  }
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4">Shop Name</h1>
            <div class="list-group">
              {
                cart.map((item) => {
                  return <div class="list-group-item" href="#!">{item.name} - ${item.price}
                  <span><button className="btn btn-sm btn-danger" onClick={() => {
                    removeCart(item)
                  }}>X</button></span>
                  </div>
                })
              }
            </div>
            <h3>Total - ${total}</h3>
          </div>
          <div class="col-lg-9">
            <div class="row">
              {
                product.map((product) => {
                  return <Card ProductData={product} handlecart={addToCart}></Card>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
