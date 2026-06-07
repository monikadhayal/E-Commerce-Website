import React from "react";
import { Footer } from "../Components";
import { Navbar } from "../Components"; 
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <>
        
        <div className="container my-3 py-3 bg-lime-50">
                <h1 className="text-center">Register Page</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="form-group my-3">
                                <label htmlFor="Name" for="display-4">Name</label>
                                <input
                                 type="text" 
                                 class="form-control" 
                                 id="Name" 
                                 placeholder="Enter your Name"
                                />  
                                </div>
                               <div className="form-group my-3">
                                <label htmlFor="Email" for="display-4">Email address</label>
                                <input
                                 type="email" 
                                 class="form-control" 
                                 id="Email" 
                                 placeholder="name@example.com"
                                />
                               </div>
                               <div className="form-group my-3">
                                <label htmlFor="Password" for="display-4">Password</label>
                                <input
                                 type="password" 
                                 class="form-control" 
                                 id="Password" 
                                 placeholder="Enter your Password"
                                />
                               </div>
                                 <div className="my-3">
                                    <p>Already have an account?<Link to="/login" className="text-decoration-underline text-info"> Login</Link></p>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-dark my-2 px-4 mx-auto">Register</button>
                                </div>
                            </form>
                                </div>
                    </div>
                </div>
                <Footer />
        </>
    )
}
export default Register;