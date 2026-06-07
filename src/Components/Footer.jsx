// import React from "react"

// const Footer =() => {
//     return(
//       <>  
//         <footer className="mb-0 text-center ">      
//             <div className="d-flex align-item-center justify-content-center pb-5">
//               <div className="col-md-6">
//                 <p className="mb-3 mb-mb-0">  Made with love by 

//                 <a href=" https://www.youtube.com/watch?v=6Zy5VLcEbZc" className = "text-decoration-underline text-dark fs-5" target="_blank" rel=" noreferrer">Your Channel</a>
//                 </p>

//               </div>
//                 </div>
//         </footer>
//       </>
//     )
// }
// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-lime-200 text-black py-10 mt-5">
        <div className="container">
          <div className="row g-4">
            {/* Brand */}
            <div className="col-md-4">
              <h5 className="text-xl font-bold mb-3">React E-Commerce</h5>
              <p className="text-black">
                Your one-stop shop for all your needs. Quality products at the
                best prices.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 text-center">
              <h5 className="text-xl font-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled text-black">
                <li className="mb-2">
                  <a
                    href="/"
                    className="text-black text-decoration-none hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/products"
                    className="text-black text-decoration-none"
                  >
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/about"
                    className="text-black text-decoration-none"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/contact"
                    className="text-black text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-md-4 text-center">
              <h5 className="text-xl font-bold mb-3">Follow Us</h5>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-black text-decoration-none">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="text-black text-decoration-none">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#" className="text-black text-decoration-none">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="text-black text-decoration-none">
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <hr className="border-gray-600 mt-4" />
          <div className="text-center text-black mt-3">
            <p className="mb-0">
              © 2024 React E-Commerce. Made with ❤️ by{" "}
              <a
                href="https://www.youtube.com/watch?v=6Zy5VLcEbZc"
                className="text-white text-decoration-underline"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-underline text-dark fs-5"
              >
                Your Channel
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;