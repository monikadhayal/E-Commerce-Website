// import Footer from "../Components/Footer";
// import React from "react";

// const ContactPage = () => {
//   return (
//     <>
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Contact Us</h1>
//         <hr />
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div className="form my-3">
//                 <label htmlFor="Name">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Name"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div className="form my-3">
//                 <label htmlFor="Email">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="Email"
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div className="form my-3">
//                 <label htmlFor="text">Message</label>
//                 <textarea
//                   row={5}
//                   name=""
//                   className="form-control"
//                   id="Password"
//                   rows="3"
//                   placeholder="Enter your Message here"
//                 ></textarea>
//               </div>
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="btn btn-dark my-2 px-4 mx-auto"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };
// export default ContactPage;


import Footer from "../Components/Footer";
import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-lime-50 py-16 text-center">
        <h1 className="text-5xl font-extrabold">Contact Us</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mt-3">
          Koi sawaal hai? Hum sunne ke liye hamesha tayar hain!
        </p>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center g-4">
          {/* Left - Contact Info */}
          <div className="col-md-4 bg-lime-100">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h5 className="text-xl font-bold mb-4">Get in Touch</h5>

              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-map-marker-alt fa-lg me-3 text-gray-600"></i>
                <p className="mb-0 text-gray-500">Jaipur, Rajasthan, India</p>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope fa-lg me-3 text-gray-600"></i>
                <p className="mb-0 text-gray-500">support@ecommerce.com</p>
              </div>

              <div className="d-flex align-items-center mb-4">
                <i className="fas fa-phone fa-lg me-3 text-gray-600"></i>
                <p className="mb-0 text-gray-500">+91 98765 43210</p>
              </div>

              <h6 className="font-bold mb-3">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-dark text-decoration-none">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="text-dark text-decoration-none">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#" className="text-dark text-decoration-none">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="col-md-6 bg-lime-100">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h5 className="text-xl font-bold mb-4">Send a Message</h5>

              <form>
                <div className="row ">
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="FirstName"
                      className="form-label fw-semibold"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="FirstName"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="LastName"
                      className="form-label fw-semibold"
                    >
                      Last Name
                    </label>
                    <input type="text" className="form-control" id="LastName" />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="Email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Subject" className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Subject"
                    placeholder="Kya help chahiye?"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="Message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="Message"
                    rows="5"
                    placeholder="Apna message yahan likhein..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2 fw-semibold"
                >
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;