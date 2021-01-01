import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from './PrivateRoute'

const CheckoutApp = () => {
  return (
    <Router>
      <PrivateRoute path="/checkout"/>
    </Router>
  )
}

export default CheckoutApp
