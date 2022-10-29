import React from 'react'

const newMessage = {
    message: 'Hola Mundo',
    title: 'Carlos'
};

const fExp = (valor) => {
    return valor*valor;
}

const FirstApp = () => {
    //const newMessage = 'Nuevo Mensaje!';
    
  return (
    <>
        <h1>{ fExp(3) }</h1>
        <code>{JSON.stringify(newMessage)}</code>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        <p>Subtitulo</p>
    </>
  )
}

export default FirstApp;