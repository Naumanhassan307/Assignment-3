// import { useEffect, useState } from "react";

// export function UseMens() {
//   const [Mens, setMens] = useState([{}]);

//   async function categ() {
//     let apiResponse = await fetch(
//       "https://fakestoreapi.com/products/category/Mens"
//     );
//     let product = await apiResponse.json();
//     setMens(product);
//   }

//   useEffect(() => {
//     categ();
//   }, []);

//   console.log("MY Cate", Mens);
//   return [Mens];
// }
