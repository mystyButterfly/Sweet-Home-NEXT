import Link from "next/link";
import { PRODUCTS } from "./furniture/PRODUCTS";
import FavoritesCarousel from "@/components/SlickCarousel";

const HammerSVG = (
  <svg
    width="14px"
    height="14px"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="hammerSVG"
  >
    <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
      <g transform="translate(0.000000, 1.000000)" fill="currentColor">
        <g>
          <path d="M14.217,14.949 C14.748,15.482 15.076,15.103 15.512,14.668 C15.948,14.233 16.326,13.904 15.795,13.372 C15.795,13.372 8.393,5.977 6.565,4.154 L4.987,5.731 L14.217,14.949 L14.217,14.949 Z" />
          <path
            d="M2.048,7.015 L2.662,6.411 C2.662,6.411 2.391,5.668 2.788,5.312 C3.185,4.956 3.855,5.176 3.855,5.176 L6.01,3.093 C6.01,3.093 5.859,2.01 6.059,1.81 C6.259,1.61 8.494,0.521 8.71,0.303 L8.251,-0.156 C8.251,-0.156 5.123,0.22 4.784,0.558 C4.585,0.758 3.096,2.262 2.034,3.324 C2.034,3.324 2.3,4.083 1.95,4.433 C1.599,4.784 0.809,4.533 0.809,4.533 C0.436,4.906 0.186,5.155 0.186,5.155 C-0.077,5.42 0.078,5.792 0.401,6.115 L1.087,6.801 C1.412,7.125 1.785,7.278 2.048,7.015 L2.048,7.015 Z"
            className="si-glyph-fill"
          />
        </g>
        <path
          d="M11.733,5.515 C12.81,6.026 14.161,5.869 15.055,4.975 C15.745,4.285 16.019,3.336 15.872,2.444 L14.351,3.963 L13.057,4.284 L11.595,2.842 L11.938,1.505 L13.445,0.017 C12.552,-0.129 11.543,0.082 10.853,0.773 C9.958,1.668 9.836,3.052 10.347,4.13 L9.353,5.123 C9.79,5.558 10.257,6.025 10.741,6.508 L11.733,5.515 L11.733,5.515 Z"
          className="si-glyph-fill"
        />
        <path
          d="M7.432,10.119 L5.927,8.615 L4.619,9.924 C4.537,10.004 4.479,10.095 4.438,10.19 C4.361,10.16 4.318,10.159 4.291,10.17 C4.041,10.087 3.777,10.031 3.5,10.031 C2.119,10.031 1,11.136 1,12.5 C1,13.864 2.119,14.969 3.5,14.969 C4.881,14.969 6,13.864 6,12.5 C6,12.217 5.941,11.949 5.854,11.696 C5.849,11.672 5.848,11.65 5.834,11.615 C5.938,11.572 6.036,11.514 6.122,11.427 L7.432,10.119 L7.432,10.119 Z M3.5,13.938 C2.688,13.938 2.031,13.295 2.031,12.5 C2.031,11.705 2.687,11.062 3.5,11.062 C4.313,11.062 4.969,11.705 4.969,12.5 C4.969,13.295 4.312,13.938 3.5,13.938 L3.5,13.938 Z"
          className="si-glyph-fill"
        />
      </g>
    </g>
  </svg>
);

function Home() {
  let favorites = [];
  favorites = PRODUCTS.filter((prod) =>
    [101, 104, 105, 106, 109, 111, 116].includes(prod.id)
  );

  return (
    <>
      <h1 className="h-title">Furniture for Your home</h1>
      <div className="h-mobile-popular-p">
        <FavoritesCarousel favorites={favorites} />
      </div>

      <div className="h-post">
        <img src="/assets/home/t3s.jpg" alt="Wooden table" />
        <div>
          <h1>High-quality furniture at reasonable prices</h1>
          <Link className="h-post-link" href="/furniture">
            Search furniture
          </Link>
        </div>
      </div>

      <div className="h-post">
        <div>
          <h1>Our services:</h1>
          <h2>
            <ul>
              <li>{HammerSVG} delivery</li>
              <li>{HammerSVG} instalation</li>
              <li>{HammerSVG} repair</li>
              <li>{HammerSVG} warranty</li>
            </ul>
          </h2>
          <Link className="h-post-link" href="/services">
            Detail
          </Link>
        </div>
        <img
          src="/assets/home/delivery1.jpg"
          alt="How to order furniture delivery?"
        />
      </div>

      <div className="h-post">
        <img
          src="/assets/home/ind.jpg"
          alt="Making furniture behind the parameters"
        />
        <div>
          <h1>Making furniture for an individual order</h1>
          <Link className="h-post-link" href="/iorder">
            Custom order
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
