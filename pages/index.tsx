import Link from 'next/link'
import Layout from '../components/layout/Layout'
import {User} from '../interfaces/index'
const user: User = {
  name: 'Bruno Alencar'
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <h2>Here i am, trying to learn Next in practice {user.name}</h2>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
