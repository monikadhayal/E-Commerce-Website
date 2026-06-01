import React from "react";
import {Link} from "react-router-dom";
import { Navbar } from "../Components";
import { Footer } from "../Components";

const Login = () => {

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Login Page</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="form-group my-3">
                                <label htmlFor="Email" for="display-4">Email address</label>
                                <input
                                 type="email" 
                                 class="form-control" 
                                 id="floatingInput" 
                                 placeholder="name@example.com"
                                />

                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="Password" for ="floatingPassword">Password</label>
                                <input 
                                type="password"
                                class="form-control" 
                                id="floatingPassword" 
                                placeholder="Enter your password" 
                                />
                            </div>
                              <div className="my-3">
                                <p>New Here?<Link to="/register" className="text-decoration-underline text-info"> Register</Link></p>

                              </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-dark my-2 px-4 mx-auto">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
export default Login;
