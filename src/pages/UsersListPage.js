import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,
} from '../Redux/actions';

const UsersListPage = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsersRequest());
        setTimeout(() => {
            const fakeUsers = [
                { id: 1, name: 'Пользователь 1' },
                { id: 2, name: 'Пользователь 2' },
            ];
            dispatch(fetchUsersSuccess(fakeUsers));
        }, 2000);
    }, [dispatch]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    return (
        <div>
            <h1>Список пользователей</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersListPage;
