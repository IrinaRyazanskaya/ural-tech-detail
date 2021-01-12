import './cooperation.css';
import iconDetailSrc from './detail-icon.svg';
import iconTruckSrc from './truck-icon.svg';
import iconPercentSrc from './percent-icon.svg';

function Cooperation() {
    return (
        <article className="cooperation">
            <h2 className="cooperation__header">Сотрудничество</h2>
            <p className="cooperation__offer">
                Приглашаем к сотрудничеству поставщиков: производителей запасных частей и
                комплектующих для грузовых автомобилей, посредников.
            </p>
            <div className="cooperation__container">
                <img 
                    className="cooperation__icon" 
                    src={iconDetailSrc}
                    alt="Иконка запчасти"
                />
                <p className="cooperation__advantages">
                    Более 300 наименований запчастей в наличии на складе
                </p>
                <img 
                    className="cooperation__icon" 
                    src={iconTruckSrc}
                    alt="Иконка грузовика"
                />
                <p className="cooperation__advantages">
                    Отгрузка заказа осуществляется на следующий день от подачи заявки,
                    при условии наличия товара на складе.
                </p>
                <img 
                    className="cooperation__icon"
                    src={iconPercentSrc}
                    alt="Иконка процента"
                />
                <p className="cooperation__advantages">
                    Для постоянных клиентов специальные условия рассрочки или отсрочки платежа,
                    а также скидки
                </p>
            </div>
            <p className="cooperation__offer">
                ООО ТД «УралТехДеталь» приобретёт запчасти к а/м "Урал" как новые, так и после
                длительного хранения (консервации).
            </p>
            <p className="cooperation__offer">
                Мы с готовностью рассмотрим любые Ваши предложения, цены, условия доставки.
            </p>
            <p className="cooperation__offer">
                По вопросам сотрудничества свяжитесь с нами по номеру&nbsp;
                <a className="cooperation__contact" href="tel:+73513264004">
                    +7 (3513) 264-004, 
                </a>
                &nbsp;
                <a className="cooperation__contact" href="tel:+79193151000">
                    +7 (919) 315-10-00 
                </a>
                &nbsp;или направьте ваше предложение на электронный адрес&nbsp;
                <a className="cooperation__contact" href="mailto:89193151000@mail.ru">
                    89193151000@mail.ru 
                </a>
            </p>
        </article>
    )
}

export { Cooperation };