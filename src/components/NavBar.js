import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks = links.map((link, index) => {
    return<nav key= {index}>{links}</nav>
  });

    return<nav>{
      <div>
       <a href="#home">home</a>
       <a href="#about">about</a>
       <a href="#projects">projects</a>
      </div>
      
      }</nav>
  }
 
  


export default NavBar;
