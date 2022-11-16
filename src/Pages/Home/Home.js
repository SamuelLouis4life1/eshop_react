import React, { useEffect } from 'react'
import Slider from "../../Components/slider/Slider"
import Product from "../../Components/product/Product";
import styles from "./Home.module.scss"


const Home = () => {

  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);
  return (
    <div>
      <Slider />
      <Product />
    </div>
  )
}

export default Home