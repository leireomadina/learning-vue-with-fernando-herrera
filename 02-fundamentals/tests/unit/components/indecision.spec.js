import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

describe('Indecision Component', () => {

  let wrapper
  let clgSpy

  // Hacemos un mock de la llamada a la API
  global.fetch = jest.fn( () => Promise.resolve({
    json: () => Promise.resolve({
      answer: 'yes',
      forced: false,
      image: 'https://yesno.wtf/assets/yes/2.gif'        
    })
  }))

  beforeEach(() => {
    wrapper = shallowMount( Indecision )

    clgSpy = jest.spyOn( console, 'log' )
    jest.clearAllMocks()
  })

  test('Debe hacer match con el snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('Escribir en el input no debe disparar nada (console.log)', async() => {

    const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')

    const input = wrapper.find('input')
    await input.setValue('Hola Mundo')

    expect( clgSpy ).toHaveBeenCalledTimes(1)
    // expect( getAnswerSpy ).toHaveBeenCalledTimes(0)
    expect( getAnswerSpy ).not.toHaveBeenCalled()

    // console.log(wrapper.vm);
  })

  test('Escribir el símbolo "?" debe disparar el getAnswer', async() => {
    const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')

    const input = wrapper.find('input')
    await input.setValue('?')

    expect( clgSpy ).toHaveBeenCalledTimes(1)
    expect( getAnswerSpy ).toHaveBeenCalled()
  })

  test('Pruebas en getAnswer', async() => {
    await wrapper.vm.getAnswer()
    // console.log(wrapper.vm.image);
    // console.log(wrapper.vm.answer);

    const image = wrapper.find('img')
    expect( image ).toBeTruthy()
    expect( wrapper.vm.image ).toBe('https://yesno.wtf/assets/yes/2.gif')
    expect( wrapper.vm.answer ).toBe('Sí')
  })

  test('Pruebas en getAnswer - Fallo en el API', async() => {

    fetch.mockImplementationOnce( () => {
      Promise.reject('API is down')
    })

    await wrapper.vm.getAnswer()

    const image = wrapper.find('img')

    expect( image.exists() ).toBeFalsy()
    expect( wrapper.vm.answer ).toBe('No se pudo conectar con el API')
    
  })
})