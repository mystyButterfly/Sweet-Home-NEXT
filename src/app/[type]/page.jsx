import { PRODUCTS } from "../furniture/PRODUCTS";
import ProductLarge from "@/components/productLarge/productLarge";
import {v4 as uuidv4} from 'uuid'
import Error from "../not-found";

export async function generateStaticParams() {
  return ['tables', 'chairs', 'shelfs', 'benchs', 'beds', 'cabinets', 'sofas'];
}

function Group({ params }) {
  const type = params.type;
  
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const TablesList = PRODUCTS.filter((product) => product.type === type);

  return (
    <>
      {TablesList.length === 0 ? (
        <Error />
      ) : (
        <div>
          <h2 style={{ textAlign: "center", marginTop: "10px" }}>
            {capitalizeFirstLetter(TablesList[0].type)}
          </h2>
          <div className="type-container">
            {TablesList.map((product) => (
              <div key={uuidv4()} className="f-product">
                <ProductLarge element={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Group;
