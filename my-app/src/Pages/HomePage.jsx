import React from "react";
import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import Categories from './../components/Categories';

function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Categories></Categories>
    </div>
  );
}

export default HomePage;
