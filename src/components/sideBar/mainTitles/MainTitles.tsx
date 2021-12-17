import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { switchPage, addNewUnit } from "../../../redux/actions/actions";
import { Button } from "../../commons/button/Button";
import { TITLES_LINKS } from "../../../constants/mainTitles";
import { FormattedMessage } from "react-intl";
import { useMemo } from "react";

interface Props {
    activeTitle: string;
    setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

interface Titles {
    title: string;
    path: string;
    name: string;
    src: string;
}

const uuid = require("react-uuid");

const MainTitles = ({ activeTitle, setIsActive }: Props) => {
    const dispatch = useDispatch();
    const tabItems = (({ name, title, path, src }: Titles) => {
    const className = `route-button path ${activeTitle ? 'active' : ''}`

    const openUnit = () => {
        setIsActive(title);
        dispatch(switchPage(title));
    }

    const addUnit = () => {
        setIsActive(title);
        dispatch(addNewUnit(title, false));
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
                            <FormattedMessage id={name} />
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

const mappedItems = useMemo(() => TITLES_LINKS.map(tabItems), [TITLES_LINKS, activeTitle]);

return (
    <div className="content__options-paragraph">
        {mappedItems}
    </div>
)
}

export default MainTitles;