import React from 'react'
import { navigate } from 'gatsby'
import { useUserContext } from '../context/user_context'
import { SEO, Layout, PageHero, Checkout } from '../components'

const PrivateRoute = ({children, ...rest}) => {
  const {myUser} = useUserContext()
  if(myUser){
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
  navigate("/")
  return <></>
}
export default PrivateRoute
