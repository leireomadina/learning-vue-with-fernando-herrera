<template>
	<h1>About page</h1>
	<p>{{ name }}</p>
	<button @click="onChangeName">Change name</button>
</template>

<script>
export default {

	data() {
		return {
			name: 'Leire'
		}
	},
	methods: {
		onChangeName() {
			this.name = 'Risingdana'
		}
	},
	// Lifecycle hooks
	beforeCreate() {
		console.log('beforeCreate')
	},
	created() {
		console.log('created')
	},
	beforeMount() {
		console.log('beforeMount')
	},
	mounted() {
		console.log('mounted')
	},
	beforeUpdate() {
		console.log('beforeUpdate')
	},
	updated() {
		console.log('updated')
	},
	activated() {
		console.log('activated')
	},
	deactivated() {
		console.log('deactivated')
	},
	beforeUnmount() {
		console.log('beforeUnmount')
	},
	unmounted() {
		console.log('unmounted')
	},
	errorCaptured() {
		console.log('errorCaptured')
	},
	renderTracked() {
		console.log('renderTracked')
	},
	renderTriggered() {
		console.log('renderTriggered')
	},
}
</script>