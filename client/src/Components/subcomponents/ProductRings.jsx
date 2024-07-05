import womenring from '../../Components/Assets/Products/womenring.png';
import chain from '../../Components/Assets/Products/pendant.png';
import payal from '../../Components/Assets/Products/payal.png';
import coin from '../../Components/Assets/Products/coin.png';
import earring from '../../Components/Assets/Products/AllProducts/Earrings/e1.jpg';
import poojaitems from '../../Components/Assets/Products/PoojaSamagri.png';
import bracelet from '../../Components/Assets/Products/AllProducts/MenBracelet/mb5.jpg';
import Product from './Product';
import '../../Styles/ProductRings.css'
import { Link } from 'react-router-dom';


const products = [
    { id: 1, name: 'Rings', image: womenring,item:"Ring"},
    { id: 2, name: 'Chain', image: chain,item:"Chain" },
    { id: 3, name: 'Payal', image: payal , item:"Payal"},
    {  id:4, name: 'Bracelet', image: bracelet, item:"Bracelet"},
    { id: 5, name: 'Earring', image: earring, item:"Earrings"},
    { id: 6, name: 'Coins', image: coin, item:"Coins"},
    { id: 7, name: 'Pooja Items', image: poojaitems, item:"PoojaItems"},

    
];


export default function ProductRings(){
     
    return(
    <div className="ringdisplay">

            {products.map(product => (
                <Link to={`/shopbycategory/${product.item}`}>
                <Product key={product.id} name={product.name} image={product.image} />
                </Link>
            ))}
       
    </div>
    );
}