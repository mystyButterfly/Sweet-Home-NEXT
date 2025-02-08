import Link from "next/link";
import { PRODUCTS } from "@/app/furniture/PRODUCTS";
import "./product.css";
import { v4 as uuidv4 } from "uuid";
import Error from "@/app/not-found";
import HandleLocalStorage from "./handleLocalStorage";
import ButtonUClient from "./buttonUClient";

export async function generateMetadata({ params }) {
  const id = params.id;

  const product = PRODUCTS.find((product) => product.id === parseInt(id));
  
  return {
    title: `${product?.title||"Product not found"}`,
    description: `${product?.description} - Sweet home Next`,
    openGraph: {
      images: [
        {
          url: product?.imageSmall,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map(({ id }) => id);
}

const iconArrow = (
  <svg
    width="10"
    height="10"
    fill="currentColor"
    className="bi bi-chevron-right"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
    />
  </svg>
);

function Product({ params }) {
  const id = params.id;
  const product = PRODUCTS.find((product) => product.id === parseInt(id));

  const renderProductDetails = () => {
    if (!product) {
      return <Error />;
    }

    return (
      <>
        {renderPNavigation()}
        <div className="p-title-order">
          <div className="p-title-price">
            <h2>{product.title}</h2>
            <p>
              Price: <del> ${product.oldPrice}</del>
              <b> ${product.price}</b>
            </p>
          </div>
          <div className="p-order">
            <h1>To order this product:</h1>
            <h2>
              Call us on <a href="tel:012325123">0123-25-123</a>
            </h2>
            <h2>
              or send an email to{" "}
              <a href="mailto:sweerhome@mail.com">sweethome@mail.com</a>
            </h2>
          </div>
        </div>

        <div className="p-about">
          <h3>Feachers</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: product.feachers.replace(/\n/g, "<br />• "),
            }}
          ></div>
          <h3>Description</h3>
          <p>{product.description}</p>
          <h3>Key Benefits</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: product.keyBenefits.replace(/\n/g, "<br />• "),
            }}
          ></div>
          <h3>Shipping & Return</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: product.shippingReturn.replace(/\n/g, "<br />• "),
            }}
          ></div>
        </div>

        <div className="p-images">
          {product.imagesLarge.map((path) => (
            <img key={uuidv4()} src={path} alt={product.title} />
          ))}
        </div>
        <h3 className="p-reviews-title">Customer Reviews:</h3>
        {product.reviews.length ? (
          <div>
            {product.reviews.map((review) => (
              <div key={uuidv4()} className="p-review">
                <div className="p-star">{"★".repeat(review.star)}</div>{" "}
                <p>{review.comment}</p>
                {" - "}
                <div>{review.customer}</div>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet.</p>
        )}
      </>
    );
  };

  function renderPNavigation() {
    const ProductNavigation = (
      <div className="p-navigation">
        <div>
          <Link href="/furniture">Furniture</Link>
          {"  "}
          {iconArrow}
          {product && (
            <Link href={`/${product.type}`}>
              {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
            </Link>
          )}
          {"  "}
          {iconArrow}
          {"  "}
          {product.title}
        </div>
        <ButtonUClient />
      </div>
    );

    return ProductNavigation;
  }

  return (
    <>
      <div className="p-product">{renderProductDetails()}</div>
      <div>
        <HandleLocalStorage id={id} />
      </div>
    </>
  );
}

export default Product;
