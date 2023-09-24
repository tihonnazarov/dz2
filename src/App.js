import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setFirstNumber,
    setSecondNumber,
    setResult,
} from './Redux/actions';

const Calculator = () => {
    const dispatch = useDispatch();
    const { firstNumber, secondNumber, result } = useSelector((state) => state);

    const handleNumberChange = (e, field) => {
        const number = e.target.value;
        if (field === 'first') {
            dispatch(setFirstNumber(number));
        } else {
            dispatch(setSecondNumber(number));
        }
    };

    const handleOperation = (operation) => {
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            alert('Пожалуйста, заполните оба поля числами.');
            return;
        }

        switch (operation) {
            case '+':
                dispatch(setResult(Number(firstNumber) + Number(secondNumber)));
                break;
            case '-':
                dispatch(setResult(Number(firstNumber) - Number(secondNumber)));
                break;
            case '*':
                dispatch(setResult(Number(firstNumber) * Number(secondNumber)));
                break;
            case '/':
                if (Number(secondNumber) === 0) {
                    alert('Деление на ноль невозможно.');
                    return;
                }
                dispatch(setResult(Number(firstNumber) / Number(secondNumber)));
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <input
                type="number"
                value={firstNumber}
                onChange={(e) => handleNumberChange(e, 'first')}
            />
            <input
                type="number"
                value={secondNumber}
                onChange={(e) => handleNumberChange(e, 'second')}
            />
            <button onClick={() => handleOperation('+')}>+</button>
            <button onClick={() => handleOperation('-')}>-</button>
            <button onClick={() => handleOperation('*')}>*</button>
            <button onClick={() => handleOperation('/')}>/</button>
            {result !== null && <div>Результат: {result}</div>}
        </div>
    );
};

export default Calculator;
