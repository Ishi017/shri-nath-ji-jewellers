import '../../Styles/SwipeBoards.css'
import { useState } from "react";
import { useSwipeable} from "react-swipeable";
import image1 from '../../Components/Assets/swipeboard1.png';
import image2 from '../../Components/Assets/swipeboard2.png';
import image3 from '../../Components/Assets/swipeboard3.png';

export default function Swipeboard(){

    let [idx,setIdx]=useState(0);

    const swipeboards=[
       image1, image2, image3
    ];



    const handlers=useSwipeable({
        onSwipedLeft: () => {
            console.log('Swiped left');
            setIdx((prevIndex) => (prevIndex + 1) % swipeboards.length);
          },
          onSwipedRight: () => {
            
            setIdx((prevIndex) => (prevIndex - 1 + swipeboards.length) % swipeboards.length);
          },
          preventDefaultTouchmoveEvent: true,
          trackMouse: true
    });

    const goToNext = () => {
        setIdx((prevIndex) => (prevIndex + 1) % swipeboards.length);
    };

    const goToPrevious = () => {
        setIdx((prevIndex) => (prevIndex - 1 + swipeboards.length) % swipeboards.length);
    };

return(


    <div className="boards" {...handlers}>
    <button className="prevboard" onClick={goToPrevious} >{'<'}</button>
        <img src={swipeboards[idx]} alt="" />
        <button className="nextboard" onClick={goToNext}>{'>'}</button>
     </div>
    

  
);

};