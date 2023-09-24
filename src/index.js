import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Импортируйте ваш Redux Store
import Calculator from './App'; // Импортируйте компонент Calculator

ReactDOM.render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('root')
);

