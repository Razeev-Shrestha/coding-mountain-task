import { Review } from '../services/types'
import '../styles/product-detail.css'

export const ReviewItem = ({ review }: { review: Review }) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
	}

	return (
		<div className='reviewItem'>
			<div className='reviewHeader'>
				<div className='reviewerInfo'>
					<div className='reviewerAvatar'>{review.reviewerName.charAt(0)}</div>
					<div>
						<div className='reviewerName'>{review.reviewerName}</div>
						<div className='reviewDate'>{formatDate(review.date)}</div>
					</div>
				</div>
				<div className='reviewRating'>
					{[...Array(5)].map((_, i) => (
						<span key={i} className={`$'reviewStar} ${i < review.rating ? 'filled' : ''}`}>
							★
						</span>
					))}
				</div>
			</div>
			<div className='reviewComment'>{review.comment}</div>
		</div>
	)
}
