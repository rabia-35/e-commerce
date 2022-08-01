import Carousel from 'react-bootstrap/Carousel';

function Slide() {
    let images=[]
    for(let i=1; i<7; i++){
        images.push({"img":`/images/img-${i}.jpg`})
    }
    images.map(item=> console.log(item.img))
  return (
    <Carousel variant="dark" >
      {
        images.map((image, key)=>(
            <Carousel.Item key={key}>
        <img
          className="d-block w-100"
          src={`${image.img}`}
          alt="slide"
        />
      </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default Slide;