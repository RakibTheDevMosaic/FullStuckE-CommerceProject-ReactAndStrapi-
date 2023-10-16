import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  useFetch  from "../../../hooks/useFetch";

const Search = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-model">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={handleChange}
        />
        <MdClose className="close-btn" onClick={() => setSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div key={item.id} className="result-item" onClick={()=>{
                navigate('/product/'+item.id)
                setSearch(false)
            }}>
              <div className="img-container">
                <img src={process.env.REACT_APP_API_BASE_URL+item.attributes.img.data[0].attributes.url} alt="" />
              </div>
              <div className="p-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
