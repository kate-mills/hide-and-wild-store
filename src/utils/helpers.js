
export const formatPrice = (number) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
}
export const formatWholePrice = (number) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number / 100)
}

export const getUniqueValues = (items, filter, isArray=false) => {
  let unique = ["all", ...new Set(
    items.map(({node}) => {
      return node[filter]
    })
  )];
  if(isArray){
    unique = unique.flat();
  }
  return unique 
}


const isBrowser = typeof window !== `undefined`
export const checkWindow = ()=>{
  if (!isBrowser){
    return false
  }
  else{
    return true
  }
}


export const getRedirectUri = ()=>{
  const { NODE_ENV } = process.env
  console.log('NODE_ENV', NODE_ENV)
  console.log('AUTH0_CALLBACK', process.env.AUTH0_CALLBACK)
  const CB = process.env.AUTH0_CALLBACK
  let  uri = ""
  if(isBrowser){
    console.log('isBrowser')
    uri = window.location.origin
  }
  else if(NODE_ENV === 'development'){
    console.log('development')
    uri = "http://localhost:8000"
  }
  else if(NODE_ENV === 'production'){
    console.log('production')
    uri = CB
  }
  else{
    console.log('I have no idea')
    uri = CB
  }
  console.log('uri:', uri)
  return uri
}
