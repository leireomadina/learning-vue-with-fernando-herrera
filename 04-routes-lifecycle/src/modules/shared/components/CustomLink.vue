<template>
	<a 
		v-if="isExternalLink"
		target="_blank"
		:href="link.to"
		class="normal-link"
	>
		{{ link.name }}
	</a>
	<router-link
		v-else
		:to="route"
		v-slot="{ isActive }"
	>
		<!-- href, isActive -->
		<a
			:class="isActive ? 'is-active' : 'normal-link'"
		>
			{{ link.name }}
		</a>
	</router-link>
</template>

<script>
export default {
	props: {
		link: {
			type: Object,
			required: true
		}
	},
	computed: {
		isExternalLink() {
			return this.link.to.startsWith('http')
		},
		route() {
			return this.link.id === undefined
				? { name: this.link.to }
				: { name: this.link.to, params: { id: this.link.id } }
		}
	}
}
</script>

<style scoped>
.is-active {
	color: #41b883;
}
.normal-link {
	color: #575757;
}
</style>