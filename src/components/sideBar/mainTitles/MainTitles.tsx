import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { switchPage, addNewUnit } from "../../../redux/actions/actions";
import { Button } from "../../regularComponents/button/Button";
import { TitlesLinks } from "../../../constants/mainTitles";
import { FormattedMessage } from "react-intl";

interface Props {
    isActive: string;
    setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

interface Titles {
    title: string;
    path: string;
    name: string;
    src: string;
}

const MainTitles = ({ isActive, setIsActive }: Props) => {
    const dispatch = useDispatch();

    const mapItems = (({ name, title, path, src }: Titles) => {
        const className = isActive !== title ? "route-button path" : "route-button path active";

        const openUnit = () => {
            setIsActive(title);
            dispatch(switchPage(title));
        }

        const addUnit = () => {
            setIsActive(title);
            dispatch(addNewUnit(title));
        }

        return (
            <div className="paragraph_element-route" key={title}>
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
                        btnText={<p className='addNewUnit-paragraph'>+</p>}
                        className="addNewUnit"
                    />
                </Link>
            </div>
        )
    })

    const mappedItems = TitlesLinks.map(mapItems);

    return (
        <div className="content__options-paragraph">
            {mappedItems}
        </div>
    )
}

export default MainTitles;
