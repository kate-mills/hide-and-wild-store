import React from 'react'
import { FaShoppingCart} from 'react-icons/fa'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useSnipcartContext } from '../context/snipcart_context'


const CartButtons = () => {
  const {closeSidebar} = useProductsContext()
  const {setTotalCount, totalCount,  getSnipCount  } = useSnipcartContext()
  
  React.useEffect(()=>{
    let newCount = getSnipCount()
    setTotalCount(newCount)
  }, [getSnipCount, setTotalCount])

  return (
    <Wrapper className="cart-btn-wrapper">
      <a className="skincare" href="https://skincarebyhilary.app">Skin</a>

      <button type="button" className="cart-btn snipcart-checkout" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value snipcart-items-count">{totalCount}</span>
        </span>
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  align-items: center;
  width: 225px;
  .skincare{
    color: var(--clr-black);
    letter-spacing: var(--spacing);
    font-family: Arial;
    font-size: 1.5rem;
    font-weight: 400;
    }
  }
  .cart-btn {
    outline: none;
    border: none;
    background: var(--clr-white);
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
