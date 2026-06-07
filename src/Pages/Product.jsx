import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../Redux/Action";
import { Footer } from "../Components";
// import Marquee from "react-fast-marquee";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container py-2 my-5">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const showProduct = () => {
    return (
      <>
        <div className="container py-2 my-5 ">
          <div className="row">
            <div className="col-md-6 py-3 col-sm-12">
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6 py-5 col-sm-12">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="fw-bold">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-3 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={30} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={30} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={30} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={30} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const showSimilarProducts = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  <div className="card-body">
                    <Link
                      className="btn btn-dark m-1"
                      to={"/products/" + item.id}
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        {/* Product detail */}
        <div className="row">{loading ? <Loading /> : showProduct()}</div>

        {/* Similar products */}
        <div className="row my-5 py-5">
          <h2 className="text-center">You may also like</h2>
          <div style={{ overflowX: "auto", display: "flex" }}>
            {loading2 ? <Loading2 /> : showSimilarProducts()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;