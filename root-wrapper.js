import React from 'react'
import 'fontsource-raleway/400.css'
import './src/components/layout.css'

import { Auth0Provider } from '@auth0/auth0-react';
import { ProductsProvider } from './src/context/products_context'
import { FilterProvider } from './src/context/filter_context'
import { CartProvider } from './src/context/cart_context'
import { UserProvider } from './src/context/user_context'

const auth_vars = {
  domain: process.env.GATSBY_AUTH0_DOMAIN,
  clientId: process.env.GATSBY_AUTH0_CLIENTID,
  redirectUri:process.env.GATSBY_AUTH0_CALLBACK,
  cacheLocation: "localstorage",
};

console.log('REDIRECT_URI:', auth_vars.redirectUri)
if(auth_vars.redirectUri === undefined){
  auth_vars['redirectUri'] = 'https://hideandwild.netlify.app'
}
console.log('REDIRECT_URI:', auth_vars.redirectUri)

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
