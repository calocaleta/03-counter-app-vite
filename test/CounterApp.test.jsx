/** @jest-environment jsdom */
import { fireEvent, render,screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('Pruebas con el componente CounterApp', () => { 
    const initialValue = 1;

    test('Prueba hacer match con snapshot',() => {
        const {container} = render( <CounterApp value={initialValue} /> );
        expect(container).toMatchSnapshot();
    });

    test('Prueba mostrar el valor inicial de 100',() => {
        render( <CounterApp value={100} /> );
        //expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    });

    test('Debe de incrementar con el botón +1', () => {

        render(<CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('2')).toBeTruthy();
    });

    test('Debe de decrementar con el botón -1', () => {

        render(<CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('-1') );
        //screen.debug();
        expect(screen.getByText('0')).toBeTruthy();
    });

    test('Debe funcionar el botón de reset', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        //fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}));

        expect(screen.getByText(initialValue)).toBeTruthy();
    })


 })