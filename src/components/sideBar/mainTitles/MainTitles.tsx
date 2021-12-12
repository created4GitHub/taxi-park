import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { dispatchIsDataUpdated, resetFilter, updateIsAddNewUnit } from "../../../redux/actions/actions";
import { Button } from "../../regularComponents/button/Button";
import { TitlesLinks } from "../../../constants/mainTitles";

import drivers from "../../../img/drivers.svg";
import cars from "../../../img/cars.svg";

interface Props {
    isActive: string;
    setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

interface Titles {
    title: string;
    path: string;
    name: string;
}

const MainTitles = ({ isActive, setIsActive }: Props) => {
    const dispatch = useDispatch();

    const mapItems = (({ name, title, path }: Titles) => {
        const className = isActive !== title ? "route-button path" : "route-button path active";
        const src = title === "Drivers" ? drivers : cars;

        const openUnit = ({ title }: any) => {
            setIsActive(title);
            dispatch(updateIsAddNewUnit(null));
            dispatch(resetFilter());
            dispatch(dispatchIsDataUpdated());
        }

        const addUnit = () => {
            setIsActive(title);
            dispatch(updateIsAddNewUnit(title));
            dispatch(resetFilter());
            dispatch(dispatchIsDataUpdated());
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
                                {name}
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
