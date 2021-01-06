import { Header } from '../components/header';
import { Divider } from '../components/divider';
import { AboutPage } from '../pages/about';

function Application() {
    return (
        <div>
            <div>Навигация</div>
            <Header />
            <Divider />
            <AboutPage />
            <div>Подвал</div>
        </div>
    )
}

export { Application };
