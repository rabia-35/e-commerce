import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Container, Row, Col, Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import { filtered } from '../../../redux/products/productsSlice'
import Slide from '../../slide'
function Home() {
const items=useSelector(state=>state.product.items)
const dispatch=useDispatch();

const handleClick=(category)=>{
dispatch(filtered(category))
}

  return (
    <Container >
      <Slide />
      <Row sm={5} className="d-flex justify-content-center my-5" >
        <Col >
          <Card className='home-card'>
            <Link to={`/category/${items[1].category}`} onClick={()=>handleClick(items[10].category)} >
                <Card.Img  variant="top" src="/images/food.jpg" />
            </Link>
            <h6 >{items[1].category}s</h6>
            <Card.Body>
              <Card.Text className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing.
                <span className='text-muted'>-Lorem, ipsum.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='home-card '>
            <Link to={`/category/${items[10].category}`} onClick={()=>handleClick(items[10].category)} >
                <Card.Img style={{backgroundColor:"#1f66cc"}} variant="top" src="/images/beverage.png" />
            </Link>
            <h6>{items[10].category}s</h6>
            <Card.Body>
              <Card.Text className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing.
                <span className='text-muted'>-Lorem, ipsum.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='home-card'>
            <Link to={`/category/${items[13].category}`} onClick={()=>handleClick(items[10].category)} >
                <div style={{backgroundColor:"#ffd75e"}}>
                <Card.Img style={{ borderRadius:"50%"}} variant="top" src="/images/techonological.png" />
                </div>   
            </Link>
            <h6>{items[13].category}s</h6>
            <Card.Body>
              <Card.Text className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing.
                <span className='text-muted'>-Lorem, ipsum.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home