import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  {
    fashion: file(relativePath: { eq: "hilary-orange-earring.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight:500,cropFocus: SOUTHWEST) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const { fashion } = useStaticQuery(query)
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Designs by
          <br />
          Hilary Molloy
        </h1>
        <p>
          Hand cut designs made with love and natural elements by yours truly,
          in the beautiful Napa Valley.
        </p>
        <AniLink fade to="/shop" className="btn hero-btn">
          Shop now
        </AniLink>
      </article>
      <article className="img-container">
        <Image 
          objectFit="contain"
          fluid={fashion.childImageSharp.fluid} alt="Compilation of 2 images, of women wearing Hide and Wild jewelry."
          className="main-img"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container { display: relative; }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      background: black;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .hero-btn:hover{
      color: silver;
    }
    .img-container {
      width: 100%;
      display: block;
      position: relative;
    }
    .gatsby-image-wrapper{
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      img{
        object-position: left !important;
      }
    }
    .gatsby-image-wrapper img{
      object-fit: contain;
    }
    .main-img {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(-10%);
      border-radius: var(--radius);
      object-fit: contain;
    }
    .img-container::before {
      content: '';
      position: absolute;
      border-radius: var(--radius);
      width: 100%;
      height: 100%;
      border: 3px solid black;
      box-sizing: border-box;
      top: -16px;
      right: 68px;
    }
  }
`
export default Hero
