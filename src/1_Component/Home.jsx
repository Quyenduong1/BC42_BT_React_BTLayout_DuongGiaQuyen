import React from 'react'
import './index.css';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import ProductItem from './ProductItem';

function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <ProductItem/>
      <Footer/>
    </div>
  )
}

export default Home;