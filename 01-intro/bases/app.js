// console.log(Vue)

const app = Vue.createApp({
  // template: `
  //   <h1>Holi</h1>
  //   <p>Desde App.js</p>
  // `

  // Options API:
  data () {
    return {
      quote: "I'm Batman",
      author: "Bruce Wayne"
    }
  },
  methods: {
    changeQuote( event ) {
      console.log( 'Holi mundo', event)
      this.author = 'Risingdana'

      this.capitalize()
    },
    capitalize() {
      this.quote = this.quote.toUpperCase()
    }
  }

})

app.mount('#root')