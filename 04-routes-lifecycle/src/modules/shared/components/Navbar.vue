<template>
	<nav>
		<router-link :to="{ name: 'home' }">Pokemon List</router-link>
		<router-link :to="{ name: 'pokemon-id', params: {id: 100 } }">Pokemon per id</router-link>
		<router-link :to="{ name: 'about' }">About</router-link>
	</nav>
</template>

<style scoped>
nav {
	max-width: 20rem;
	margin: 2rem auto;
	display: flex;
	justify-content: space-between;
}
	nav a {
		color: #35495e;
	}
		nav a.router-link-exact-active {
			color: #41b883;
		}
</style>