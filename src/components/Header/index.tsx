import { useMemo } from 'react';
import { LOCALES } from '../../intl/locales';
import styled from 'styled-components'

import { Language } from "../../interfaces";
import { GREY_COLOR, LIGHT_GREY_COLOR } from '../../constants/style.colors';

import logo from '../../ascets/img/png/taxi.png';
import './header.style.scss';

const uuid = require("react-uuid");

const Select = styled.select`
    width: 150px;
    height: 30px;
    margin-right: 30px;
    padding: 0 4px;
    border: 1px solid ${LIGHT_GREY_COLOR};
    box-sizing: border-box;
    border-radius: 8px;
    color: ${GREY_COLOR};
    font-size: 12px;
`;

interface Props {
    localeLanguage: Language;
    setLocale: React.Dispatch<React.SetStateAction<Language>>;
}

const Header = ({ setLocale, localeLanguage }: Props) => {

    // TODO remove
    const itemsMap = (item: string) => {
        return (
            <option key={uuid()} 
                value={item}>
                {item}
            </option>
        )
    }

    const mappedItems = useMemo(() => Object.keys(LOCALES).map(itemsMap), [LOCALES])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const local: Record<string, string> = {
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
                        <img src={logo} 
                            alt="#" 
                            width='180px' 
                            height='40px' 
                        />
                    </div>
                </div>
                <Select onChange={handleChange}>
                    <option hidden>
                        {localeLanguage !== null ?
                        localeLanguage.name 
                        : 'ENGLISH'}
                    </option>
                    {mappedItems}
                </Select>
            </div>
        </header>
    )
}

export default Header;
