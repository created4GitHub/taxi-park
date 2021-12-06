import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { openAddNewUnit, closeAddNewUnit } from "../../../store/actions/actions";
import { Button } from "../../regularComponents/button/Button";

import drivers from "../../../img/drivers.svg";
import cars from "../../../img/cars.svg";

interface Props {
    title: string;
    link: string;
    state: { isActive: string, setIsActive: React.Dispatch<React.SetStateAction<string>> };
}

export default function Title({ title, link, state: { isActive, setIsActive } }: Props) {

    const dispatch = useDispatch();

    const className = isActive !== title ? "but up" : "but up active";
    const src = title === "Drivers" ? drivers : cars;

    return (
        <div className="elem">
            <Link to={link}>
                <Button
                    className={className}
                    onClick={() => {
                        setIsActive(title);
                        dispatch(closeAddNewUnit());
                    }}
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
                    onClick={() => {
                        setIsActive(title);
                        dispatch(openAddNewUnit());
                    }}
                    btnText="+"
                    className="add"
                />
            </Link>
        </div>
    )
}