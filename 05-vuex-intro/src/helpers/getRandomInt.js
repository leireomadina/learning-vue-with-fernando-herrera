const getRandomInt = () => {
	return new Promise ( resolve => {
		const randomInt = Math.floor(Math.random() * 20 + 1)
		setTimeout(() => {
			resolve(randomInt)
		}, 1000)
	})
}

export default getRandomInt