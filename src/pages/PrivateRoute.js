import React from 'react'
import { navigate } from 'gatsby'
import { useUserContext } from '../context/user_context'
import { SEO, Layout, PageHero, Checkout } from '../components'
import {checkWindow} from '../utils/helpers'

const PrivateRoute = ({children, ...rest}) => {
  const {myUser} = useUserContext()
  const isBrowser = checkWindow()
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
  else if(isBrowser){
    navigate("/")
  }
  return <></>
}
export default PrivateRoute
