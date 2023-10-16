import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai";

import  Search  from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

const Header = () => {
    const {cartCount} = useContext(Context);
    const[showcart, setShowcart] = useState(false);
    const [scroll,setScroll] = useState(false);
    const [searchprod,setSearch] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])
    const handleShowcart = ()=>{
        setShowcart(true)
    }
    const handleScroll = ()=>{
        const offset = window.scrollY;
        if(offset>200){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    return <>
                <header className={`main-header ${scroll? 'sticky-header':''}`}>
                    <div className="header-content">
                        <ul className="left">
                            <li onClick={()=> navigate('/')}>Home</li>
                            <li>About</li>
                            <li>Categories</li>
                        </ul>
                        <div className="center" onClick={()=> navigate('/')}>RSDRMSTORE</div>
                        <div className="right">
                            <TbSearch onClick={() => setSearch(true)}/>
                            <AiOutlineHeart/>
                            <span className="cart-icon" onClick={handleShowcart}>
                                <CgShoppingCart/>
                                {!!cartCount&&<span>{cartCount}</span>}
                            </span>
                        </div>
                    </div>
                </header>
             {showcart && <Cart setShowcart={setShowcart}/>}
             {searchprod && <Search setSearch={setSearch}/>}
    </>
};

export default Header;
