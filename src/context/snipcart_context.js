import React, { useContext, useEffect, useState } from 'react'

import {checkWindow} from '../utils/helpers'

const SnipcartContext = React.createContext()


export const SnipcartProvider = ({ children }) => {

  const [mySnip, setMySnip] = useState(null)
  const [snipState, setSnipState] = useState(null)
  const [snipStore, setSnipStore] = useState(null)
  const [totalCount, setTotalCount] = useState(0)

  const getSnipCount = () => {
    if(checkWindow && window.Snipcart){
      const {cart: {items}} = window.Snipcart.store.getState()
      //setTotalCount(items.count)
      return items.count
    }
    return 0
  }

  useEffect(()=>{
    if(checkWindow){
      setMySnip(window.Snipcart)
      setSnipStore(window.Snipcart.store)
      setSnipState(window.Snipcart.store.getState())
      //window.mySnip = window.Snipcart
      //window.snipStore = window.Snipcart.store
      //window.snipState = window.Snipcart.store.getState()
      getSnipCount()
    }
  }, [])

  return (
    <SnipcartContext.Provider value={{mySnip, snipState, snipStore, getSnipCount, totalCount, setTotalCount }}>{children}</SnipcartContext.Provider>
  )
}
// make sure use
export const useSnipcartContext = () => {
  return useContext(SnipcartContext)
}
