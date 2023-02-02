import Header from './components/Header/Header';
import Controlls from './components/Controlls/Controlls';
import Main from './components/Main/Main';

const App = () => {
    return (
        <>
            <Header />
            <Main>
                <Controlls />
            </Main>
        </>
    );
};

export default App;
