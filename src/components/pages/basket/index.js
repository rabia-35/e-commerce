import React from 'react'
import {Table, Container, Button} from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import {removeBasket} from "../../../redux/products/productsSlice"
function Basket() {
  const basket=useSelector(state=>state.product.basket)
  const dispatch=useDispatch()

  //the id of product is sent to removeBasket function after click
  const handleClick=(id)=>{
    dispatch(removeBasket(id))
  }
  return (
    <Container>
      <Table  striped bordered hover  >
          <thead >
            <tr>
              
              <th> Name</th>
              <th> Price</th>
              <th> Quantity</th>
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
                        <td>1</td>
                        <td><Button variant='danger' className='btn btn-sm' onClick={()=>handleClick(order.id)}>X</Button></td>
                      </tr>
                  ))
                  )
                }
              </tbody>
      </Table>
    </Container>
  )
}

export default Basket