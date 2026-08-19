import React, { useState, useEffect, Fragment } from "react";

const FetchProductsByFollowing = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    //?for cancelling the API We will use abort controller
    const controller = new AbortController();
    async function getProducts() {
      try {
        let resp = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        let data = await resp.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();

    return () => {
      controller.abort("Component unmounted API Call Cancelled");
    };
  }, []);

  return (
    <div>
      <h1>Learning Fetching In React JS</h1>
      {products.map((prod) => {
        const { id, title, description, thumbnail } = prod;
        return (
          <Fragment key={id}>
            <img src={thumbnail} alt="image" />
            <h1>{title}</h1>
            <p>{description}</p>
            <button>Add To Cart</button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default FetchProductsByFollowing;
