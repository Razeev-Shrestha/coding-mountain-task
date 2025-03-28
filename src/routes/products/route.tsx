import { createFileRoute, Outlet } from '@tanstack/react-router'
import { ProductList } from '../../components/product-list'
import { fetchProducts } from '../../services'
import '../../styles/products.css'

type ProductPaginationType = {
	limit: number
	skip: number
}
export const Route = createFileRoute('/products')({
	validateSearch: (search: Record<string, unknown>): ProductPaginationType => {
		const limit = search.limit ? Number(search.limit) : 10
		const skip = search.skip ? Number(search.skip) : 0

		return {
			limit,
			skip,
		}
	},
	component: () => <Products />,
	loaderDeps: ({ search: { limit, skip } }) => ({ limit, skip }),
	loader: async ({ deps: { limit, skip } }) => await fetchProducts(limit, skip),
})

const Products = () => {
	return (
		<div className='main'>
			<div className='container'>
				<div className='leftPane'>
					<Outlet />
				</div>

				<div className='rightPane'>
					<ProductList />
				</div>
			</div>
		</div>
	)
}
