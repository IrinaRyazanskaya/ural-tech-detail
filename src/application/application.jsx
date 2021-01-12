import { Navigation } from '../components/navigation';
import { Header } from '../components/header';
import { Divider } from '../components/divider';
import { AboutPage } from '../pages/about';
import { Footer } from '../components/footer';
import { Contacts } from '../pages/contacts';
import { Guarantees } from '../pages/guarantees-and-return';

function Application() {
    return (
        <div>
            <Navigation />
            <Header />
            <Divider />
            <Guarantees />
            <Footer />
        </div>
    )
}

export { Application };
