// import Link from 'next/link'
import Layout from '../components/layout/Layout'
import {User} from '../interfaces/index'
const user: User = {
  name: 'João Bruno Alencar'
}


const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Welcome👋</h1>
    <h2>Here i am, trying to learn Next in practice {user.name}</h2>

    <div id="terminal">
      <div id="terminal-current-tex"></div>
      <div id="current-path">~</div>
      <div id="terminal-text">$
        <input id="terminal-input" />
      </div>
    </div>
    {/* <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
      <Link href="/game">
        <a>game</a>
      </Link> */}
  </Layout>
)

export default IndexPage
