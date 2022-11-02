import React from 'react';
import PropTypes from 'prop-types'

const handleAdd = (event) => {
    console.log(event);
    value = 1000;
}


const CounterApp = ({value}) => {
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    );
};

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}