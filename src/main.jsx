// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import "./index.css";
// import App from "./App.jsx";

// import { Provider } from "react-redux";
// import { BrowserRouter,Router,Route } from "react-router-dom";
// import ScrollToTop from "./Components/ScrollToTop"  ;
// import store from "./Redux/Store";
// import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <ScrollToTop />
//         <Navbar />
//         <Router>
//           <Route path="/" element={<Home/>} />
//         </Router>
//         <App />
//       </BrowserRouter>
//       {/* <ScrollToTop /> */}
//     </Provider>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import store from "./Redux/Store";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/product" element={<Product />} />
          <Route path ="/cart" element={<Cart />} />
        </Routes>

        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);