import React from 'react'
import 'fontsource-raleway/400.css'
import './src/components/layout.css'

import { ProductsProvider } from './src/context/products_context'
import { FilterProvider } from './src/context/filter_context'
import { CartProvider } from './src/context/cart_context'
import { SnipcartProvider } from './src/context/snipcart_context'



export const wrapRootElement = ({ element }) => {
  return (
    <>
   <SnipcartProvider>
     <ProductsProvider>
       <FilterProvider>
         <CartProvider>
           {element}
         </CartProvider>
       </FilterProvider>
     </ProductsProvider>
   </SnipcartProvider>
    </>
  )
}
