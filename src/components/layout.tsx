import React from 'react';

interface Props {
    children?: any;
}

const Layout = ({ children }: Props): JSX.Element => {
    return <main>{children}</main>;
};

export default Layout;
