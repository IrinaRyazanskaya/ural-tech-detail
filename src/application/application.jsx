import { Navigation } from '../components/navigation';
import { Header } from '../components/header';
import { Divider } from '../components/divider';
import { AboutPage } from '../pages/about';
import { Footer } from '../components/footer';
import { Contacts } from '../pages/contacts';

function Application() {
    return (
        <div>
            <Navigation />
            <Header />
            <Divider />
            <Contacts />
            <Footer />
        </div>
    )
}

export { Application };
