import React from "react";
import ProductsList from "./ProductsList/ProductsList";

export default class ProductsPage extends React.Component {
    constructor(){
        super()
        this.state={
            arrayProducts:[]
        }
    }

    componentDidMount(){
        const RECURSO_PRODUCTOS = "https://guayerd-bikes.herokuapp.com/productList";
        fetch(RECURSO_PRODUCTOS)
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