import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./productLarge.css";

function ProductLarge({ element }) {
  return (
    <>
      <h3>{element.title}</h3>
      <span>
        Price: <del>${element.oldPrice}</del> <b>${element.price}</b>
      </span>
      <img
        alt={element.title}
        src={element.imageSmall}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: element.feachers.replace(/\n/g, "<br />• "),
        }}
      ></div>
      <Link href={`/product/${element.id}`}>More information</Link>
      {element.bestChoice && <span className="f-best">Best choice</span>}
    </>
  );
}

export default ProductLarge;
