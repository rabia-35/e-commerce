import {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {Container, Row, Col, Button, Dropdown, DropdownButton} from "react-bootstrap"
import {useParams} from  "react-router-dom";
import {addBasket} from "../../../redux/products/productsSlice"


function ProductDetail() {
  const {id}=useParams()
  const dispatch=useDispatch()
  const items=useSelector(state=>state.product.items)
  const baskets=useSelector(state=>state.product.basket)
  const [count, setCount]=useState(1)

  const detail=items.filter(item=>item.id===id)
  
  const handleClick=(item)=>{
    const newItem={...item}
   newItem.piece=count
   dispatch(addBasket([newItem]))
  }
  
  let pieces=[1,2,3,4,5]
  
  return (
    <Container className='product-detail'>
      {
        detail &&(
          <Row >
          <Col xs={12} sm={5} >
          <img  className="detail-img" alt='characterImage' src={detail[0].img} />
          </Col>
          <Col  xs={12} sm={6}  >
              <h5>{detail[0].title} </h5>
              <p>  {detail[0].description}</p>
              <p> <strong className='text-muted'>Price :</strong> {detail[0].price} tl</p>
              <div className='d-flex justify-content-start'>
                    {
                      (!baskets || baskets.every(product=>(
                      product.id!==detail[0].id
                    )))  ? <Button size="lg" className='btn mt-2 btn-outline-warning px-5' onClick={()=>handleClick(detail[0])}> Add Basket</Button> :
                    <Button variant='secondary' className='btn-sm mt-2 px-5' >Added</Button>
                    }

                    <DropdownButton align="end" title="Piece" variant="dark" className='mt-2'>
                      {
                        pieces.map((piece,key)=>(
                          <Dropdown.Item key={key}  onClick={()=>setCount(piece)} eventKey={piece}>{piece}</Dropdown.Item>
                        ))
                      }
                    </DropdownButton>
                </div>
          </Col>
      </Row>
        )
      }
    </Container>
  )
}

export default ProductDetail