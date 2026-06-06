import React from "react";
import {Footer} from "../Components";
import { Navbar } from "../Components";


const AboutPage = () => {
    return (
      <>
        
        <div className="container my-3 py-3">
          <h1 className="text-center">About Us</h1>
          <hr />
          <p className="lead text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas, voluptate.
          </p>
          <h2 className="text-center py-4"> Our Products</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card  h-100">
                <img
                  src="https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg"
                  className="card-img-top img-fluid"
                  alt="Product 1"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Mens's Clothing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card  h-100">
                <img
                  src="https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg"
                  //?auto=compress&cs=tinysrgb&w=600
                  className="card-img-top img-fluid"
                  alt="Product 2"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Womens's Clothing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card  h-100">
                <img
                  src="https://images.pexels.com/photos/5301351/pexels-photo-5301351.jpeg"
                  className="card-img-top img-fluid"
                  alt="Product 1"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Jewelry</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card  h-100">
                <img
                  src="https://images.pexels.com/photos/33531830/pexels-photo-33531830.jpeg"
                  className="card-img-top img-fluid"
                  alt="Product 1"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Electronics</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </>
    );
}

export default AboutPage;