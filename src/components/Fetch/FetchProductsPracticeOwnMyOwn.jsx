import React, { useState, useEffect, Fragment } from "react";

const FetchProductsPracticeOwnMyOwn = () => {
  const [products, setProducts] = useState([]);

  const controller = new AbortController();

  useEffect(() => {
    const getProducts = async () => {
      const resObj = await fetch("https://dummyjson.com/products", {
        signal: controller.signal,
      });
      const data = await resObj.json();
      setProducts(data.products);
    };

    getProducts();

    return () => {
      controller.abort("Component Unmounted and API Calling is also stopped");
    };
  }, []);

  return (
    <div>
      <h1>Learning Fetching In React</h1>
      {products.length === 0 ? (
        <h1>No Products Available...</h1>
      ) : (
        products.map((prod) => {
          const { id, title, description, thumbnail } = prod;
          return (
            <Fragment key={prod.id}>
              <img src={thumbnail} alt="image" />
              <h1>{title}</h1>
              <h2>{description}</h2>
            </Fragment>
          );
        })
      )}
    </div>
  );
};

export default FetchProductsPracticeOwnMyOwn;
