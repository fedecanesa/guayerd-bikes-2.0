import React from "react";
import Product from "./Product/Product";

export default class ProductsList extends React.Component 
{
    render() {
        const { arrayProducts } = this.props;
        return (
            <ul className="products-list">
            {
                arrayProducts.map((product, index)=>{ 
                    return (
                        <li key={index}><Product product={product}></Product></li>
                    )
                })
            }
            </ul>
        )
    }
}