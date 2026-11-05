import "./Carousel.css"
import CarouselItem from "./CarouselItem"

function Carousel({images ,intervalSeconds=3}){
    return(
        <>
        <div className="carousel">
        {images.map((img,index) =>
            (<CarouselItem key={index} 
                    src={img} 
                    alt={`תמונה ${index + 1}`}/>
                ))}
        </div>
        </>
    )
}
export default Carousel
