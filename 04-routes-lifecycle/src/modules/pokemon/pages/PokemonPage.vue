<template>
	<h1>Pokemon: <span>#{{ id }}</span> </h1>
	<div v-if="pokemon">
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name">
	</div>
</template>

<script>
export default {
	// passing the id as a prop to have type and required checking
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			// id: null
			pokemon: null
		}
	},
	created() {
		// const { id } = this.$route.params
		// this.id = id
		this.getPokemon()
	},
	methods: {
		async getPokemon() {
			try {
				const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json() )
				// console.log(pokemon)
				this.pokemon = pokemon
			} catch (error) {
				this.$router.push('/')
				console.log('Nothing to do here')
			}
		}
	},
	watch: {
		id() {
			this.getPokemon()
		}
	}
}
</script>