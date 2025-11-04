import React, { useEffect, useState, useRef } from 'react';
// IMPORTA O ÍCONE NOVO
import { FaBars } from 'react-icons/fa';

import LogoHeader from './Logo/LogoHeader';
import Menu from './Menu/Menu';
import SocialIcons from '../SocialIcons/SocialIcons';
import { slideUp, slideDown } from '../../modules/custom-lib'

import './Header.css';

const Header = () => {
    const menuMobile = useRef(null);
    const [clicked, setClicked] = useState(false);
    const [width, setWidth] = useState({ width: window.innerWidth });

    useEffect(() => {
        const handleResize = () => setWidth({ width: window.innerWidth })
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [width])

    const handleClickMenuIcon = (event) => {
        if (!clicked) {
            setClicked(true);
            slideDown(menuMobile.current, 500);
        } else {
            setClicked(false);
            slideUp(menuMobile.current, 500);
        }

        // Corrigido: o 'event.target' original precisa ser preservado
        const currentIcon = event.currentTarget; 

        const closeMenu = (e) => {
            // Se o clique não for no menu E não for no ícone
            if (!menuMobile.current.contains(e.target) && e.target !== currentIcon) {
                setClicked(false);
                slideUp(menuMobile.current, 500);
                window.removeEventListener('click', closeMenu);
            }
            // Se o clique for num link do menu
            if (e.target.localName === 'a' && menuMobile.current.contains(e.target)) {
                 setClicked(false);
                 slideUp(menuMobile.current, 500);
                 window.removeEventListener('click', closeMenu);
            }
        };
        
        // Adiciona o listener só depois do clique
        setTimeout(() => window.addEventListener('click', closeMenu), 0);
    }

    return (
        <header>
            <div className="flexbox header-flex">
                <div className="header-left">
                    <LogoHeader />
                </div>

                <div className="header-right">
                    <div className="icon-menu-mob">
                        {/* ÍCONE ANTIGO TROCADO PELO NOVO */}
                        <FaBars onClick={handleClickMenuIcon} />
                    </div>
                    <Menu className="menu-desktop" />
                    <Menu className="menu-mobile" ref={menuMobile} />
                    <SocialIcons class={"sm-icons-header"} />
                </div>
            </div>
        </header>
    )
}

export default Header;