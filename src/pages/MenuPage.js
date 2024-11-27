import React from 'react'
import Layout from '../components/layouts/layout';
import Menu from '../components/menu';

function MenuPage() {
  return (
    <div>
      <Layout>
      <div className="container-fluid p-0">
        <div>
        <div className="hero-banner">
          <div className="row align-items-center p-5">
            <div className="col-lg-12">
              <div className="banner-text">
                <h1 className='text-white text-center'>Our Menu</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
               
        <Menu/>
               
      </Layout>
    </div>
  )
}

export default MenuPage