import React from 'react';
import Logo from './logo'
import Menunavlist from './menunavlist'
import Mainbtngroup from './mainbtngroup'
import Cartfavsearch from './cartfavsearch'
import Socials from './socials'

function Header(props) {
    return (
        <header className="header-area clearfix bp-xs-on">
            <Logo />
            <Menunavlist />
            <Mainbtngroup />
            <Cartfavsearch />
            <Socials />
        </header>
    )
}

export default Header;
