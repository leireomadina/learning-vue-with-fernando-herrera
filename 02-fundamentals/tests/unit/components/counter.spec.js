import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount( Counter )
  })

  /*
  test('Debe hacer match con el snapshot', () => {
    const wrapper = shallowMount( Counter )
    expect( wrapper.html() ).toMatchSnapshot()
  })
  */

  test('h2 debe tener el valor por defecto "Counter"', () => {
    // const wrapper = shallowMount( Counter )
    expect( wrapper.find('h2').exists() ).toBe(true)
    const h2Value = wrapper.find('h2').text()
    expect( h2Value ).toBe('Counter')
  })

  test('El valor por defecto debe ser 100 en el p', () => {
    // const pValue = wrapper.findAll('p')[1].text()
    const pValue = wrapper.find('[data-testid="counter"]').text()
    expect( pValue ).toBe('100')
  })

  test('Debe incrementar y decrementar en 1 el valor del contador', async() => {
    // const increaseBtn = wrapper.find('button')
    // const decreaseBtn = wrapper.findAll('button')[1]
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')

    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const pValue = wrapper.find('[data-testid="counter"]').text()

    expect( pValue ).toBe('101')
  })

  test('Debe establecer el valor por defecto', () => {
    const { start } = wrapper.props()
    // const start = wrapper.props('start')
    const value = wrapper.find('[data-testid="counter"]').text()
    expect( Number(value) ).toBe( start )
  })

  test('Debe mostrar la prop title', ()=> {
    const title = 'Hola Mundo!!!!!'
    const wrapper = shallowMount( Counter, {
      props: {
        title,
        // start: '5'
      }
    })
    expect( wrapper.find('h2').text()).toBe( title )
  })

})