export default function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="underline active:no-underline"
    >
      <>
        {children}
        <ExternalLinkIcon />
      </>
    </a>
  )
}

// (modified)
// import { ExternalLinkIcon } from '@heroicons/react/outline'

const ExternalLinkIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    width="0.8em"
    style={{ paddingLeft: 1 }}
    stroke="currentColor"
  >
    <path
      strokeWidth={1}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)
