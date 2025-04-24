import { useState } from 'react';
import data from './data.json';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { Modal } from './components/Modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="container">
      <div className="grid-container">
        <ProductList products={data} />
        <Cart showModal={() => setShowModal(true)} />
        {showModal && <Modal closeModal={() => setShowModal(false)} />}
      </div>
    </main>
  );
}

export default App;
