import './App.css';
import data from './data.json';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { Modal } from './components/Modal';

function App() {
  // const emptyList: {
  //   image: {
  //     thumbnail: string;
  //     mobile: string;
  //     tablet: string;
  //     desktop: string;
  //   };
  //   name: string;
  //   category: string;
  //   price: number;
  //   quantity: number;
  // }[] = [];

  // const emptyList = [];

  const orderList = [
    {
      image: {
        thumbnail: 'image-tiramisu-thumbnail.jpg',
        mobile: 'image-tiramisu-mobile.jpg',
        tablet: 'image-tiramisu-tablet.jpg',
        desktop: 'image-tiramisu-desktop.jpg',
      },
      thumbnail: 'image-tiramisu-thumbnail.jpg',
      name: 'Classic Tiramisu',
      category: 'Tiramisu',
      price: 5.5,
      quantity: 1,
    },
    {
      image: {
        thumbnail: 'image-creme-brulee-thumbnail.jpg',
        mobile: 'image-creme-brulee-mobile.jpg',
        tablet: 'image-creme-brulee-tablet.jpg',
        desktop: 'image-creme-brulee-desktop.jpg',
      },
      thumbnail: 'image-creme-brulee-thumbnail.jpg',
      name: 'Vanilla Bean Crème Brûlée',
      category: 'Crème Brûlée',
      price: 7.0,
      quantity: 4,
    },
    {
      image: {
        thumbnail: 'image-panna-cotta-thumbnail.jpg',
        mobile: 'image-panna-cotta-mobile.jpg',
        tablet: 'image-panna-cotta-tablet.jpg',
        desktop: 'image-panna-cotta-desktop.jpg',
      },
      thumbnail: 'image-panna-cotta-thumbnail.jpg',
      name: 'Vanilla Panna Cotta',
      category: 'Panna Cotta',
      price: 6.5,
      quantity: 2,
    },
  ];
  return (
    <main className="container">
      <div className="grid-container">
        <ProductList products={data} />
        <Cart addedItems={orderList} />
        <Modal confirmedItems={orderList} />
      </div>
    </main>
  );
}

export default App;
