const isAuthenticatedGuard = async(to, from, next) => {
	// console.log({to, from, next})
	return new Promise(() => {
		const random = Math.random() * 100
		if( random > 50 ) {
			console.log('Authenticated!')
			next()
		} else {
			console.log('Denied by the guard :(', random)
			next({ name: 'pokemon-home' })
		}
	})
}

export default isAuthenticatedGuard