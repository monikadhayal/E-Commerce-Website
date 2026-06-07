// import React from "react";
// import {Footer} from "../Components";
// import { Navbar } from "../Components";


// const AboutPage = () => {
//     return (
//       <>
        
//         <div className="container my-3 py-3">
//           <h1 className="text-center">About Us</h1>
//           <hr />
//           <p className="lead text-center">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
//             voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet
//             consectetur adipisicing elit. Voluptas, voluptate.
//           </p>
//           <h2 className="text-center py-4"> Our Products</h2>
//           <div className="row">
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <div className="card  h-100">
//                 <img
//                   src="https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg"
//                   className="card-img-top img-fluid"
//                   alt="Product 1"
//                   height={160}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">Mens's Clothing</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <div className="card  h-100">
//                 <img
//                   src="https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg"
//                   //?auto=compress&cs=tinysrgb&w=600
//                   className="card-img-top img-fluid"
//                   alt="Product 2"
//                   height={160}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">Womens's Clothing</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <div className="card  h-100">
//                 <img
//                   src="https://images.pexels.com/photos/5301351/pexels-photo-5301351.jpeg"
//                   className="card-img-top img-fluid"
//                   alt="Product 1"
//                   height={160}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">Jewelry</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <div className="card  h-100">
//                 <img
//                   src="https://images.pexels.com/photos/33531830/pexels-photo-33531830.jpeg"
//                   className="card-img-top img-fluid"
//                   alt="Product 1"
//                   height={160}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">Electronics</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <Footer />
//       </>
//     );
// }

// export default AboutPage;


import React from "react";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-lime-50 py-16 text-center">
        <h1 className="text-5xl font-extrabold">About Us</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mt-5">
          We are passionate about bringing you the best products at the best
          prices.
        </p>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 ">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-2">Our Products</h2>
          <p className="text-center text-gray-400 mb-8">
            Explore our wide range of categories
          </p>

          <div className="row g-4">
            {/* Mens */}
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100 overflow-hidden rounded-3">
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src="https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg"
                    className="img-fluid w-100 h-100"
                    alt="Mens Clothing"
                    style={{ objectFit: "cover", transition: "transform 0.3s" }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div className="card-body text-center py-3">
                  <h5 className="fw-bold mb-0">Men's Clothing</h5>
                  <p className="text-gray-400 small mt-1">
                    Trendy & Comfortable
                  </p>
                </div>
              </div>
            </div>

            {/* Womens */}
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100 overflow-hidden rounded-3">
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src="https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg"
                    className="img-fluid w-100 h-100"
                    alt="Womens Clothing"
                    style={{ objectFit: "cover", transition: "transform 0.3s" }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div className="card-body text-center py-3">
                  <h5 className="fw-bold mb-0">Women's Clothing</h5>
                  <p className="text-gray-400 small mt-1">Elegant & Stylish</p>
                </div>
              </div>
            </div>

            {/* Jewelry */}
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100 overflow-hidden rounded-3">
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src="https://images.pexels.com/photos/5301351/pexels-photo-5301351.jpeg"
                    className="img-fluid w-100 h-100"
                    alt="Jewelry"
                    style={{ objectFit: "cover", transition: "transform 0.3s" }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div className="card-body text-center py-3">
                  <h5 className="fw-bold mb-0">Jewelry</h5>
                  <p className="text-gray-400 small mt-1">Shine & Sparkle</p>
                </div>
              </div>
            </div>

            {/* Electronics */}
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100 overflow-hidden rounded-3">
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src="https://images.pexels.com/photos/33531830/pexels-photo-33531830.jpeg"
                    className="img-fluid w-100 h-100"
                    alt="Electronics"
                    style={{ objectFit: "cover", transition: "transform 0.3s" }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div className="card-body text-center py-3">
                  <h5 className="fw-bold mb-0">Electronics</h5>
                  <p className="text-gray-400 small mt-1">Smart & Modern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-3 col-6">
            <h2 className="text-4xl font-extrabold">500+</h2>
            <p className="text-gray-400">Products</p>
          </div>
          <div className="col-md-3 col-6">
            <h2 className="text-4xl font-extrabold">10K+</h2>
            <p className="text-gray-400">Happy Customers</p>
          </div>
          <div className="col-md-3 col-6">
            <h2 className="text-4xl font-extrabold">4</h2>
            <p className="text-gray-400">Categories</p>
          </div>
          <div className="col-md-3 col-6">
            <h2 className="text-4xl font-extrabold">24/7</h2>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;