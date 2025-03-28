import { createFileRoute } from '@tanstack/react-router'
import '../../styles/product-detail.css'
export const Route = createFileRoute('/products/')({
	component: () => <ProductDetail />,
})

const ProductDetail = () => {
	return (
		<div className={`card emptyState`}>
			<div className='cardContent'>
				<p className='emptyMessage'>Select a product from the list to view details</p>
			</div>
		</div>
	)
}
