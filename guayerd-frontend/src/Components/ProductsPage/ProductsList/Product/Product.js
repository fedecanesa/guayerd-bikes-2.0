import React from "react";


export default class Product extends React.Component 
{
    render() {
        const { product } = this.props;
        return (
            <>
            {
                product.discountPrice !== undefined && (
                    <div className="producto">
                        <div className="imagen-productos">
                            <img src={product.imgUrl} alt={`Bicicleta: ${product.title}`}/>
                        </div>
                        <div className="informacion-producto">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <div className="datos">
                                <div>
                                    <span className="precio-tachado">
                                        <del>${product.price}</del>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <span className="descuento bold">{(100-((product.discountPrice * 100) / product.price).toFixed(0))}% OFF</span>
                                        <span><br /></span>
                                        <span className="precio-final bold">${product.discountPrice}</span> 
                                        <span>({product.currency})</span>
                                    </span>
                                </div>
                                <div className="stock">
                                    <span>Stock: </span>
                                    <span>{product.inStock} unidades.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                product.discountPrice === undefined && (
                    <div className="producto">
                        <div className="imagen-productos">
                            <img src={product.imgUrl} alt={`Bicicleta: ${product.title}`}/>
                        </div>
                        <div className="informacion-producto">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <div className="datos">
                                <div>
                                    <span>
                                        <span className="precio-final bold">${product.price}</span> 
                                        <span>({product.currency})</span>
                                    </span>
                                </div>
                                <div className="stock">
                                    <span>Stock: </span>
                                    <span>{product.inStock} unidades.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </>
        )
    }
}