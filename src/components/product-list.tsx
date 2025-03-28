import { Link, useLoaderData, useNavigate, useSearch } from '@tanstack/react-router'
import '../styles/product-list.css'
import { Pagination } from './pagination'
import { useState } from 'react'

export const ProductList = () => {
	const data = useLoaderData({ from: '/products' })
	const { limit, skip } = useSearch({ from: '/products' })
	const navigate = useNavigate({ from: '/products' })
	const [currentPage, setCurrentPage] = useState(Math.ceil(skip / limit) + 1)
	const totalPages = Math.ceil(data.total / data.limit)

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
		navigate({
			search: {
				limit: limit,
				skip: page,
			},
		})
	}

	return (
		<div className='card'>
			<div className='cardHeader'>
				<h2 className='cardTitle'>Products</h2>
			</div>
			<div className='cardContent'>
				<>
					<div className='scrollArea'>
						<div className='productList'>
							{data.products.map(product => (
								<Link
									key={product.id}
									to={'/products/$id'}
									search={{ limit: 10, skip: 0 }}
									params={{ id: String(product.id) }}>
									<div className='productItem'>
										<div className='productItemContent'>
											<div className='productThumbnail'>
												<img
													src={product.thumbnail || '/placeholder.svg'}
													alt={product.title}
												/>
											</div>
											<div className='productInfo'>
												<h3 className='productTitle'>{product.title}</h3>
												<p className='productPrice'>${product.price}</p>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</>
			</div>
		</div>
	)
}
