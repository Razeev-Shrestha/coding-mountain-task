import { createFileRoute } from '@tanstack/react-router'
import { fetchProduct } from '../../services'
import '../../styles/product-detail.css'
import { ReviewItem } from '../../components/review-item'

export const Route = createFileRoute('/products/$id')({
	component: () => <ProductDetail />,
	loader: async ({ params }) => fetchProduct(+params.id),
})

const ProductDetail = () => {
	const product = Route.useLoaderData()
	return (
		<div className='card'>
			<div className='cardHeader'>
				<div className='titleContainer'>
					<h2 className='cardTitle'>{product.title}</h2>
					<span className='badge'>{product.category}</span>
				</div>
			</div>
			<div className='cardContent'>
				<div className='productImage'>
					<img src={product.thumbnail || '/placeholder.svg'} alt={product.title} />
				</div>

				<div className='priceRatingContainer'>
					<div className='price'>${product.price}</div>
					<div className='rating'>
						<span className='star'>★</span>
						<span>{product.rating}</span>
					</div>
				</div>

				{product.availabilityStatus && (
					<div className='availabilityStatus'>{product.availabilityStatus}</div>
				)}

				<p className='description'>{product.description}</p>

				<div className='productMeta'>
					<div className='metaItem'>
						<span className='metaLabel'>Brand</span>
						<span>{product.brand}</span>
					</div>
					<div className='metaItem'>
						<span className='metaLabel'>Stock</span>
						<span>{product.stock} units</span>
					</div>
					<div className='metaItem'>
						<span className='metaLabel'>Discount</span>
						<span>{product.discountPercentage}%</span>
					</div>
					{product.sku && (
						<div className='metaItem'>
							<span className='metaLabel'>SKU</span>
							<span>{product.sku}</span>
						</div>
					)}
				</div>

				{product.tags && product.tags.length > 0 && (
					<div className='tagsContainer'>
						{product.tags.map((tag, index) => (
							<span key={index} className='tag'>
								{tag}
							</span>
						))}
					</div>
				)}

				{product.dimensions && (
					<div className='infoSection'>
						<h3 className='infoTitle'>Dimensions</h3>
						<div className='infoContent'>
							<p>Width: {product.dimensions.width} cm</p>
							<p>Height: {product.dimensions.height} cm</p>
							<p>Depth: {product.dimensions.depth} cm</p>
						</div>
					</div>
				)}

				{(product.warrantyInformation ||
					product.shippingInformation ||
					product.returnPolicy) && (
					<div className='infoSection'>
						<h3 className='infoTitle'>Additional Information</h3>
						<div className='infoContent'>
							{product.warrantyInformation && (
								<p>
									<strong>Warranty:</strong> {product.warrantyInformation}
								</p>
							)}
							{product.shippingInformation && (
								<p>
									<strong>Shipping:</strong> {product.shippingInformation}
								</p>
							)}
							{product.returnPolicy && (
								<p>
									<strong>Return Policy:</strong> {product.returnPolicy}
								</p>
							)}
							{product.minimumOrderQuantity && (
								<p>
									<strong>Minimum Order:</strong> {product.minimumOrderQuantity} units
								</p>
							)}
						</div>
					</div>
				)}

				{product.reviews && product.reviews.length > 0 && (
					<div className='reviewsSection'>
						<h3 className='reviewsTitle'>Customer Reviews</h3>
						<div className='reviewsList'>
							{product.reviews.map((review, index) => (
								<ReviewItem key={index} review={review} />
							))}
						</div>
					</div>
				)}

				{product.images && product.images.length > 0 && (
					<div className='imagesSection'>
						<h3 className='imagesTitle'>Product Images</h3>
						<div className='imagesGrid'>
							{product.images.map((image, index) => (
								<div key={index} className='imageItem'>
									<img
										src={image || '/placeholder.svg'}
										alt={`${product.title} - image ${index + 1}`}
									/>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
