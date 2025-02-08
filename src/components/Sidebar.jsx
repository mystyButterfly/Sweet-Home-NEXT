import React, {useEffect} from "react";

const Sidebar = ({ setFilterArguments }) => {
  const handleOptionChange = (event) => {
    let newFilterArguments = {
      price: 0
    };
    newFilterArguments.price = event.target.value;
    setFilterArguments(newFilterArguments);
  };
  const handleType = (event) => {
    let newFilterArguments = {
      type: "",
    };
    newFilterArguments.type = event.target.value;
    setFilterArguments(newFilterArguments);
  };
  const handleStyle = (event) => {
    let newFilterArguments = {
      style: "",
    };
    newFilterArguments.style = event.target.value;
    setFilterArguments(newFilterArguments);
  };
  const handleEco = (event) => {
    let newFilterArguments = {
      eco: "",
    };
    newFilterArguments.eco = event.target.value;
    setFilterArguments(newFilterArguments);
  };
  const handleMaterial = (event) => {
    let newFilterArguments = {
      material: "",
    };
    newFilterArguments.material = event.target.value;
    setFilterArguments(newFilterArguments);
  };
  
  useEffect(()=>{
    const checkboxes = document.querySelectorAll('#priceall, #typeall, #styleall, #ecoall, #materialAll');
    checkboxes.forEach(checkbox => checkbox.setAttribute("checked", "true"));
  }, [])
  const clearFilters = () => {
    const checkboxes = document.querySelectorAll('#priceall, #typeall, #styleall, #ecoall, #materialAll');
    checkboxes.forEach(checkbox => {
      checkbox.checked = true;
    });
    setFilterArguments({
      price: "priceall",
      type: "typeall",
      style: "all",
      eco: "all",
      material: "all"
    });
  }
  

  return (<>
    <div>
      <h2>Price:</h2>
      <form>
      <div>
          <input
            type="radio"
            id="priceall"
            name="price"
            value="priceall"
            onChange={handleOptionChange}
          />
          <label htmlFor="priceall">all</label>
        </div>

        <div>
          <input
            type="radio"
            id="200"
            name="price"
            value="200"
            onChange={handleOptionChange}
          />
          <label htmlFor="200">0-200</label>
        </div>

        <div>
          <input
            type="radio"
            id="500"
            name="price"
            value="500"
            onChange={handleOptionChange}
          />
          <label htmlFor="500">200-500</label>
        </div>

        <div>
          <input
            type="radio"
            id="501"
            name="price"
            value="501"
            onChange={handleOptionChange}
          />
          <label htmlFor="501">over 500</label>
        </div>
      </form>
    </div>

    <div>
  <h2>Type of Products:</h2>
  <form>
  <div>
      <input
        type="radio"
        id="typeall"
        name="productType"
        value="typeall"
        onChange={handleType}
      />
      <label htmlFor="typeall">all</label>
    </div>
    <div>
      <input
        type="radio"
        id="tables"
        name="productType"
        value="tables"
        onChange={handleType}
      />
      <label htmlFor="tables">Table</label>
    </div>

    <div>
      <input
        type="radio"
        id="chairs"
        name="productType"
        value="chairs"
        onChange={handleType}
      />
      <label htmlFor="chairs">Chair</label>
    </div>

    <div>
      <input
        type="radio"
        id="shelfs"
        name="productType"
        value="shelfs"
        onChange={handleType}
      />
      <label htmlFor="shelfs">Shelf</label>
    </div>

    <div>
      <input
        type="radio"
        id="benchs"
        name="productType"
        value="benchs"
        onChange={handleType}
      />
      <label htmlFor="benchs">Bench</label>
    </div>

    <div>
      <input
        type="radio"
        id="beds"
        name="productType"
        value="beds"
        onChange={handleType}
      />
      <label htmlFor="beds">Bed</label>
    </div>

    <div>
      <input
        type="radio"
        id="cabinets"
        name="productType"
        value="cabinets"
        onChange={handleType}
      />
      <label htmlFor="cabinets">Cabinet</label>
    </div>

    <div>
      <input
        type="radio"
        id="sofas"
        name="productType"
        value="sofas"
        onChange={handleType}
      />
      <label htmlFor="sofas">Sofa</label>
    </div>
  </form>
</div>

<div>
  <h2>Color:</h2>
  <form>
  <div>
      <input
        type="radio"
        id="styleall"
        name="productStyle"
        value="all"
        onChange={handleStyle}
      />
      <label htmlFor="styleall">all</label>
    </div>
    <div>
      <input
        type="radio"
        id="black"
        name="productStyle"
        value="black"
        onChange={handleStyle}
      />
      <label htmlFor="black">black</label>
    </div>

    <div>
      <input
        type="radio"
        id="white"
        name="productStyle"
        value="white"
        onChange={handleStyle}
      />
      <label htmlFor="white">white</label>
    </div>

    <div>
      <input
        type="radio"
        id="grey"
        name="productStyle"
        value="grey"
        onChange={handleStyle}
      />
      <label htmlFor="grey">grey</label>
    </div>

    <div>
      <input
        type="radio"
        id="brown"
        name="productStyle"
        value="brown"
        onChange={handleStyle}
      />
      <label htmlFor="brown">brown</label>
    </div>
  </form>
</div>

<div>
  <h2>Eco-friendly:</h2>
  <form>
    <div>
      <input
        type="radio"
        id="ecoall"
        name="eco"
        value="all"
        onChange={handleEco}
      />
      <label htmlFor="ecoall">all</label>
    </div>
    <div>
      <input
        type="radio"
        id="ecoTrue"
        name="eco"
        value="1"
        onChange={handleEco}
      />
      <label htmlFor="ecoTrue">yes</label>
    </div>
    <div>
      <input
        type="radio"
        id="ecoFalse"
        name="eco"
        value="0"
        onChange={handleEco}
      />
      <label htmlFor="ecoFalse">no</label>
    </div>
  </form>
</div>
<div>
  <h2>Material:</h2>
  <form>
    <div>
      <input
        type="radio"
        id="materialAll"
        name="material"
        value="all"
        onChange={handleMaterial}
      />
      <label htmlFor="materialAll">all</label>
    </div>
    <div>
      <input
        type="radio"
        id="wood"
        name="material"
        value="wood"
        onChange={handleMaterial}
      />
      <label htmlFor="wood">wood</label>
    </div>
    <div>
      <input
        type="radio"
        id="metal"
        name="material"
        value="metal"
        onChange={handleMaterial}
      />
      <label htmlFor="metal">metal</label>
    </div>
    <div>
      <input
        type="radio"
        id="plastic"
        name="material"
        value="plastic"
        onChange={handleMaterial}
      />
      <label htmlFor="plastic">plastic</label>
    </div>
    <div>
      <input
        type="radio"
        id="glass"
        name="material"
        value="glass"
        onChange={handleMaterial}
      />
      <label htmlFor="glass">glass</label>
    </div>
  </form>
</div>
<button className="sidebar-btn" onClick={()=>clearFilters()}>Clear filters</button>
    </>
  );
};

export default Sidebar;
