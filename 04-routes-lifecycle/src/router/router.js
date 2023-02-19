import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

// import AboutPage from '../modules/pokemon/pages/AboutPage'
// import ListPage from '../modules/pokemon/pages/ListPage'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage'

// import NoPageFound from '../modules/shared/pages/NoPageFound'

const routes = [
	{
		path: '/',
		redirect: '/pokemon'
	},
	{
		path: '/pokemon',
		name: 'pokemon',
		component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
		children: [
			{ 
				path: 'home',
				name: 'pokemon-home',
				component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage')
			},
			{
				path: 'about',
				name: 'pokemon-about',
				component: () => import(/* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage')
			},
			{
				path: 'pokemonid/:id',
				name: 'pokemon-id',
				component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
				// passing the id as a prop to have type and required checking
				props: ( route ) => {
					const id = Number( route.params.id )
					console.log(id)
					return isNaN( id ) ? { id: 1 } : { id }
				}
			},
			{
				path: '',
				redirect: { name: 'pokemon-about' }
			}
		]
	},
	{
		path: '/dbz',
		name: 'dbz',
		beforeEnter: [ isAuthenticatedGuard ],
		component: () => import(/* webpackChunkName: "DbzLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
		children: [
			{
				path: 'characters',
				name: 'dbz-characters',
				component: () => import(/* webpackChunkName: "DbzCharacters" */ '../modules/dbz/pages/Characters'),
			},
			{
				path: 'about',
				name: 'dbz-about',
				component: () => import(/* webpackChunkName: "DbzAbout" */ '../modules/dbz/pages/About'),
			},
			{
				path: '',
				redirect: { name: 'dbz-characters' }
			}
		]
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import(/* webpackChunkName: "PokemoNoPageFoundnPage" */ '../modules/shared/pages/NoPageFound')
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

// Global synchronous guard
/*
router.beforeEach( (to, from, next) => {
	// console.log(to, from, next)

	const random = Math.random() * 100
	if( random > 50 ) {
		console.log('Authenticated!')
		next()
	} else {
		console.log(random, 'Denied by the guard :(')
		next({ name: 'pokemon-home' })
	}
})
*/

// Global asynchronous guard
/*
const canAccess = () => {
	return new Promise( resolve => {

		const random = Math.random() * 100
		if( random > 50 ) {
			console.log('Authenticated!')
			resolve(true)
		} else {
			console.log(random, 'Denied by the guard :(')
			resolve(false)
		}

	})
}

router.beforeEach( async(to, from, next) => {
	const authorized = await canAccess()
	authorized
		? next() 
		: next({ name: 'pokemon-home' })
})
*/

export default router