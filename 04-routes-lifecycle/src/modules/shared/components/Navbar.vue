<template>
	<nav>
		<!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
		<router-link :to="{ name: 'pokemon-id', params: {id: 100 } }">Pokemon per id</router-link>
		<router-link :to="{ name: 'about' }">About</router-link> -->
		<CustomLink 
			v-for="link in links"
			:key="link.to"
			:link="link"
		/>
	</nav>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
	data() {
		return {
			links: [
				{ to: '/home', name: 'Pokemons' },
				{ to: '/pokemonid/100', name: 'Por ID' },
				{ to: '/about', name: 'About' },
				{ to: 'https://google.com', name: 'Google' },
			]
		}
	},
	components: {
		CustomLink: defineAsyncComponent( () => import('./CustomLink.vue') )
	}
}
</script>

<style scoped>
nav {
	max-width: 20rem;
	margin: 2rem auto;
	display: flex;
	justify-content: space-between;
}
	/* nav a {
		color: #35495e;
	} */
		/* nav a.router-link-exact-active {
			color: #41b883;
		} */
</style>