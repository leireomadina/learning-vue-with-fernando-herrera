import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from "@/pages/PokemonPage";
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage component', () => {

	let wrapper
	beforeEach(() => {
		wrapper = shallowMount( PokemonPage )
	})

	test('debe hacer match con el snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot()
	})

	test('debe llamar al mixPokemonArray al montar', () => {
		const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
		const wrapper = shallowMount( PokemonPage )
		expect( mixPokemonArraySpy ).toHaveBeenCalled()
	})

	test('debe hacer match con el snapshot cuando cargan los pokemons', () => {
		const wrapper = shallowMount( PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showPokemon: false,
					showAnswer: false,
					message: ''
				}
			}
		} )
		
		expect( wrapper.html() ).toMatchSnapshot()
	})

	test('debe mostrar los componentes PokemonPicture y PokemonOptions', () => {
		const wrapper = shallowMount( PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showAnswer: false,
					showPokemon: false,
					message: ''
				}
			}
		})

		const pictureComponent = wrapper.findComponent(PokemonPicture)
		const optionsComponent = wrapper.findComponent(PokemonOptions)

		expect( pictureComponent.exists() ).toBeTruthy()
		expect( optionsComponent.exists() ).toBeTruthy()
		
		expect( pictureComponent.attributes('pokemonid') ).toBe('5')
		expect( optionsComponent.attributes('pokemons') ).toBeTruthy()
	})

	test('pruebas con checkAnswer', async () => {
		const wrapper = shallowMount( PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showAnswer: false,
					showPokemon: false,
					message: ''
				}
			}
		})

		await wrapper.vm.checkAnswer(5)
		expect( wrapper.find('h2').exists() ).toBeTruthy()
		expect( wrapper.vm.showPokemon ).toBe(true)
		expect( wrapper.find('h2').text() ).toBe(`Correcto, es ${pokemons[0].name}`)

		await wrapper.vm.checkAnswer(10)
		expect( wrapper.vm.message ).toBe(`Oops, era ${pokemons[0].name}`)

	})

})