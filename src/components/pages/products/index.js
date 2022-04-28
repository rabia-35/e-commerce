import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Card, Button, Container, Row} from "react-bootstrap"
import {useParams} from "react-router-dom"
import {filtered} from "../../../redux/products/productsSlice"


function Products() {
  const {category}=useParams()// Getting the endpoint in the URL
  const dispatch=useDispatch()
  const filterProducts=useSelector(state=>state.product.filterProd)
  
  //refreshing in filtered function when page is refreshed
 useEffect(()=>{
  dispatch(filtered(category))
 },[dispatch, category])
  
  return (
        <Container>
          <Row>
          { filterProducts &&(
            filterProducts.map(item=>(
              <Card key={item.id} style={{ width: '12rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  
                  <Button variant="primary">Go Detail</Button>
                </Card.Body>
              </Card>
            ))
          )
            
          }
          </Row>
        </Container>
  )
}

export default Products