"use client";
import Link from "next/link";
import { PRODUCTS } from "@/app/furniture/PRODUCTS";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function HandleLocalStorage({ id }) {
  useEffect(() => {
    function addViewedProductToLocalStorage() {
      const viewedProducts =
        JSON.parse(localStorage.getItem("viewedProducts")) || [];

      if (!viewedProducts.includes(id)) {
        // If the list has 5 elements, remove the first element
        if (viewedProducts.length === 5) {
          viewedProducts.shift(); // Remove the first element
        }
        viewedProducts.push(id); // Add the new product ID
        localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));
      }
    }
    if (typeof window !== "undefined") {
      addViewedProductToLocalStorage();
    }
  }, []);

  function renderViewedProducts() {
    const viewedProductsString =
      typeof window !== "undefined"
        ? localStorage.getItem("viewedProducts")
        : null;

    if (viewedProductsString) {
      const viewedProducts = JSON.parse(viewedProductsString);

      const filteredProducts = PRODUCTS.filter((product) =>
        viewedProducts.includes(String(product.id))
      );

      return (
        <div className="p-viewed">
          <p>Viewed products</p>
          <div className="p-viewed-products">
            {filteredProducts.map((fav) => (
              <Link href={`/product/${fav.id}`} key={uuidv4()}>
                <div className="h-product p-viewed-product">
                  <img src={fav.imageSmall} alt={fav.title}/>
                  <span title={fav.title}>
                    <p>{fav.title}</p>
                  </span>
                  <p>
                    Price: <del> ${fav.oldPrice}</del>
                    <b> ${fav.price}</b>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return <div>{renderViewedProducts()}</div>;
}

export default HandleLocalStorage;
