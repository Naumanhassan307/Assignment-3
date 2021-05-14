import { useEffect, useState } from "react";

export function UseCategories() {
  const [categories, setCategories] = useState([{}]);

  async function categ() {
    let apiResponse = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    let product = await apiResponse.json();
    setCategories(product);
  }

  useEffect(() => {
    categ();
  }, []);

  console.log("MY Cate", categories);
  return [categories];
}
