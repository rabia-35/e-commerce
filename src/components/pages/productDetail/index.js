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
    <Container>
      {
        detail &&(
          <Row >
          <Col xs={12} sm={5} className="mt-5">
          <img  className="detail-img" alt='characterImage' src={detail[0].img} />
          </Col>
          <Col className='detail-desc mt-5' >
            <h5>{detail[0].title} </h5>
            <p>  {detail[0].description}</p>
            <p> <strong className='text-muted'>Price :</strong> {detail[0].price} tl</p>
            <Container className='orderbtn'>
                                      {
                                        (!baskets || baskets.every(product=>(
                                        product.id!==detail[0].id
                                      )))  ? <Button  className='btn-product mt-2 btn-success' variant="primary" onClick={()=>handleClick(detail[0])}> Add Basket</Button> :
                                      <Button  className='btn-product mt-2 btn-secondary' variant="primary" >Added</Button>
                                      }
                                      <DropdownButton size="sm" align="end" title="Piece" id="dropdown-menu-align-end" className=''>
                                        {
                                          pieces.map((piece,key)=>(
                                            <Dropdown.Item key={key}   onClick={()=>setCount(piece)} eventKey={piece}>{piece}</Dropdown.Item>
                                          ))
                                        }
                                      </DropdownButton>
                                </Container>
          </Col>
      </Row>
        )
      }
    </Container>
  )
}

export default ProductDetail