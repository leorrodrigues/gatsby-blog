import React from 'react';

import { TransitionPortal } from 'gatsby-plugin-transition-link';
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
            <TransitionPortal level="top">
                <Sidebar />
                <MenuBar />
            </TransitionPortal>
            <S.LayoutMain>{children}</S.LayoutMain>
        </S.LayoutWrapper>
    );
};

export default Layout;
