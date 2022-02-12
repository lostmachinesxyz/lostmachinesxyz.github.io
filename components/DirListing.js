import TextLayout from 'components/TextLayout'
import Link from 'next/link'

const DirListing = ({ title = 'all', pages }) => (
  <TextLayout title={title}>
    <ul>
      {pages.map(p => (
        <li key={p.key}>
          <Link href={p.href}>{p.title}</Link>
        </li>
      ))}
    </ul>
  </TextLayout>
)

export default DirListing
