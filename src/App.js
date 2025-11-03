import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Redux Shopping Cart</h1>
        </header>
        <div className="container">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
