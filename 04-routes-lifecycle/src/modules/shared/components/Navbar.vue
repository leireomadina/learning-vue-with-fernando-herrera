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
				{ to: 'pokemon-home', name: 'Pokemons' },
				{ to: 'pokemon-id', name: 'Por ID', id: 151 },
				{ to: 'pokemon-about', name: 'Characters' },
				{ to: 'dbz-characters', name: 'DBZ-Characters' },
				{ to: 'dbz-about', name: 'DBZ-About' },
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
	max-width: 44rem;
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