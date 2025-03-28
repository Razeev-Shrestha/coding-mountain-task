import { createFileRoute } from '@tanstack/react-router'
import { fetchProducts } from '../services'

type ProductPaginationType = {
	limit: number
	skip: number
}

export const Route = createFileRoute('/')({
	validateSearch: (search: Record<string, unknown>): ProductPaginationType => {
		const limit = search.limit ? Number(search.limit) : 10
		const skip = search.skip ? Number(search.skip) : 0

		return {
			limit,
			skip,
		}
	},
	component: () => <Index />,
	loaderDeps: ({ search: { limit, skip } }) => ({ limit, skip }),
	loader: async ({ deps: { limit, skip } }) => await fetchProducts(limit, skip),
})

const Index = () => {
	const products = Route.useLoaderData()

	console.log('products', products)
	return (
		<div>
			<h1>Welcome to React Router</h1>
			<p>
				Edit <code>src/routes/index.tsx</code> to get started.
			</p>
		</div>
	)
}
