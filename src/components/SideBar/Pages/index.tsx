import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { switchPage, addNewUnit, setIsPageCar } from "../../../redux/actions";
import { Button } from "../../commons/Button";
import { PAGES_LINKS } from "../../../constants/pages";

interface Props {
    activePage: string;
    setIsactivePage: React.Dispatch<React.SetStateAction<string>>;
}

interface Tab {
    pageName: string;
    path: string;
    title: string;
    src: string;
}

const uuid = require("react-uuid");

const Pages = ({ activePage, setIsactivePage }: Props) => {
    const setActive = (pageName: string) => {
        setIsactivePage(pageName);
        dispatch(setIsPageCar(pageName));
    }
    const dispatch = useDispatch();
    const tabItems = (({ title, pageName, path, src }: Tab) => {
        const className = `route-button path ${activePage === pageName ? 'active' : ''}`

        const openUnit = () => {
            setActive(pageName);
            dispatch(switchPage(pageName));
        }

        const addUnit = () => {
            setActive(pageName);
            dispatch(addNewUnit(pageName, false));
        }

        return (
            <div className="paragraph_element-route" key={uuid()}>
                <Link to={path}>
                    <Button
                        className={className}
                        onClick={openUnit}
                        btnText={
                            <p className="options-paragraph">
                                <img
                                    className="options-img"
                                    src={src}
                                    alt="alt" />
                                <FormattedMessage id={title} />
                            </p>
                        }
                    />
                    <Button
                        onClick={addUnit}
                        btnText='+'
                        className="addNewUnit"
                    />
                </Link>
            </div>
        )
    })
    const mappedItems = useMemo(() => PAGES_LINKS.map(tabItems), [PAGES_LINKS, activePage]);

    return (
        <div className="content__options-paragraph">
            {mappedItems}
        </div>
    )
}

export default Pages;