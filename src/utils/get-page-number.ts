export const getPageNumbers = ({
	currentPage,
	totalPages,
}: {
	currentPage: number
	totalPages: number
}) => {
	const pages = []
	const maxPagesToShow = 5

	if (totalPages <= maxPagesToShow) {
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i)
		}
	} else {
		pages.push(1)

		let start = Math.max(2, currentPage - 1)
		let end = Math.min(totalPages - 1, currentPage + 1)

		if (currentPage <= 2) {
			end = Math.min(totalPages - 1, maxPagesToShow - 1)
		}

		if (currentPage >= totalPages - 1) {
			start = Math.max(2, totalPages - maxPagesToShow + 2)
		}

		if (start > 2) {
			pages.push(-1)
		}

		for (let i = start; i <= end; i++) {
			pages.push(i)
		}

		if (end < totalPages - 1) {
			pages.push(-2)
		}

		pages.push(totalPages)
	}

	return pages
}
