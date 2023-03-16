import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CountriesPage from './pages/CountriesPage/CountriesPage';
import CountryPage from './pages/CountryPage/CountryPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { AppRoute } from './const';

const App = () => {
    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route
                        path={AppRoute.Home}
                        element={<CountriesPage />}
                    />
                    <Route
                        path={AppRoute.CardDetail}
                        element={<CountryPage />}
                    />
                    <Route
                        path={AppRoute.NotFound}
                        element={<NotFoundPage />}
                    />
                </Routes>
            </Main>
        </>
    );
};

export default App;
