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
    subtitle,
    subtitle2
}) => {
    //const newMessage = 'Nuevo Mensaje!';
    //console.log(title);

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>{ fExp(3) }
            <code>{JSON.stringify(newMessage)}</code>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle+1}</p>
            <p>{subtitle2}</p>
            <p>{subtitle2}</p>
        </>
    )
}

export default FirstApp;

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
    subtitle2: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 123,
    subtitle2: 'Ejemplo',
    name: 'Carlos Garcia'
}