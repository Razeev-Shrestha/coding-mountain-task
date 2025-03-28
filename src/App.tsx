import { createRouter, RouterProvider } from '@tanstack/react-router'
import './App.css'

import { routeTree } from './routeTree.gen'

const router = createRouter({
	routeTree,
})

/**
 * declare module for type completion
 */

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const App = () => {
	return <RouterProvider router={router} />
}

export default App
