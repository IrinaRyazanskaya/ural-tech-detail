import { Navigation } from '../components/navigation';
import { Header } from '../components/header';
import { Divider } from '../components/divider';
import { AboutPage } from '../pages/about';
import { Footer } from '../components/footer';
import { Contacts } from '../pages/contacts';
import { Guarantees } from '../pages/guarantees-and-return';
import { Details } from '../pages/company-details';
import { Cooperation } from '../pages/cooperation';
import { Delivery } from '../pages/delivery-and-payment';
import { HomePage } from '../pages/home-page';

function Application() {
    return (
        <div>
            <Navigation />
            <Header />
            <Divider />
            <HomePage />
            <Footer />
        </div>
    )
}

export { Application };
