import React from 'react';

import Sidebar from '../Sidebar';

import GlobalStyles from '../../styles/global';
import MenuBar from '../MenuBar';

import * as S from './styled';

interface Props {
    children?: any;
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <S.LayoutWrapper>
            <GlobalStyles />
            <Sidebar />
            <MenuBar />
            <S.LayoutMain>{children}</S.LayoutMain>
        </S.LayoutWrapper>
    );
};

export default Layout;
