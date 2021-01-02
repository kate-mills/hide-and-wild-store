import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return <>
    <link rel="preconnect" href="https://app.snipcart.com"/>
    <link rel="preconnect" href="https://cdn.snipcart.com"/>
    <Navbar />
    <Sidebar />
    {children}
    <Footer />
  </>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
