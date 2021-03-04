import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Categories = () => {
  return (
    <CategoriesStyled>
      <div className='intro'>
        <h1>welcome to my shop</h1>
        <p>feel free</p>
      </div>
      <div className='categories container'>
        <Link to='/shop?category=sweat-shirt' className='img-container'>
          <img src='https://images.asos-media.com/products/kappa-hoodie-met-logoprint-in-rood/9848711-2?$XXL$&wid=513&fit=constrain' alt='Sweat-shirts category' />
          <span>Sweat-shirts</span>
        </Link>
        <Link to='/shop?category=hoodie' className='img-container'>
          <img src='https://img.giglio.com/images/prodZoom/317315.002_3.jpg' alt='Hoodie' />
          <span>Hoodie</span>
        </Link>
        <Link to='/shop?category=shirts' className='img-container'>
          <img src='https://resources.mandmdirect.com/Images/_default/k/p/4/kp471_1_cloudzoom.jpg' alt='Shirts category' />
          <span>Shirts</span>
        </Link>
        <Link to='/shop?category=jackets' className='img-container'>
          <img src='https://www.lifestylesports.com/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dwb7fc2496/images/55014713xlarge.jpg' alt='Jackets category' />
          <span>Jackets</span>
        </Link>
      </div>
    </CategoriesStyled>

  )
}

const CategoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 0;
  .intro {
    text-align: center;
    margin: 1rem 0 3rem;
    h1 {
      text-transform: uppercase;
    }
    p{
      color: silver;
    }
  }
  .container {
      padding:0;
    }
  .categories {
    display: grid;
    grid-gap: 1.5rem;
   
    .img-container{
      position: relative;
      overflow: hidden;
      cursor: pointer;
      width:309px;
      height:402px;
    }
    .img-container img{
      transition: all 0.4s ease-in;
    }
    .img-container:hover img{
      transform: scale(1.1);
    }
    .img-container:nth-child(1){
      grid-area: women;
    }
    .img-container:nth-child(2){
      grid-area: men;
    }
    .img-container:nth-child(3){
      grid-area: bags;
    }
    .img-container:nth-child(4){
      grid-area: shoes;
    }
    grid-template-columns: none;
    grid-template-areas:
      'women women bags men men'
      'women women bags men men'
      'women women shoes men men'
      'women women shoes men men';
    span{
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: var(--light-clr);
      padding: 0.5rem 1rem;
    }
  }
  @media(max-width: 996px){
    margin: 0 auto 5rem;
    .intro {
      margin: 3rem 0;
      h1{
        font-size: 1.3rem;
      }
    }
    .container {
      padding: 0;
    }  
  }
  @media (max-width: 768px){
    .categories{
      grid-template-areas:
        'women bags'
        'shoes men';
      grid-gap: 0.6rem;
      .img-container {
        height: 100%;
        img{
          height: 100%;
        }
      }
    }
  }
`

export default Categories
