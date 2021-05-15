// import { useEffect, useState } from "react";

// export function UseLadies() {
//   const [Ladies, setLadies] = useState([{}]);

//   async function categ() {
//     let apiResponse = await fetch(
//       "https://fakestoreapi.com/products/category/Ladies"
//     );
//     let product = await apiResponse.json();
//     setLadies(product);
//   }

//   useEffect(() => {
//     categ();
//   }, []);

//   console.log("MY Cate", Ladies);
//   return [Ladies];
// }
