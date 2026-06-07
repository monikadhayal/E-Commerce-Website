import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state.HandleCart); // ✅ state naam diya

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 text-center bg-light">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn btn-outline-dark mx-2">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }; // ✅ sahi jagah band kiya

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 0;
    let totalItems = 0;

    state.map((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <div className="container py-3">
          <div className="row my-4">
            <div className="col-md-5 col-lg-12 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({totalItems})<span>${Math.round(subtotal)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>${shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                    <strong>Total Amount</strong>
                    <strong>${Math.round(subtotal + shipping)}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-7 col-lg-8">
            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h4 className="mb-0">Billing address</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate>
                  <div className="form-group">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Enter your name"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid email is required.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter your address"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address2" className="form-label">
                      Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>{" "}
                      {/* ✅ for → htmlFor */}
                      <br />
                      <select className="form-select" id="country" required>
                        <option value="">Choose...</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="In">India</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select your country.
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="state" className="form-label">
                        State
                      </label>{" "}
                      {/* ✅ for → htmlFor */}
                      <br />
                      <select className="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option value="Raj">Rajasthan</option>
                        <option value="Bhi">Bihar</option>
                        <option value="Del">Delhi</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select your state.
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="zip" className="form-label">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder="Enter your zip code"
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>

                  <hr className="my-4" />
                  <h4 className="mb-3">Payment Information</h4>

                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label htmlFor="cc-name" className="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder="Enter the name on your card"
                        required
                      />
                      <small className="text-muted">
                        Full name as displayed on Card
                      </small>
                      <div className="invalid-feedback">
                        Name on card required.
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cc-number" className="form-label">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder="Enter your credit card number"
                        required
                      />
                      <div className="invalid-feedback">
                        Credit card number is required.
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="cc-expiration" className="form-label">
                        Expiration
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        placeholder="MM/YY"
                        required
                      />
                      <div className="invalid-feedback">
                        Expiration date required.
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="cc-cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder="Enter CVV"
                        required
                      />
                      <div className="invalid-feedback">
                        Security code required.
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                  <button className="btn w-100 btn-primary" type="submit">
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // ✅ Main return - sahi jagah
  return (
    <>
      <div className="container my-3 py-3">
        {" "}
        {/* ✅ class → className */}
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />} {/* ✅ logic fix */}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;