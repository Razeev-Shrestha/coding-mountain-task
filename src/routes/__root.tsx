import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import '../styles/main.css'
export const Route = createRootRoute({
	component: () => (
		<>
			<main className='main'>
				<nav className='navigation'>
					<ul className='navList'>
						<li className='navItem'>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link
								to='/products'
								search={{
									limit: 10,
									skip: 0,
								}}>
								Products
							</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
			</main>
			<TanStackRouterDevtools />
		</>
	),
})
