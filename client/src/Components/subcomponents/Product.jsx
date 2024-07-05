import '../../Styles/Product.css';

export default function Product({image, name}){

    return(
        <div>
    <div className="product">
        <img src={image} alt={name} />
        
    </div>
    <p className="productName">{name}</p>
    </div>
    );
}