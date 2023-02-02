import { useState, useEffect } from 'react';
import { ThemeMode } from '../const';

const getCurrentTheme = () => {
    const theme = window.localStorage.getItem('theme');

    if (theme) {
        return theme;
    }

    return ThemeMode.Light;
};

const setCurrentTheme = (theme) => {
    window.localStorage.setItem('theme', theme);
};

export const useThemeSwitcher = () => {
    const currentTheme = getCurrentTheme();

    const [theme, setTheme] = useState(currentTheme);

    useEffect(() => {
        setCurrentTheme(theme);
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, setTheme];
};