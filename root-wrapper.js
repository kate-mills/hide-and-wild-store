import React from 'react'
import 'fontsource-raleway/400.css'
import './src/components/layout.css'

import { Auth0Provider } from '@auth0/auth0-react';
import { ProductsProvider } from './src/context/products_context'
import { FilterProvider } from './src/context/filter_context'
import { CartProvider } from './src/context/cart_context'
import { UserProvider } from './src/context/user_context'


const isBrowser = typeof window !== `undefined`

const auth_vars = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENTID,
  redirectUri: isBrowser && window.location.origin,
  cacheLocation: "localstorage",
};

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Auth0Provider
        domain={auth_vars.domain}
        clientId={auth_vars.clientId}
        redirectUri={auth_vars.redirectUri}
        cacheLocation={auth_vars.cacheLocation}
      >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              {element}
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
    </>
  )
}
