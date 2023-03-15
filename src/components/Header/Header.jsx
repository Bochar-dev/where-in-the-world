import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from '../../styles/global';
import { ThemeMode } from '../../const';
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher';
import { Wrapper, InnerWrapper, Title, ThemeSwitcher } from './styles/';

const Header = () => {
    const [theme, setTheme] = useThemeSwitcher();

    const toggleTheme = () => setTheme(theme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);

    return (
        <Wrapper>
            <Container>
                <InnerWrapper>
                    <Title to="/">Where in the world?</Title>
                    <ThemeSwitcher onClick={toggleTheme}>
                        {`${theme} mode`}
                        {theme === ThemeMode.Light
                            ? <IoMoonOutline size="14px" />
                            : <IoMoon size="14px" />}
                    </ThemeSwitcher>
                </InnerWrapper>
            </Container>
        </Wrapper>
    );
};

export default Header;
