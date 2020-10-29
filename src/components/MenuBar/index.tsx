/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import { Home, Grid } from 'styled-icons/boxicons-solid';
import {
    SearchAlt2 as Search,
    UpArrowAlt as Arrow,
} from 'styled-icons/boxicons-regular';
import { LightBulb as Light } from 'styled-icons/octicons';
import { ThList as List } from 'styled-icons/typicons';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const MenuBar: React.FC = () => {
    const [theme, setTheme] = useState<null | string>(null);
    const [display, setDisplay] = useState<null | string>(null);

    useEffect(() => {
        setTheme(window.__theme);
        setDisplay(window.__display);

        window.__onThemeChange = () => setTheme(window.__theme);
        window.__onDisplayChange = () => setDisplay(window.__display);
    }, []);

    const isDarkMode = theme === 'dark';
    const isListMode = display === 'list';

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.6}
                    to="/"
                    title="Voltar para Home"
                >
                    <S.MenuBarItem>
                        <Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.6}
                    to="/search"
                    title="Pesquisar"
                >
                    <S.MenuBarItem>
                        <Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem
                    title="Mudar o tema"
                    onClick={() => {
                        window.__setPreferredTheme(
                            isDarkMode ? 'light' : 'dark',
                        );
                    }}
                    className={theme}
                >
                    <Light />
                </S.MenuBarItem>
                <S.MenuBarItem
                    title="Mudar a visualização"
                    onClick={() => {
                        window.__setPreferredDisplay(
                            isListMode ? 'grid' : 'list',
                        );
                    }}
                    className="display"
                >
                    {isListMode ? <Grid /> : <List />}
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo">
                    <Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    );
};

export default MenuBar;
