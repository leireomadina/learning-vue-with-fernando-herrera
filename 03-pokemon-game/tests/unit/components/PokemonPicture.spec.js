import { shallowMount } from "@vue/test-utils"
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture componente', () => {

	test('debe hacer match con el snapshot', () => {
		const wrapper = shallowMount( PokemonPicture, {
			props: {
				pokemonId: 1,
				showPokemon: false
			}
		})

		expect( wrapper.html() ).toMatchSnapshot()
	})

	test('debe mostrar la imagen oculta y el pokemon 100', () => {
		const wrapper = shallowMount ( PokemonPicture, {
			props: {
				pokemonId: 100,
				showPokemon: false
			}
		})

		const [ image1, image2] = wrapper.findAll('img')

		expect( image1.exists() ).toBeTruthy()
		expect( image2 ).toBe(undefined)

		expect( image1.classes('hidden-pokemon') ).toBe(true)

		expect(image1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
	})

	test('debe mostrar el pokemon si showPokemon:true', () => {
		const wrapper = shallowMount ( PokemonPicture, {
			props: {
				pokemonId: 100,
				showPokemon: true
			}
		})

		const image2 = wrapper.find('img.fade-in')

		expect( image2.exists() ).toBeTruthy()
	})

})