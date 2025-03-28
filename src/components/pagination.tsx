import '../styles/pagination.css'
import { getPageNumbers } from '../utils/get-page-number'

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
	const pages = getPageNumbers({
		currentPage,
		totalPages,
	})

	return (
		<div className='pagination'>
			<button
				className='pageButton'
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}>
				&laquo; Previous
			</button>

			<div className='pageNumbers'>
				{pages.map(page =>
					page < 0 ? (
						<span key={page} className='ellipsis'>
							...
						</span>
					) : (
						<button
							key={page}
							className={`pageNumber ${currentPage === page ? 'active' : ''}`}
							onClick={() => onPageChange(page)}
							aria-current={currentPage === page ? 'page' : undefined}>
							{page}
						</button>
					)
				)}
			</div>

			<button
				className='pageButton'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}>
				Next &raquo;
			</button>
		</div>
	)
}
