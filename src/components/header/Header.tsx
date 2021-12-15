import { useMemo } from 'react';
import { LOCALES } from '../../i18n/locales';

import logo from '../../img/taxi.png';
import './header.style.scss';

const uuid = require("react-uuid");

const Header = ({ setLocale }: any) => {
    const nameLocal = JSON.parse(localStorage.getItem('internationalization')!)

    const itemsMap = (item: string) => {
        return (
            <option key={uuid()} value={item}>{item}</option>
        )
    }

    const mapped = useMemo(() => Object.keys(LOCALES).map(itemsMap), []);

    const handleChenge = (event: any) => {
        const local: any = {
            value: LOCALES[event.target.value],
            name: event.target.value
        }

        const sItem = JSON.stringify(local);

        localStorage.setItem('internationalization', sItem);

        setLocale(local)
    }

    return (
        <header className="header">
            <div className='header__content'>
                <div className='header__content leftSide'>
                    <div className='header__content logo'>
                        <img src={logo} alt="#" width='180px' height='40px' />
                    </div>
                </div>
                <select onChange={handleChenge} className='header__content-select_internationalization'>
                    <option hidden>{nameLocal !== null ? nameLocal.name : 'ENGLISH'}</option>
                    {mapped}
                </select>
            </div>
        </header>
    )
}

export default Header;
