import React from "react";
import URL_BACKEND from "./../../config";
import ProductsList from "./ProductsList/ProductsList";

export default class ProductsPage extends React.Component {
    constructor(){
        super()
        this.state={
            arrayProducts:[]
        }
    }

    componentDidMount(){
        const URL_PRODUCTS = `${URL_BACKEND}/productList`;
        fetch(URL_PRODUCTS)
        .then(response=>response.json())
        .then((products)=>{this.setState({arrayProducts: products})})
        .catch((error)=>{/* TODO controlarCatchHandle */})
    }

    render() {
        return (
            <section className="productos">
                <h2>Productos</h2>
                {this.state.arrayProducts.length > 0 && (
                    <ProductsList arrayProducts={this.state.arrayProducts}/>
                )}
            </section>
        )
    }
}