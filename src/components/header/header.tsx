import React from "react";

import logo from '../../img/taxi.png';
import icon from '../../img/IconsRow.png';
import iconUser from '../../img/IconsUser.png';
import iconVectorDown from '../../img/IconsVectorDown.png';
import './header.scss';

const Header = () => {
    return(
        <div className='header__content'>
            <div className='header__content leftSide'>
                <div className='header__content divForButton'>
                    <button className='header__content button'>
                        <img className='button__img' src={icon} alt="" />
                    </button>
                </div>
                <div className='header__content logo'>
                    <img src={logo} alt="#" />
                </div>
            </div>
            <div className = 'header__content rightSide'>
                <div className='header__content user'>
                    <button className='header__content iconUser'>
                        <img src={iconUser} alt="#" />
                    </button>
                </div>
                <p>Admin</p>
                <div className='header__content vector'>
                    <button className='header__content vectorDown'>
                        <img src={iconVectorDown} alt="#" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;

