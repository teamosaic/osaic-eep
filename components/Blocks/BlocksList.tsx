import MarqueeBlockComponent, { MarqueeBlock } from './MarqueeBlock'
import SpacerBlockComponent, { SpacerBlock } from './SpacerBlock'

interface BlocksListProps {
  blocks: Array<
		MarqueeBlock |
		SpacerBlock
	>
}

// Conditionally render blocks based on type
export default function BlocksList({
	blocks = []
}: BlocksListProps): React.ReactElement {
	return <>{ blocks.map(makeBlockInstance) }</>
}

// Return a block depending on the _type
function makeBlockInstance(block: any): React.ReactElement {
	const ComponentFunction = getComponentFunction(block._type)
	if (!ComponentFunction) return <div>Unknown block { block._type }</div>
	return <ComponentFunction block={ block } key={ block._key} />
}

// Return the component class based on the type
function getComponentFunction(type: string): Function {
	switch(type) {
		case 'marqueeBlock': return MarqueeBlockComponent
		case 'spacerBlock': return SpacerBlockComponent
	}
}
