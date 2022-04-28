import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Container, Row, Col, Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import { filtered } from '../../../redux/products/productsSlice'
function Home() {
const items=useSelector(state=>state.product.items)
const dispatch=useDispatch();

const handleClick=(category)=>{
dispatch(filtered(category))
}

  return (
    <Container>
      <Row xs={1} sm={3}  >
        <Col >
          <Link to={`/category/${items[5].category}`} onClick={()=>handleClick(items[5].category)} >
              <Card  className='category' >
                <Card.Img variant="top" src={items[5].img} className="home-img" />
                <Card.Body>
                  <Card.Title>{items[5].category}s </Card.Title>
                </Card.Body>
              </Card>
          </Link>
        </Col>
        <Col >
          <Link to={`/category/${items[10].category}`} onClick={()=>handleClick(items[10].category)} >
              <Card className='category'>
                <Card.Img variant="top" src={items[10].img} />
                <Card.Body>
                  <Card.Title>{items[10].category}s</Card.Title>
                </Card.Body>
              </Card>
          </Link>
        </Col>
        <Col>
          <Link to={`/category/${items[16].category}`} onClick={()=>handleClick(items[16].category)} >
              <Card className='category'>
                <Card.Img variant="top" src={items[16].img} />
                <Card.Body>
                  <Card.Title>{items[16].category}s</Card.Title>
                </Card.Body>
              </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Home