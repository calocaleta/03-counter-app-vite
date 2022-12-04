import {useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    console.log('render');

    const [ counter, setCounter] = useState(value);  

    const handleAdd = (event) => {
        //console.log(event);
        //value = 1000;
        //setCounter(counter + 1);
        setCounter((prevValue) => prevValue + 1);
    }

    const handleSubstract = () => setCounter(counter - 1);

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2 data-testid="test-value"> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    );
};

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}