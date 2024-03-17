import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState('');
  const [operator, setOperator] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  const handleNumberClick = (num) => {
    if (display === '0' && num === '0') return;
    if (operator) {
      setCurrentValue(currentValue + num);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator && currentValue) {
      calculate();
    }
    setOperator(op);
    setPrevValue(display);
    setCurrentValue('');
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setCurrentValue(currentValue + '.');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPrevValue('');
    setOperator('');
    setCurrentValue('');
  };

  const calculate = () => {
    let result;
    switch (operator) {
      case '+':
        result = String(parseFloat(prevValue) + parseFloat(currentValue));
        break;
      case '-':
        result = String(parseFloat(prevValue) - parseFloat(currentValue));
        break;
      case '*':
        result = String(parseFloat(prevValue) * parseFloat(currentValue));
        break;
      case '/':
        result = String(parseFloat(prevValue) / parseFloat(currentValue));
        break;
      default:
        result = '';
    }
    setDisplay(result);
    setPrevValue(result);
    setCurrentValue('');
    setOperator('');
  };

  const handleEqualsClick = () => {
    if (operator && currentValue) {
      calculate();
    }
  };

  const handleDisplay = () => {
    if (display.length > 13) {
      return display.slice(0, 13);
    }
    return display;
  };

  return (
    <div className='main-content'>
    <div className="calculator">
      <div id="display" className="display">
        {handleDisplay()}
      </div>
      <div className="keys">
        <button id="clear" className="clear" onClick={handleClearClick}>AC</button>
        <button className="operator" onClick={() => handleOperatorClick('/')}>/</button>
        <button className="operator" onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button id="equals" className="equals" onClick={handleEqualsClick}>=</button>
        <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
        <button className="decimal" onClick={handleDecimalClick}>.</button>
      </div>
    </div>
    <p className='info-user'>Created by <strong>Ajdin Mehmedović</strong></p>
    </div>
  );
}

export default App;
