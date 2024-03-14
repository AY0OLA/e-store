import React from "react";

const Button = ({ children, productId }) => {
  return (
    <>
      <div>
        <button className="btn btn-outline-dark mb-2 mx-2" key={productId}>
          {children}
        </button>
        {/* <span className="quantity">{cartItems[productId]}</span> */}
      </div>
    </>
  );
};
export default Button;
