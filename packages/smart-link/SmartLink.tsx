import Link from 'next/link'
import type { URL } from 'url'

type Href = string | Partial<URL>

// Conditionally render internal Next/Link instances or external anchor links
export default function SmartLink({ href, children, className = '' }: {
	href?: Href
	children: React.ReactNode
	className?: string
}): React.ReactElement {

	// Return children if empty
	if (!href) {
		return <span {...{ className }}>{ children }</span>
	}

	// Internal link, rendered with next/link
	if (isInternal(href)) {
		return <Link {...{ href, className }}>{ children }</Link>
	}

	// External link
	href = href as string
	return <a {...{ href, className }}>{ children }</a>
}

// Decide if the href is internal or not
function isInternal(href: Href):boolean {

	// If an object, must be the object syntax that next/link supports
	if (typeof href == 'object') return true
	href = String(href)

	// If begins with http, treat as external.
	// TODO: Support configuration at project level with regex of internal urls
	return !href.startsWith('http')
}
