'use client'
import { PRODUCTS } from "./PRODUCTS";
import ProductLarge from "@/components/productLarge/productLarge";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import './shop.css'
import Sidebar from "@/components/Sidebar";


function Furniture() {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const [filterArguments, setFilterArguments] = useState({
    price: "priceall",
    type: "typeall",
    style: "all",
    eco: "all",
    material: "all"
  });

  useEffect(() => {
    document.title = "Search Furniture - Sweet Home"
  }, []);


  const updateFilterArguments = (newFilterArguments) => {
    setFilterArguments((prevState) => ({
      ...prevState,
      ...newFilterArguments,
    }));
  };

  useEffect(() => {
    const getFilteredProducts = (products, filters) => {
      return products.filter((product) => {
        const priceCondition = (() => {
          switch (filters.price) {
            case "priceall":
              return true; // Include all products
            case "200":
              return product.price >= 0 && product.price <= 200;
            case "500":
              return product.price > 200 && product.price <= 500;
            case "501":
              return product.price > 500;
            default:
              return true; 
          }
        })();
  
        const typeCondition = filters.type === "typeall" || product.type === filters.type;
        const styleCondition = filters.style === "all" || product.color === filters.style;
        const ecoCondition = filters.eco === "all" || product.eco === filters.eco;
        const materialCondition = filters.material === "all" || product.material === filters.material;
  
        return priceCondition && typeCondition && styleCondition && ecoCondition && materialCondition;
      });
    };
  
    const filteredProducts = getFilteredProducts(PRODUCTS, filterArguments);
    setFilteredProducts(filteredProducts); // Output
  }, [filterArguments]);
  

  const handleSearch = (event) => {
    const searchedProducts = PRODUCTS.filter((product) =>
      product.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
  };


  const handleSortAsc = () => {
    let sortedProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
    setFilteredProducts(sortedProducts);
  };
  const handleSortDes = () => {
    let sortedProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
    setFilteredProducts(sortedProducts);
  };
  const handleSortDef = () => {
    let sortedProducts = [...filteredProducts].sort((a, b) => a.id - b.id);
    setFilteredProducts(sortedProducts);
  };

 
  //sidebar mobile version
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };
  return (
    <>
      <div className="search">
        <div className="Itallianno">
          Transform Your Space
          <br /> with Style!
        </div>
        <div>
          <input type="text" onChange={handleSearch} placeholder="Search ..." />
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="searchicon"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <div>
          Sort by:
          <select
            className="shopSelect"
            onChange={(e) => {
              if (e.target.value === "def") {
                handleSortDef();
              } else if (e.target.value === "asc") {
                handleSortAsc();
              } else if (e.target.value === "des") {
                handleSortDes();
              }
            }}
          >
            <option value="def">default sorting</option>
            <option value="asc">price low to hight</option>
            <option value="des">price hight to low</option>
          </select>
        </div>
      </div>
      <div className="shopAndSidebar">
        <div className="sidebarTogler">
          <button onClick={toggleSidebar}>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-sliders"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
              />
            </svg>
            {isSidebarOpen ? " Close filters" : " Open filters"}
          </button>
        </div>

        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar setFilterArguments={updateFilterArguments} />
        </div>

        <div className="shop">
          <div className="f-container">
            {filteredProducts.map((product) => (
              <div key={uuidv4()} className="f-product">
                <ProductLarge element={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Furniture;
