import { Header } from '../components/header';
import { Divider } from '../components/divider';
import { AboutPage } from '../pages/about';
import { Footer } from '../components/footer';

function Application() {
    return (
        <div>
            <div>Навигация</div>
            <Header />
            <Divider />
            <AboutPage />
            <Footer />
        </div>
    )
}

export { Application };
