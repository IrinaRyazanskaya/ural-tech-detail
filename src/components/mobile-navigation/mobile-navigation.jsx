import { useState } from 'react';
import { Link } from 'react-router-dom';
import { freezeScroll, unfreezeScroll } from '../../utils/scroll';
import './mobile-navigation.css';
import mobileLogoSrc from './mobile-logo.png';

function MobileNavigation() {
    const [isInputChecked, setInputChecked] = useState(false);

    const handleToggle = (event) => {
        setInputChecked(event.target.checked);

        if (event.target.checked) {
            freezeScroll();
        } else {
            unfreezeScroll();
        }
    }

    const handleLinkClick = () => {
        setInputChecked(false);
        unfreezeScroll();
    }

    let menuClass = 'mobile-navigation__menu-list';
    let buttonClass = 'burger-menu__bar';
    if (isInputChecked) {
        menuClass = menuClass + ' mobile-navigation__menu-list_open';
        buttonClass = buttonClass + ' burger-menu__bar_open';
    }

    return (
        <nav className="mobile-navigation">
            <div className="mobile-navigation__container">
                <div className="mobile-navigation__burger-menu burger-menu">
                    <input
                        class="burger-menu__check"
                        type="checkbox"
                        id="menu-toggle"
                        name="menu-toggle"
                        checked={isInputChecked}
                        onChange={handleToggle}
                    />
                    <label class="burger-menu__button" for="menu-toggle">
                        <div className={buttonClass}></div>
                        <div className={buttonClass}></div>
                        <div className={buttonClass}></div>
                    </label>
                </div>
                <img
                    className="mobile-navigation__logo-image"
                    src={mobileLogoSrc}
                    alt="Логотип компании"
                />
            </div>
            <ul className={menuClass}>
                <li className="mobile-navigation__menu-item">
                    <Link 
                        className="mobile-navigation__link"
                        to="/"
                        onClick={handleLinkClick}
                    >
                        Главная
                    </Link>
                </li>
                <li className="mobile-navigation__menu-item">
                    <Link 
                        className="mobile-navigation__link"
                        to="/about"
                        onClick={handleLinkClick}
                    >
                        О компании
                    </Link>
                </li>
                <li className="mobile-navigation__menu-item">
                    <Link 
                        className="mobile-navigation__link"
                        to="/delivery"
                        onClick={handleLinkClick}
                    >
                        Доставка и оплата
                    </Link>
                </li>
                <li className="mobile-navigation__menu-item">
                    <Link 
                        className="mobile-navigation__link"
                        to="/guarantees"
                        onClick={handleLinkClick}
                    >
                        Гарантии и возврат
                    </Link>
                </li>
                <li className="mobile-navigation__menu-item">
                    <Link 
                        className="mobile-navigation__link"
                        to="/details"
                        onClick={handleLinkClick}
                    >
                        Реквизиты
                    </Link>
                </li>
                <li className="mobile-navigation__menu-item">
                    <Link 
                        className="mobile-navigation__link"
                        to="/cooperation"
                        onClick={handleLinkClick}
                    >
                        Сотрудничество
                    </Link>
                </li>
                <li className="mobile-navigation__menu-item">
                    <Link 
                        className="mobile-navigation__link"
                        to="/contacts"
                        onClick={handleLinkClick}
                    >
                        Контакты
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export { MobileNavigation };