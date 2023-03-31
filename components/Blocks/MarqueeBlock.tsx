export default function MarqueeBlock({ block }) {
	return (
		<div className='max-w-screen-md mx-auto px-4'>
			{ block.body }
		</div>
	)
}
