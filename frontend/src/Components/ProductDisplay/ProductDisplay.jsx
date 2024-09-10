import React,{ useContext } from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";



export const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);

    return (
        <div className="productdisplay">
          <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              <img src={product.image} alt="img" />
              <img src={product.image} alt="img" />
              <img src={product.image} alt="img" />
              <img src={product.image} alt="img" />
            </div>
            <div className="productdisplay-img">
              <img className="productdisplay-main-img" src={product.image} alt="img" />
            </div>
          </div>
          <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
              <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-price-old">${product.old_price}</div>
              <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            This chicken is a relatively large bird, active by day. The body is round, the legs are unfeathered in most breeds, and the wings are short.
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-sizes">
                <div>One Size</div>
                
               
              </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span> Poultry, Largefowl</p>
            <p className="productdisplay-right-category"><span>Tags :</span> Sussex breed, Chocolate color</p>
          </div>
        </div>
      );
    };
    
    export default ProductDisplay;
    