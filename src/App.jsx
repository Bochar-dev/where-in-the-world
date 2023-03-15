import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MainPage from './pages/MainPage/MainPage';
import CardDetailPage from './pages/CardDetailPage/CardDetailPage';
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
                        element={<MainPage />}
                    />
                    <Route
                        path={AppRoute.CardDetail}
                        element={<CardDetailPage />}
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
