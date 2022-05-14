import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Container, Row, Col, Card, Image} from "react-bootstrap"
import {Link} from "react-router-dom"
import { filtered } from '../../../redux/products/productsSlice'
function Home() {
const items=useSelector(state=>state.product.items)
const dispatch=useDispatch();

const handleClick=(category)=>{
dispatch(filtered(category))
}

  return (
    <Container >
      <Row xs={1} sm={3}  >
        <Col >
          <Link to={`/category/${items[5].category}`} onClick={()=>handleClick(items[5].category)} >
              <div  className='category' >
                <Image variant="top" src={items[5].img}  />
                  <h5>{items[5].category}s </h5>
              </div>
          </Link>
        </Col>
        <Col >
          <Link to={`/category/${items[10].category}`} onClick={()=>handleClick(items[10].category)} >
              <div className='category'>
                <Image variant="top" src={items[10].img} />
                  <h5>{items[10].category}s</h5>
              </div>
          </Link>
        </Col>
        <Col>
          <Link to={`/category/${items[16].category}`} onClick={()=>handleClick(items[16].category)} >
              <div className='category'>
                <Image variant="top" src={items[16].img} />
                  <h5>{items[16].category}s</h5>
              </div>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Home