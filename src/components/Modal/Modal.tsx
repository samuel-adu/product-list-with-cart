import { Fragment } from 'react';
import checkIcon from '/src/assets/images/icon-order-confirmed.svg';
import './Modal.css';

interface Item {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  quantity: number;
}

type ModalProps = {
  confirmedItems: Item[];
};

function Modal({ confirmedItems }: ModalProps) {
  function getImageUrl(path: string) {
    return new URL(`/src/assets/images/${path}`, import.meta.url).href;
  }

  return (
    <div className="modal">
      <div className="modal__header">
        <img src={checkIcon} alt="" className="modal__icon" />
        <p className="modal__heading">order confirmed</p>
        <p className="modal__text">We hope you enjoy your food!</p>
      </div>

      <div className="modal__body">
        <ul className="modal__list">
          {confirmedItems.map((item, index) => {
            const amount = item.price * item.quantity;
            return (
              <Fragment key={item.name}>
                <li>
                  <div className="confirmed-item">
                    <img
                      src={getImageUrl(item.image.thumbnail)}
                      alt={`a plate of ${item.name.toLocaleLowerCase()}`}
                      className="confirmed-item__image"
                    />

                    <div className="confirmed-item__desc">
                      <p className="confirmed-item__name">{item.name}</p>
                      <div className="confirmed-item__order">
                        <p className="confirmed-item__quantity">
                          {item.quantity}x
                        </p>
                        <p className="confirmed-item__price">
                          @${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <p className="confirmed__amount">${amount.toFixed(2)}</p>
                  </div>
                </li>
                {index < confirmedItems.length - 1 && (
                  <div className="separator separator--sm"></div>
                )}
              </Fragment>
            );
          })}
        </ul>

        <div className="separator separator--lg"></div>

        <div className="confirmed__total">
          <p className="confirmed__total-text">Order Total</p>
          <p className="confirmed__total-amount">$46.50</p>
        </div>
      </div>

      <div className="modal__footer">
        <button className="btn btn--primary">start new order</button>
      </div>
    </div>
  );
}

export default Modal;
