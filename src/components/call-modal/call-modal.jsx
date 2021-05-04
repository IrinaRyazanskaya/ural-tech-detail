import { useState } from "react";
import { orderCall } from "../../api/order-call";

import "./call-modal.css";
import iconCrossSrc from "./cross-icon.svg";

function CallModal(props) {
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [requestState, setRequestState] = useState("unknown");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRequestState("pending");
    orderCall(buyerName, buyerPhone)
      .then(() => {
        setRequestState("success");
      })
      .catch(() => {
        setRequestState("failure");
      });
  };

  const form = (
    <form className="call-modal__form" onSubmit={handleFormSubmit}>
      <label className="call-modal__lable" htmlFor="name">
        Имя: <span className="call-modal__lable-required">*</span>
      </label>
      <br />
      <input
        className="call-modal__field"
        type="text"
        id="name"
        name="name"
        value={buyerName}
        onChange={(event) => {
          setBuyerName(event.target.value);
        }}
        required
      />
      <br />
      <label className="call-modal__lable" htmlFor="phone">
        Телефон: <span className="call-modal__lable-required">*</span>
      </label>
      <br />
      <input
        className="call-modal__field"
        type="tel"
        id="phone"
        name="phone"
        value={buyerPhone}
        onChange={(event) => {
          setBuyerPhone(event.target.value);
        }}
        required
      />
      <p className="call-modal__form-text">
        Отправляя данную форму, я подтверждаю, что ознакомлен с&nbsp;
        <a className="call-modal__form-link" target="_blank" href="/privacy">
          политикой конфиденциальности
        </a>
        &nbsp;и согласен на хранение и обработку персональных данных.
      </p>
      <div className="call-modal__button-container">
        <input
          className="call-modal__send-button"
          type="submit"
          value="ОТПРАВИТЬ"
        />
      </div>
    </form>
  );

  const pending = <div>Заявка отправляется</div>;

  const success = <div>Форма отправлена</div>;

  const failure = (
    <div>
      Что-то пошло не так
      <button
        onClick={() => {
          setRequestState("unknown");
        }}
      >
        Попробовать еще раз
      </button>
    </div>
  );

  let content;

  if (requestState === "pending") {
    content = pending;
  } else if (requestState === "success") {
    content = success;
  } else if (requestState === "failure") {
    content = failure;
  } else {
    content = form;
  }

  return (
    <>
      <div className="call-modal-blackout" />
      <div className="call-modal">
        <button className="call-modal__close-button" onClick={props.onClose}>
          <img
            className="call-modal__close-icon"
            src={iconCrossSrc}
            alt="Иконка крестика"
          />
        </button>
        <h2 className="call-modal__header">Заказать звонок</h2>
        {content}
      </div>
    </>
  );
}

export { CallModal };
