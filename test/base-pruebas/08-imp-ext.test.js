import { getHeroeById,getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-ex', () => { 
    
    test('getHeroeById debe retornar un héroe por ID', ()=> {

        const id=1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'});
    })

    test('getHeroeById debe retornar undefined si no existe el id', ()=> {

            const id=100;
            const hero = getHeroeById(id);
    
            expect(hero).toBeFalsy();

    })

    test('getHeroesByOwner debe retornar 3 porque su owner es DC', ()=> {

        const owner='DC';
        const cantidad = getHeroesByOwner(owner);

        expect(cantidad.length).toEqual(3);

    })

    test('getHeroesByOwner debe retornar 2 porque su owner es Marvel', ()=> {

        const owner='Marvel';
        const cantidad = getHeroesByOwner(owner);

        expect(cantidad.length).toEqual(2);

    })
 })