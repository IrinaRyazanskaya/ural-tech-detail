import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from '../components/navigation';
import { Header } from '../components/header';
import { MobileHeader } from '../components/mobile-header';
import { Divider } from '../components/divider';
import { About } from '../pages/about';
import { Footer } from '../components/footer';
import { Contacts } from '../pages/contacts';
import { Guarantees } from '../pages/guarantees-and-return';
import { Details } from '../pages/company-details';
import { Cooperation } from '../pages/cooperation';
import { Delivery } from '../pages/delivery-and-payment';
import { Home } from '../pages/home';

function Application() {
    const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

    return (
        <BrowserRouter>
            <Navigation />
            {isMobile ? <MobileHeader /> : <Header />}
            <Divider />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/delivery" exact>
                    <Delivery />
                </Route>
                <Route path="/guarantees" exact>
                    <Guarantees />
                </Route>
                <Route path="/details" exact>
                    <Details />
                </Route>
                <Route path="/cooperation" exact>
                    <Cooperation />
                </Route>
                <Route path="/contacts" exact>
                    <Contacts />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export { Application };
