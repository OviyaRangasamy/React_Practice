import { useMemo } from "react";
import { useEffect, useState } from "react";

export const UseMemoProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((data) => {
      setProducts(data);
      console.log("test api",products)
      });
  }, []);

  console.log("Re-render");

  const isMatchingCharacter = (str, char) => {
    console.log("char", char);
    if (!str) return false;
    str = str.toLowerCase();
    char = char.toLowerCase();
    console.log("check", str.match(char));
    return str.match(char);
  };

  const filterProduct = useMemo(() => {
    const result = products.filter((item) => {
      const { title, description, category } = item;

      if (isMatchingCharacter(title, search)) {
        console.log("yes")
        return true;
      }

      if (isMatchingCharacter(description, search)) {
        console.log("yes")
        return true;
      }

      if (isMatchingCharacter(category, search)) {
        console.log("yes")
        return true;
      }

      return false;
    });

    return result
    console.log("res", result)
  }, [search, products])



  return (
    <>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        <h1>My Products</h1>
        {console.log("pro",products)}
        {console.log("filtr", filterProduct)}
        <ul>
          {filterProduct.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );


}






