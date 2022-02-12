import ExternalLink from 'components/ExternalLink'
import TextLayout from 'components/TextLayout'

const Page = () => (
  <TextLayout title="webgl">
    <p>zero dependency webgl</p>
    <ul>
      <li>
        <a href="webgl/minimal.html">minimal</a> example
      </li>
      <li>
        <a href="webgl/min.html">min</a> (code golfed to 427 bytes)
      </li>
    </ul>
    <p>how to</p>
    <ul>
      <li>
        <a href="webgl/red-triangle.html">red triangle</a> (view source)
      </li>
      <li>
        <a href="webgl/passing-data.html">passing data between shaders</a>
      </li>
      <li>
        <a href="webgl/uniforms.html">uniforms</a>
      </li>
      <li>
        <a href="webgl/quad.html">quad</a>
      </li>
      <li>
        <a href="webgl/quad-ts.html">quad</a> using triangle strips
      </li>
    </ul>
    <p>
      <small>
        <ExternalLink href="https://twitter.com/lostmachinesxyz">
          twtr
        </ExternalLink>
      </small>
    </p>
  </TextLayout>
)

export default Page
