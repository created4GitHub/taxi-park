import logo from '../../img/taxi.png';
import icon from '../../img/IconsRow.svg';

import './header.scss';

const Header = () => {
    return(
        <header className="header">
        <div className='header__content'>
            <div className='header__content leftSide'>
                <div className='header__content logo'>
                    <img src={logo} alt="#" />
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header;
