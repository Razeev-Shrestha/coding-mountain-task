import { Product, ProductType } from './types'

const BASE_API_URL = 'https://dummyjson.com'

export const fetchProduct = async (id: number) => {
	try {
		const response = await fetch(`${BASE_API_URL}/products/${id}`)
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		return (await response.json()) as Product
	} catch (err) {
		console.error('Error fetching posts:', err)
		throw err
	}
}

export const fetchProducts = async (limit?: number, skip?: number) => {
	const url = new URL(`${BASE_API_URL}/products`)

	if (limit) {
		url.searchParams.append('limit', limit.toString())
	}

	if (skip) {
		url.searchParams.append('skip', skip.toString())
	}

	try {
		const response = await fetch(url.toString())
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		return (await response.json()) as ProductType
	} catch (err) {
		console.error('Error fetching posts:', err)
		throw err
	}
}
