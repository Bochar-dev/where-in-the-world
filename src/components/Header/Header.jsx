import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from '../Container/Container';
import { ThemeMode } from '../../const';
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher';
import { HeaderElement } from './HeaderElement';
import { HeaderInner } from './HeaderInner';
import { HeaderTitle } from './HeaderTitle';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
    const [theme, setTheme] = useThemeSwitcher();

    const toggleTheme = () => setTheme(theme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);

    return (
        <HeaderElement>
            <Container>
                <HeaderInner>
                    <HeaderTitle to="/">Where in the world?</HeaderTitle>
                    <ThemeSwitcher onClick={toggleTheme}>
                        {`${theme} mode`}
                        {theme === ThemeMode.Light
                            ? <IoMoonOutline size="14px" />
                            : <IoMoon size="14px" />}
                    </ThemeSwitcher>
                </HeaderInner>
            </Container>
        </HeaderElement>
    );
};

export default Header;
