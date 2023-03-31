import type { SanityObject } from '~/types/sanity'

export enum SpacerHeights {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface SpacerBlock extends SanityObject {
	height: SpacerHeights
}

export default function SpacerBlock({ block }: {
	block: SpacerBlock
}): React.ReactElement {
	const heightTailwindValue = mapHeightToTailwindClass(block.height)
	if (!heightTailwindValue) return
	return <div className={ heightTailwindValue } />
}

// https://tailwindcss.com/docs/customizing-spacing
// Also, this must return a full class name:
// https://stackoverflow.com/a/74959709/59160
function mapHeightToTailwindClass(height: string): string {
	switch (height) {
		case SpacerHeights.Small: return 'h-2'
		case SpacerHeights.Medium: return 'h-6'
		case SpacerHeights.Large: return 'h-12'
	}
}
