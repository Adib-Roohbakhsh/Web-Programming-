import "./Product.css"
const Product = ({ product,addToBasket }) => {
    
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-p">Brand: {product.brand}</p>
            <p className="product-p">Category :{product.category}</p>
            <p className="product-p">{product.description}</p>
             <p className="product-p">{product.availabality ? "Available" : "Not Available"}</p>
            <p className="product-p">{product.price} $ </p>
            <button className="product-button"onClick={()=> addToBasket(product.id)}>Add to Basket</button>
        </div>
    );
};

export default Product;
