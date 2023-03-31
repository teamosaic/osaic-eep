import MarqueeBlockComponent, { MarqueeBlock } from './MarqueeBlock'

interface BlocksListProps {
  blocks: Array<MarqueeBlock>
}

// Conditionally render blocks based on type
export default function BlocksList({
	blocks = []
}: BlocksListProps): React.ReactElement {
	return <>{ blocks.map(makeBlock) }</>
}

// Return a block depending on the _type
function makeBlock(block: any): React.ReactElement {
	const ComponentFunction = getComponent(block._type)
	if (!ComponentFunction) return <div>Unknown block { block._type }</div>
	return <ComponentFunction block={ block } key={ block._key} />
}

// Return the component class based on the type
function getComponent(type: string): Function {
	switch(type) {
		case 'marqueeBlock': return MarqueeBlockComponent
	}
}
