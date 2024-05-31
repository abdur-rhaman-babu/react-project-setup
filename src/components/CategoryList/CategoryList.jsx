import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categorylist.json')
        .then((res)=>res.json())
        .then((data)=> setCategories(data))
    },[])

    return (
       <div>
             <h1 className="text-4xl font-semibold mb-4">Featured Jobs</h1>
        <p className="font-semibold mb-2">Expro thousands of job opportunities with all the information you need  Its your future</p>
       <div className="lg:flex max-w-5xl mx-auto justify-between mb-7">
            {
                categories && categories.map((category)=> <Category key={category.id} category = {category}/>)
            }
       </div>
       </div>
    )
}

export default CategoryList;