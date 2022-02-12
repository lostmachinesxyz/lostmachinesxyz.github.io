import GlobalStyle from 'components/GlobalStyle'
import Head from 'next/head'

const TextLayout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="max-w-lg">{children}</div>
    <GlobalStyle />
  </div>
)

export default TextLayout
