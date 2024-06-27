import './Product.css';

export default function Product({image, name}){

    return(
    <div className="product">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>hi</p>
    </div>
    );
}