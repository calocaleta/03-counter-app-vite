import PropTypes from 'prop-types'
import React from 'react'

const newMessage = {
    message: 'Hola Mundo',
    title: 'Carlos'
};

const fExp = (valor) => {
    return valor*valor;
}

const FirstApp = ({
    title,
    subtitle
}) => {
    //const newMessage = 'Nuevo Mensaje!';
    //console.log(title);

    return (
        <>
            <h1>{title}{ fExp(3) }</h1>
            <code>{JSON.stringify(newMessage)}</code>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle+1}</p>
        </>
    )
}

export default FirstApp;

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 123,
    name: 'Carlos Garcia'
}