import { shallowMount } from '@vue/test-utils'
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions component', () => {

	let wrapper
	beforeEach(() => {
		wrapper = shallowMount( PokemonOptions, {
			props: {
				pokemons
			}
		} )
	})

	test('debe hacer match con el snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot()
	})

	test('debe motrar las 4 opciones correctamente', () => {
		const listItems = wrapper.findAll('li')

		expect( listItems.length ).toBe(4)

		expect( listItems[0].text() ).toBe('pikachu')
		expect( listItems[1].text() ).toBe('charmander')
		expect( listItems[2].text() ).toBe('venusaur')
		expect( listItems[3].text() ).toBe('mew')
	})

	test('debe emitir "selection-pokemon" con sus respectivos parámetros al hacer click', () => {
		const [li1, li2, li3, li4] = wrapper.findAll('li')

		li1.trigger('click')
		li2.trigger('click')
		li3.trigger('click')
		li4.trigger('click')
		
		expect( wrapper.emitted('selectionPokemon').length ).toBe(4)
		expect( wrapper.emitted('selectionPokemon')[0] ).toEqual( [5] )
		expect( wrapper.emitted('selectionPokemon')[1] ).toEqual( [10] )
		expect( wrapper.emitted('selectionPokemon')[2] ).toEqual( [15] )
		expect( wrapper.emitted('selectionPokemon')[3] ).toEqual( [20] )
	})
})