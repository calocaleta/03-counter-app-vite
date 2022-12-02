/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 
    
    test('Debe de hacer match con el snapshot',() => {
        
        const title = 'Hola, Soy Goku';
        const {container} = render( <FirstApp title={title} /> );

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el título en un h1',() => {

        const title = 'Hola, Soy Goku';
        const {container} = render( <FirstApp title={title} /> );

        expect(container).toMatchSnapshot();

    });

 })