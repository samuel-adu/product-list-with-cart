import checkIcon from '/src/assets/images/icon-order-confirmed.svg';
function Modal() {
  return (
    <div className="modal">
      <div className="modal__header">
        <img src={checkIcon} alt="" />
        <p className="modal__heading">order confirmed</p>
        <p className="modal__text">We hope you enjoy your food!</p>
      </div>

      <div className="modal__body"></div>

      <div className="modal__footer">
        <button className="btn btn--primary">start new order</button>
      </div>
    </div>
  );
}

export default Modal;
