import React from 'react';
import "./app.scss"

let App: React.FC = () => {
    return (
        <div>
            <div className="header"></div>
            <div className="content">
                <div className="content__options">
                    <div className="content__options-button"></div>
                    <div className="content__options-filter"></div>
                </div>
                <div className="content__items-information"></div>
            </div>
        </div>
    )
}

export default App;