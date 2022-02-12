const GlobalStyle = () => (
  <style global jsx>{`
    :root {
      color-scheme: light dark;
    }

    :root {
      color: #333;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        background-color: #222;
        color: #ddd;
      }

      a {
        color: #77ff77;
      }

      a:visited {
        color: #00cc00;
      }
    }

    @media (pointer: coarse) {
      :root {
        font-size: 1.27em;
      }
    }
  `}</style>
)

export default GlobalStyle
