import React from "react";

import { Button } from "./components/button/index";
import { Input } from "./components/input/index";

import "./app.scss";

const App: React.FC = () => {
    const optionsButtons = [
        {
            className: "options-buttons",
            disabled: false,
            btnText: "Drivers",
            onClick: () => console.log("test"),
        },
        {
            className: "options-buttons",
            disabled: false,
            btnText: "Cars",
            onClick: console.log("test"),
        },
    ];
    return (
        <div className="container">
            <div className="header"></div>
            <div className="content">
                <div className="content__options">
                    <div className="content__options-buttons">
                        {optionsButtons.map((item, index) => {
                            return (
                                <Button
                                    key={index}
                                    className={item.className}
                                    btnText={item.btnText}
                                    disabled={item.disabled}
                                    onClick={() => console.log("test")}
                                />
                            );
                        })}
                    </div>
                    <div className="content__options-filter"></div>
                </div>
                <div className="content__items-information"></div>
            </div>
        </div>
    );
};

export default App;
