
// Apply common layout options to block
export default function BlockLayout({ block, children }):React.ReactElement {
  return (
    children
  )
}

// https://tailwindcss.com/docs/customizing-spacing
// Also, this must return a full class name:
// https://stackoverflow.com/a/74959709/59160
// export function mapBlockMarginTopToTailwindClass(
//   height: BlockMarginTop
// ): string {
// 	switch (height) {
// 		case BlockMarginTop.Small: return 'h-2'
// 		case BlockMarginTop.Medium: return 'h-6'
// 		case BlockMarginTop.Large: return 'h-12'
// 	}
// }

