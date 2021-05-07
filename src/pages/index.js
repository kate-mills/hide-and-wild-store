import React from 'react'
import {
  SEO,
  Layout,
  FeaturedProducts,
  Hero,
  Services,
  Contact,
} from '../components'
const HomePage = () => {
  return (
    <Layout>
      <SEO title="Hide & Wild" />
      <main>
        <Hero />
        <FeaturedProducts />
        <Services />
        <Contact />
      </main>
    </Layout>
  )
}

export default HomePage
