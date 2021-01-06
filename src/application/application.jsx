import { Divider } from '../components/divider';
import { AboutPage } from '../pages/about';

function Application() {
    return (
        <div>
            <div>Навигация</div>
            <div>Шапка</div>
            <Divider />
            <AboutPage />
            <div>Подвал</div>
        </div>
    )
}

export { Application };
