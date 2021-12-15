import { SetStateAction, useMemo } from 'react';
import { LOCALES } from '../../i18n/locales';
import styled from 'styled-components'

import logo from '../../ascets/img/png/taxi.png';
import './header.style.scss';

const uuid = require("react-uuid");

const Select = styled.select`
    width: 150px;
    height: 30px;
    margin-right: 30px;
    padding: 0 4px;
    border: 1px solid #C5C6CE;
    box-sizing: border-box;
    border-radius: 8px;
    color: #6B6F82;
    font-size: 12px;
`;

interface Props {
    setLocale: React.Dispatch<SetStateAction<Record<string, string>>>
}

const Header = ({ setLocale }: Props) => {
    const nameLocal = JSON.parse(localStorage.getItem('internationalization')!)

    const itemsMap = (item: string) => {
        return (
            <option key={uuid()} value={item}>{item}</option>
        )
    }

    const mapped = useMemo(() => Object.keys(LOCALES).map(itemsMap), [LOCALES])

    const handleChenge = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
                        <img src={logo} alt="#" width='180px' height='40px' />
                    </div>
                </div>
                <Select onChange={handleChenge}>
                    <option hidden>{nameLocal !== null ? nameLocal.name : 'ENGLISH'}</option>
                    {mapped}
                </Select>
            </div>
        </header>
    )
}

export default Header;
