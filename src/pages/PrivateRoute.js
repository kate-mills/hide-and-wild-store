import React from 'react'
import { SEO, Layout, PageHero, Checkout } from '../components'

const PrivateRoute = ({children, ...rest}) => {
    return (
      <Layout>
        <SEO title="Chekout"/>
        <PageHero title="Checkout"/>
        <main className="page page-100">
          <Checkout/>
        </main>
      </Layout>
    )
}
export default PrivateRoute
