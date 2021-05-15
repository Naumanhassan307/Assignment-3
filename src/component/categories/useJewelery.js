import { useEffect, useState } from "react";

export function UseJewelery() {
  const [Jewelery, setJewelery] = useState([{}]);

  async function categ() {
    let apiResponse = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    let product = await apiResponse.json();
    setJewelery(product);
  }

  useEffect(() => {
    categ();
  }, []);

  console.log("MY Cate", Jewelery);
  return [Jewelery];
}
