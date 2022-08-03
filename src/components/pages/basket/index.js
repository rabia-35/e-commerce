import {useState} from 'react'
import {Table, Container, Row, Col, Button, Modal, Form, Badge} from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import  {removeBasket } from "../../../redux/products/productsSlice"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStore} from "@fortawesome/free-solid-svg-icons"


function Basket() {
  const basket=useSelector(state=>state.product.basket)
  const dispatch=useDispatch()
  const [email, setEmail]=useState("");
  const [address, setAddress]=useState("")
  const [show, setShow] = useState(false);
  const [isOrder, setIsOrder]=useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  //the id of product is sent to removeBasket function after click
  const handleClick=(id)=>{
    dispatch(removeBasket(id))
  }
  
  let sum=0
    if(basket){
      for(let i=0; i<basket.length; i++){
        sum+=(basket[i].price * basket[i].piece)
    }
    }

    const handleSubmit=()=>{
      if(email && address){
        setShow(false);
        localStorage.setItem("basket", JSON.stringify([]))  
        setIsOrder([{orderEmail:email, orderAddress:address}])
      } 
      
    }
    
  if(isOrder.length>0){
    return(
      <div className='is-order'>
        <h4 className='mb-3'>Information Of Your Order Address</h4>
        <div>{email}</div>
        <div> {address}</div>
        <div className='my-4 fs-4'><Badge bg="success">Your order has been received successfully</Badge></div>
        <Link to="/" className='text-center fs-5 my-5 ' >
          <FontAwesomeIcon icon={faStore} color="tomato" className="me-2"/>
          <span>Keep Shopping</span>
        </Link>
      </div>
    )
  }
 
    

  return (
    <Container className='my-5' >
      {
        (basket.length===0 || !basket) && <>
        <div className='basket-no' >There are no items in your basket</div>
        </>
      }
      <Row className='text-center d-flex justify-content-center'>
     {
       basket.length!==0 && <>
              <Col xs="12" sm="8" >
              <Table size="lg" striped bordered hover className="fs-sm my-4" >
          <thead >
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
            <tbody >
              {
              basket && (
                basket.map(order=>(
                  <tr key={order.id}>
                    <td>{order.title} </td>
                    <td>{order.price}</td>
                    <td>{order.piece}</td>
                    <td><Button  className='btn-outline-dark btn-sm' onClick={()=>handleClick(order.id)}>X</Button></td>
                  </tr>
                  )))
                }
              </tbody>
              
            </Table>
              </Col>
            <div> Total Price:<strong>{sum} tl</strong></div>
            <Col >
            <Button   className='basket-btn my-3' onClick={handleShow} >Order</Button>
            <Modal show={show} onHide={handleClose} >
              <Modal.Header closeButton>
                <Modal.Title>Order Address</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} value={address}  onChange={(e)=>setAddress(e.target.value)}/>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <p className='text-center' style={{color:"red"}} > *Enter All The Information Of Your Order</p>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button  className='basket-btn' onClick={handleSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
       </>
     }
     <Link to="/" className='text-center fs-5 my-5 ' >
     <FontAwesomeIcon icon={faStore} color="tomato" className="me-2"/>
      <span>Keep Shopping</span>
      </Link>
     </Row>
    </Container>
  )
}

export default Basket