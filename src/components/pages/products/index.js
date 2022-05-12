import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Card, Button, Container, Row, Col, Dropdown, DropdownButton} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import {filtered, addBasket } from "./../../../redux/products/productsSlice"

function Products() {
  const {category}=useParams()// Getting the endpoint in the URL
  const dispatch=useDispatch()
  const filterProducts=useSelector(state=>state.product.filterProd)
  const baskets=useSelector(state=>state.product.basket)
  const [basket, setBasket]=useState([])
  const [count, setCount]=useState(1)

  //refreshing in filtered function and run addBasket function when the page is refreshed, the category and basket changed
 useEffect(()=>{
  dispatch(filtered(category))
  if(basket.length>0){
    dispatch(addBasket(basket))
  }
 },[dispatch, category, basket])

 const handleClick=(item)=>{
   setBasket([item])
 }
 
 console.log(count)
 let pieces=[1,2,3,4,5]
  return (
        <Container>
          <Row sm={3}>
          { filterProducts &&(
            filterProducts.map(item=>(
                    <Col key={item.id}>
                        <Card   className="product-card">
                          <Link   to={`/${item.category}/products/${item.id}`} >
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body >
                              <Card.Title className='product-body' >{item.title}</Card.Title>
                            </Card.Body>
                            </Link>
                                <Container className='orderbtn'>
                                      <Button  className='btn-product mt-2 btn-success' variant="primary"  onClick={()=>handleClick(item)} >
            
                                      {
                                        baskets && baskets.every(product=>(
                                        product.id!==item.id
                                      ))  ? "Add basket": "Added"
                                      }

                                      </Button>
                                      <DropdownButton align="end" title="Piece" id="dropdown-menu-align-end">
                                        {
                                          pieces.map((piece,key)=>(
                                            <Dropdown.Item key={key} onClick={()=>setCount(piece)} eventKey={piece}>{piece}</Dropdown.Item>
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