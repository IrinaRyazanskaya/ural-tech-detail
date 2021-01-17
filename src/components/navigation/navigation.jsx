import './navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__items">
                <li className="navigation__item">
                    <a className="navigation__item-link" href="">
                        Главная
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__item-link" href="">
                        О компании
                    </a>
                </li>
                <li className="navigation__item">
                    <details className="navigation__sub-menu-container" href="">
                        <summary className="navigation__trigger">
                            <div className="navigation__trigger-content">Покупателю</div>
                        </summary>
                        <nav className="navigation__sub-menu">
                            <ul className="navigation__sub-menu-items">
                                <li className="navigation__sub-menu-item">
                                    <a 
                                        className="navigation__sub-menu-link"
                                        href=""
                                    >
                                            Доставка и оплата
                                    </a>
                                </li>
                                <li className="navigation__sub-menu-item">
                                    <a 
                                        className="navigation__sub-menu-link"
                                        href=""
                                    >
                                            Гарантии и возврат
                                    </a>
                                </li>
                                <li className="navigation__sub-menu-item">
                                    <a 
                                        className="navigation__sub-menu-link"
                                        href=""
                                    >
                                        Реквизиты
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </details>
                </li>
                <li className="navigation__item">
                    <a className="navigation__item-link" href="">
                        Сотрудничество
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__item-link" href="">
                        Контакты
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export { Navigation };