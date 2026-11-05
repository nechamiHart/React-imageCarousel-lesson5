
function CarouselItem({alt,src} ){
    return(
        <>
        <div className="carousel-item">
            <img src={src} alt={alt}></img>
        </div>
        </>
    )
}
export default CarouselItem

