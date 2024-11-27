import React from 'react'
import Header from "../layouts/header";
import Footer from "../layouts/footer";



function layout( {children} ) {
  return (
      <>
      <Header/>
      <div> {children} </div>
      <Footer/>
      </>
  )
}

export default layout
