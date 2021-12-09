import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { resetFilter, updateIsAddNewUnit } from "../../../store/actions/actions";
import { Button } from "../../regularComponents/button/Button";
import { TitlesLinks } from "../../../constants/mainTitles";

import drivers from "../../../img/drivers.svg";
import cars from "../../../img/cars.svg";

interface Props {
    isActive: string;
    setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

const MainTitles = ({ isActive, setIsActive }: Props) => {
    const dispatch = useDispatch();

    return (
        <div className="content__options-paragraph">
            {TitlesLinks.map(({ title, path }) => {
                const className = isActive !== title ? "route-button path" : "route-button path active";
                const src = title === "Drivers" ? drivers : cars;

                const closeUnit = () => {
                    setIsActive(title);
                    dispatch(updateIsAddNewUnit(false));
                    dispatch(resetFilter());
                }

                const openUnit = () => {
                    setIsActive(title);
                    dispatch(updateIsAddNewUnit(true));
                    dispatch(resetFilter());
                }
                return (
                    <div className="paragraph_element-route" key={title}>
                        <Link to={path}>
                            <Button
                                className={className}
                                onClick={closeUnit}
                                btnText={
                                    <p className="options-paragraph">
                                        <img
                                            className="options-img"
                                            src={src}
                                            alt="alt" />
                                        {title}
                                    </p>
                                }
                            />
                            <Button
                                onClick={openUnit}
                                btnText="+"
                                className="addNewUnit"
                            />
                        </Link>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default MainTitles;
