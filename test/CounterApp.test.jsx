/** @jest-environment jsdom */
import { render,screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('Pruebas con el componente CounterApp', () => { 
    
    test('Prueba hacer match con snapshot',() => {
        const {container} = render( <CounterApp value={1} /> );
        expect(container).toMatchSnapshot();
    });

    test('Prueba mostrar el valor inicial de 100',() => {
        render( <CounterApp value={100} /> );
        //expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    });

 })