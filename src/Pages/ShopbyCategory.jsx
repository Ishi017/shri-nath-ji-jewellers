import { useParams } from "react-router-dom"

export default function ShopbyCategory(){

    const {category}=useParams();

    return(
        <div>
        <p> categories {category}</p>
        </div>
    )
    }