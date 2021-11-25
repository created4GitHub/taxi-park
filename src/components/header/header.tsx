import logo from '../../img/taxi.png';
import icon from '../../img/IconsRow.svg';

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
        </div>
    )
}

export default Header;
