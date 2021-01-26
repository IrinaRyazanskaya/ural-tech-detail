import './request-modal.css';
import iconCrossSrc from './cross-icon.svg';

function RequestModal() {
    return (
        <div className="request-modal">
            <button className="request-modal__close-button">
                <img
                    className="request-modal__close-icon"
                    src={iconCrossSrc}
                    alt="Иконка крестика"
                />
            </button>
            <h2 className="request-modal__header">Отправить заявку</h2>
            <form className="request-modal__form">
                <p className="request-modal__lable">Файл заявки:</p>
                <input 
                    className="request-modal__field-file"
                    type="file"
                    id="file"
                    name="file"
                />
                <label class="request-modal__file-wrapper" for="file">
                    <div class="request-modal__file-fake">Файл не выбран</div>
                    <div class="request-modal__file-button">Выбрать</div>
                </label>
                <label className="request-modal__lable" for="name">
                    Имя:
                </label><br />
                <input 
                    className="request-modal__field"
                    type="text"
                    id="name"
                    name="name"
                /><br />
                <label className="request-modal__lable" for="email">
                    E-mail: <span className="request-modal__lable-required">*</span>
                </label><br />
                <input 
                    className="request-modal__field"
                    type="email"
                    id="email"
                    name="email"
                    required
                /><br />
                <label className="request-modal__lable" for="phone">
                    Телефон: <span className="request-modal__lable-required">*</span>
                </label><br />
                <input 
                    className="request-modal__field"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                />
                <p className="request-modal__lable">Комментарий к заявке:</p>
                <textarea 
                    className="request-modal__comment"
                    name="comment"
                    id="comment"
                    rows="5"
                >
                </textarea>
                <p className="request-modal__form-text">
                    Отправляя данную форму, я подтверждаю, что ознакомлен с&nbsp; 
                    <a className="request-modal__form-link" href="">   
                        политикой конфиденциальности
                    </a>  
                    &nbsp;и согласен на хранение и обработку персональных данных.
                </p>
                <div className="request-modal__button-container">
                    <input 
                        className="request-modal__send-button"
                        type="submit" 
                        value="ОТПРАВИТЬ"
                    />
                </div>
            </form>
        </div>
    )
}

export { RequestModal };