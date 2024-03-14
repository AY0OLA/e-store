import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
// import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./Cart.css";

const Cart = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <div className="con">
              <div className="image">
                <img
                  src={product.image}
                  alt={product.title}
                  height="400px"
                  width="400px"
                />
              </div>
              <div className="content">
                <h4 className="category">{product.category}</h4>
                <h1 className="productTitle">{product.title}</h1>
                <p className="rate">
                  Rating{product.rating && product.rating.rate} <FaStar />
                </p>
                <div className="input">
                  <input />
                  <span>*</span>
                  <h3 className="price">${product.price}</h3>
                  <span className="equal">=</span>
                  <span className="total">$900</span>
                </div>

                <p className="description">{product.description}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div>
        <div className="container my-4 py-4">
          <div className="row py-4 mx-2">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
