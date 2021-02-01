import './call-modal.css'
import iconCrossSrc from './cross-icon.svg';

function CallModal(props) {
    return (
        <>
            <div className="call-modal-blackout" />
            <div className="call-modal">
                <button 
                    className="call-modal__close-button"
                    onClick={props.onClose}
                >
                    <img
                        className="call-modal__close-icon"
                        src={iconCrossSrc}
                        alt="Иконка крестика"
                    />
                </button>
                <h2 className="call-modal__header">Заказать звонок</h2>
                <form className="call-modal__form">
                    <label className="call-modal__lable" htmlFor="name">
                        Имя:
                </label><br />
                    <input
                        className="call-modal__field"
                        type="text"
                        id="name"
                        name="name"
                    /><br />
                    <label className="call-modal__lable" htmlFor="phone">
                        Телефон: <span className="call-modal__lable-required">*</span>
                    </label><br />
                    <input
                        className="call-modal__field"
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                    />
                    <p className="call-modal__form-text">
                        Отправляя данную форму, я подтверждаю, что ознакомлен с&nbsp;
                    <a className="call-modal__form-link" href="">
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
            </div>
        </>
    )
}

export { CallModal };