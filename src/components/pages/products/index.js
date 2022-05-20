import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Card, Button, Container, Row, Col, Dropdown, DropdownButton, Badge} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import {filtered, addBasket } from "./../../../redux/products/productsSlice"

function Products() {
  const {category}=useParams()// Getting the endpoint in the URL
  const dispatch=useDispatch()
  const filterProducts=useSelector(state=>state.product.filterProd)
  const baskets=useSelector(state=>state.product.basket)
  const [count, setCount]=useState(1)

  //refreshing in filtered function and run addBasket function when the page is refreshed, the category and basket changed
 useEffect(()=>{
  dispatch(filtered(category))
 },[dispatch, category])

 const handleClick=(item)=>{
   const newItem={...item}
  newItem.piece=count
  dispatch(addBasket([newItem]))
 }
 
 let pieces=[1,2,3,4,5]
  return ( 
        <Container>
          <Row sm={3}>
          { filterProducts &&(
            filterProducts.map(item=>(
                    <Col key={item.id}>
                        <Card   className="product-card">
                          <Link   to={`/${item.category}/products/${item.id}`} >
                            <Card.Img variant="top" style={{borderRadius:"50%"}} src={item.img} />
                            <Card.Body className='d-flex justify-content-around'>
                              <Card.Title className='product-title' >{item.title}</Card.Title>
                              <Badge className='product-text'>{item.price} tl</Badge>
                            </Card.Body>
                            </Link>
                                <Container className='orderbtn'>
                                      {
                                        (!baskets || baskets.every(product=>(
                                        product.id!==item.id
                                      )))  ? <Button  className='btn-product mt-2 btn-success' variant="primary" onClick={()=>handleClick(item)}> Add Basket</Button> :
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
                          </Card>
                      </Col>
            ))
          )
          }
          </Row>
        </Container>
  )
}

export default Products