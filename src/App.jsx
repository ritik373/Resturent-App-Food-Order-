import React from 'react';
import Header from './components/Layout/Header'
import Showmeals from './components/Meals/ShowMeals'
import Cart from './components/Cart/Cart'
import CartProvider from '././store/CartProvider'
import { useState, Fragment } from 'react';

const App = (props) => {
  const [showModelHandler, setShowModalHandler] = useState(false);

  const showCartModalHander = () => {
    setShowModalHandler(true);
  }
  const hideCartModalHander = () => {
    setShowModalHandler(false);
  }
  return (
    <div>
   
      {showModelHandler && <Cart hideModal={hideCartModalHander} />}
      <Header onShowModal={showCartModalHander} />
      <main>
            <Showmeals />
      </main>

    </div>

  )

}
export default App;