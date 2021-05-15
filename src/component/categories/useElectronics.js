import { useEffect, useState } from "react";

export function UseElectronis() {
  const [Electronis, setElectronis] = useState([{}]);

  async function categ() {
    let apiResponse = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    let product = await apiResponse.json();
    setElectronis(product);
  }

  useEffect(() => {
    categ();
  }, []);

  console.log("MY Cate", Electronis);
  return [Electronis];
}
