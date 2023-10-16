import "./SingleProduct.scss";
import Related from "./RelatedProducts/RelatedProducts";
import { FaFacebookF, FaTwitter, FaInstagram,FaLinkedinIn, FaPinterest,FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";


const SingleProduct = () => {
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    const [quantity,setQuantity] = useState(1);

    const {handleAddToCart} = useContext(Context);

    const increment = () =>{
        setQuantity((prevState) => prevState +  1);
    };

    const decrement = () =>{
        setQuantity((prevState) =>{
            if(prevState === 1) return 1
            return prevState - 1
        })
    }

    if(!data) return;
    const product = data.data[0].attributes

    return <div className="single-main-content">
        <div className="layout">
            <div className="single-product">
                <div className="left">
                    <img src={process.env.REACT_APP_API_BASE_URL+product.img.data[0].attributes.url} alt="" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="price">BDT. {product.price}</span>
                    <span className="desc">{product.desc}</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart" onClick={()=>{
                            handleAddToCart(data.data[0],quantity)
                            setQuantity(1)
                        }}> <FaCartPlus size={20}/> Add to Cart</button>
                    </div>
                    <span className="divider"/>
                    <div className="info-item">
                        <span className="txt-bold">
                            Category :
                           <span>{product.categories.data[0].attributes.title}</span>
                        </span>
                        <span className="txt-bold">
                            Shear :
                           <span className="social-icons">
                            <FaFacebookF size={16}/>
                            <FaTwitter size={16}/>
                            <FaInstagram size={16}/>
                            <FaLinkedinIn size={16}/>
                            <FaPinterest size={16}/>
                           </span>
                        </span>
                    </div>
                </div>
            </div>
            < Related productId={id} categoryId={product.categories.data[0].id} />
        </div>
    </div>;
};

export default SingleProduct;
