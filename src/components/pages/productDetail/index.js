import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {Container, Row, Col, Button} from "react-bootstrap"
import {useParams} from  "react-router-dom";
import {addBasket} from "../../../redux/products/productsSlice"


function ProductDetail() {
  const {id}=useParams()
  const dispatch=useDispatch()
  const items=useSelector(state=>state.product.items)
  const basketProd=useSelector(state=>state.product.basket)
  console.log(basketProd)
  const detail=items.filter(item=>item.id===id)
  
  
  return (
    <Container>
      {
        detail &&(
          <Row className="mt-5">
          <Col xs={12} sm={5} >
          <img  className="detail-img" alt='characterImage' src={detail[0].img} />
          </Col>
          <Col className='detail-desc' >
            <h5>{detail[0].title} </h5>
            <p>  {detail[0].description}</p>
            <p> <strong className='text-muted'>Price :</strong> {detail[0].price} tl</p>
            <Button className='btn-btn-success' onClick={()=>dispatch(addBasket([detail[0]]))} >Basket Add</Button>
          </Col>
      </Row>
        )
      }
    </Container>
  )
}

export default ProductDetail