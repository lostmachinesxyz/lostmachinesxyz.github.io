import DirListing from 'components/DirListing'
import { getAllPages } from 'lib/getAllPages'

export const getStaticProps = async () => ({
  props: {
    pages: getAllPages(),
  },
})

const Page = DirListing

export default Page
