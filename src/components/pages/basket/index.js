import {useState} from 'react'
import {Table, Container, Row, Col, Button, Modal, Form, Badge} from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import  {removeBasket } from "../../../redux/products/productsSlice"



function Basket() {
  const basket=useSelector(state=>state.product.basket)
  const dispatch=useDispatch()
  const [email, setEmail]=useState("");
  const [address, setAddress]=useState("")
  const [show, setShow] = useState(false);
  const [isOrder, setIsOrder]=useState(false)
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
      localStorage.setItem("basket", JSON.stringify([]))  
      setShow(false);
      setIsOrder(true)
        
    }
    
  if(isOrder){
    return(
      <Container>
        <div><Badge>Email</Badge>{email}</div>
        <div><Badge>Address</Badge>{address}</div>
        <div><Badge size="lg" variant="warning" >Your order has been received</Badge></div>
      </Container>
    )
  }
    

  return (
    <Container  >
      {
        (basket.length===0 || !basket) && <>
        <Badge bg="secondary" text="dark" >There are no items in your basket</Badge>
        </>
      }
      <Row>
     {
       basket.length!==0 && <>
              <Col xs="12" sm="8" >
              <Table size="sm" striped bordered hover className="basket-table" >
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
                    <td><Button variant='danger' className='btn btn-sm' onClick={()=>handleClick(order.id)}>X</Button></td>
                  </tr>
                  )))
                }
              </tbody>
              
            </Table>
              </Col>
            <div> Total Price:<strong>{sum} tl</strong></div>
            <Col >
            <Button variant="primary" onClick={handleShow} >Order</Button>
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
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button  variant="primary" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
       </>
     }
     </Row>
    </Container>
  )
}

export default Basket