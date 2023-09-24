// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Импортируйте созданный Redux Store
import UsersListPage from './pages/UsersListPage'; // Импортируйте компонент UsersListPage

ReactDOM.render(
    <Provider store={store}>
        <UsersListPage />
    </Provider>,
    document.getElementById('root')
);

