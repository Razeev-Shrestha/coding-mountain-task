import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: () => <Index />,
	beforeLoad: () => ({
		getTitle: () => 'Home',
	}),
})

const Index = () => {
	return <div>This is the index route. !!</div>
}
