import { useEffect, useState } from "react";



function UseCategories(){
    // const [categories]= useState([])

    async function categ(){
        let apiResponse = await fetch('https://fakestoreapi.com/products/categories')
        let product = await apiResponse.json()
        console.log("MY Cate", product)
    }

    useEffect(()=>{
    categ();        

    }, [])
}
export default UseCategories;