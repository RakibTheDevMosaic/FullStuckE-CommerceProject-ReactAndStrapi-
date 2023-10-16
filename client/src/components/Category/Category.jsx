import "./Category.scss";
import Products from "../Products/Products"
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


const Category = () => {
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    return <div className="cat-main-content">
        <div className="layout">
            <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
            <Products innerpage={true} products={data}/>
        </div>
    </div>;
};

export default Category;
