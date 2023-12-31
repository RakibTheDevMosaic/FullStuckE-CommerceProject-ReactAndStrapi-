import { useNavigate } from "react-router-dom";
import "./Product.scss";


const Product = ({ id, data }) => {
    const navigate = useNavigate();
  return (
    <div className="product-card" onClick={()=>navigate("/product/"+id)}>
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_API_BASE_URL + data.img.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="product-details">
        <span className="name">{data.title}</span>
        <span className="price">BDT {data.price}</span>
      </div>
    </div>
  );
};

export default Product;
