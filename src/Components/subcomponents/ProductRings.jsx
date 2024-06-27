import womenring from '../../Components/Assets/Products/womenring.png';
import necklace from '../../Components/Assets/Products/pendant.png';
import menchain from '../../Components/Assets/Products/menchain.png';
import payal from '../../Components/Assets/Products/payal.png';
import coin from '../../Components/Assets/Products/coin.png';
import menring from '../../Components/Assets/Products/menring.png';
import Product from './Product';
import './ProductRings.css';


const products = [
    { id: 1, name: 'Rings', image: '../../Components/Assets/Products/womenring.png' },
    { id: 2, name: 'Necklace', image: necklace },
    { id: 3, name: 'Payal', image: payal },
    {  id:4, name: 'Mens Chain', image: menchain},
    { id: 5, name: 'Mens Ring', image: menring },
    { id: 6, name: 'Coins', image: coin },
    
];


export default function ProductRings(){
     
    return(
    <div className="ringdisplay">

            {products.map(product => (
                <Product key={product.id} name={product.name} image={product.image} />
            ))}
            <p>hi</p>
       
    </div>
    );
}