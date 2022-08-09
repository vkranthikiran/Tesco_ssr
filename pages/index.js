import { useEffect, useState } from "react";
import getData from "./api/apiService";
import ProductList from "../components/product";

export default function Home({ products }) {
  const [searchText, setSearchText] = useState("");
  const [product, setProduct] = useState(products);

  useEffect(() => {
    (async () => {
      let filteredProducts = await getData(searchText, products);
      setProduct(filteredProducts);
    })();
  }, [searchText]);

  //debounce
  return (
    <>
    <div className="parent">
      <input
        type="text"
        value={searchText}
        placeholder='Search products'
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <h2 className="heading">List of Products</h2>
    </div>
      <ProductList products={product} />
    </>
      );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4001/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
