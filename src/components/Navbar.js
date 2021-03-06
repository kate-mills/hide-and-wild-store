import React from 'react'
import styled from 'styled-components'
import navlogo from '../images/Hide.png'
import { FaBars } from 'react-icons/fa'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'

const Nav = () => {
  const { openSidebar } = useProductsContext()
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <AniLink fade to="/">
            <img src={navlogo} alt="Hide & Wild Logo" width="175px" height="54px" />
          </AniLink>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map(link => {
            return (
              <li key={link.id}>
                <AniLink fade to={link.url}>{link.text}</AniLink>
              </li>
            )
          })}
          <li>
            <AniLink className="snipcart-checkout" fade to="/checkout">checkout</AniLink>
          </li>
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg { font-size: 2rem; }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
