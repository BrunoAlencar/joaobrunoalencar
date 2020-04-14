import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout/Layout'

const GamePage: React.FunctionComponent = () => (
  <Layout title="Games page | Next.js + TypeScript Example">
    <h1>This is the game page hahaah!</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home ( Stay home )</a>
      </Link>
    </p>
  </Layout>
)

export default GamePage
