import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App"
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="header"></div>
    <div className="content">
      <div className="content__options">
        <div className="content__options-button"></div>
        <div className="content__options-filter"></div>
      </div>
      <div className="content__items-information"></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
