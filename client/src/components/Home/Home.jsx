import "./Home.scss";
import Banner from "./Banner/Banner"
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect,useContext } from "react";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";


const Home = () => {
    const {categories,setCategories,products,setProducts} = useContext(Context);

    useEffect(()=>{
        getProducts()
        getCategories()
    },[]);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then(res => {
            console.log(res)
            setCategories(res)
        });
    };

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then(res => {
            console.log(res)
            setProducts(res)
        });
    };


    return <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
               <Category categories={categories} />
               <Products headingText='Popular Products' products={products}/>
            </div>
        </div>
        </div>;
};

export default Home;
