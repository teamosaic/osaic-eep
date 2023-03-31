import { SanityObject } from '~/types/sanity'

export interface MarqueeBlock extends SanityObject {
	body: string
}

export default function MarqueeBlock({ block }: {
	block: MarqueeBlock
}) {
	return (
		<div className='max-w-screen-md mx-auto px-4'>
			{ block.body }
		</div>
	)
}
