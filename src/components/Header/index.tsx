"use client"

import * as React from 'react';

import classes from './header.module.css';
import NavigationItems from './NavItems'
import Hamburger from '../Hamburger';

import Logo from '../Logo'
import { addClassNames } from '@/utils/functions';

const Header = () => {
    const [menuVisible, setMenuVisible] = React.useState(false)

    const toggleVisibility = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className={`${classes['Header']}`}>
            {/* mobile menu */}
            <div className={classes['MobileTopBar']}>
                <span className={classes.Drawer}>
                    <Hamburger
                        clicked={toggleVisibility}
                        showMenu={menuVisible}
                    />
                </span>
                <div className='absolute z-[100] h-[50px] border border-2 left-0 right-0 pointer-events-none '>
                    <span className={
                        addClassNames(
                            'w-[120px] h-[30px] md:w-[192px] md:h-[41px]',
                            ' relative border border-[red]'
                        )
                    }><Logo /></span>
                </div>

            </div>
            {/* desktop menu */}
            <div className={classes["MenuItemsWrapper"]}>
                <span className={
                    addClassNames(
                        'w-[120px] h-[30px] md:w-[192px] md:h-[41px] relative'
                    )
                }><Logo /></span>
                <NavigationItems
                    clicked={toggleVisibility}
                    showMobile={menuVisible}
                />
            </div>
        </header>
    )
}

export default Header