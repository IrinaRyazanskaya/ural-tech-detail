import './footer.css';
import iconPriceSrc from './price-icon.svg';
import iconRequestSrc from './request-icon.svg';
import iconCallSrc from './call-icon.svg';
import iconPhoneSrc from './phone-icon.svg';
import iconEmailSrc from './email-icon.svg';
import iconPlaceholderSrc from './placeholder-icon.svg';

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__actions">
                <a className="footer__action-link">
                    <img 
                        className="footer__action-icon"
                        src={iconPriceSrc}
                        alt="Иконка прайс-листа"
                    />
                    <span className="footer__price-list">СМОТРЕТЬ ПРАЙС-ЛИСТ</span>
                </a>
                <button className="footer__action-button">
                    <img 
                        className="footer__action-icon"
                        src={iconRequestSrc}
                        alt="Иконка отправки заявки"
                    />
                    ОТПРАВИТЬ ЗАЯВКУ
                </button>
                <button className="footer__action-button">
                    <img 
                        className="footer__action-icon"
                        src={iconCallSrc}
                        alt="Иконка заказа звонка"
                    />
                    ЗАКАЗАТЬ ЗВОНОК
                </button>
            </div>
            <div className="footer__links">
                <a className="footer__link" href="">Информация о компании</a>
                <a className="footer__link" href="">Доставка и оплата</a>
                <a className="footer__link" href="">Гарантии и возврат</a>
            </div>
            <div className="footer__links">
                <a className="footer__link" href="">Реквизиты компании</a>
                <a className="footer__link" href="">Сотрудничество</a>
                <a className="footer__link" href="">Контактная информация</a>
            </div>
            <div className="footer__contacts">
                <div className="footer__phones">
                    <img 
                        className="footer__phones-icon"
                        src={iconPhoneSrc}
                        alt="Иконка телефоноа"
                    />
                    <div className="footer__phone-numbers">
                        <a className="footer__phone-number" href="tel:+73513264004">
                            +7 (3513) 264-004
                        </a>
                        <a className="footer__phone-number" href="tel:+79193151000">
                            +7 (919) 315-10-00
                        </a>
                    </div>
                </div>
                <div className="footer__emails">
                    <img 
                        className="footer__emails-icon"
                        src={iconEmailSrc}
                        alt="Иконка email"
                    />
                    <div className="footer__email-addresses">
                        <a className="footer__email-address" href="mailto:gruz_74@mail.ru">
                            gruz_74@mail.ru отдел продаж	
                        </a>
                        <a className="footer__email-address" href="mailto:89193151000@mail.ru">
                            89193151000@mail.ru отдел закупок
                        </a>
                    </div>
                </div>
                <div className="footer__location">
                    <img 
                        className="footer__placeholder-icon"
                        src={iconPlaceholderSrc}
                        alt="Иконка места на карте"
                    />
                    <div className="footer__address">
                        <address className="footer__address-text">
                            Челябинская область, город Миасс,<br />Тургоякское шоссе,
                            дом № 3/16,<br />помещение 1
                        </address>
                        <a className="footer__map-link" href="">Карта проезда</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer };