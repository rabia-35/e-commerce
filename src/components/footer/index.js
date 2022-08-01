import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckPlane, faRepeat, faCreditCard, faComments, faGift } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
   
         <div className='footer d-flex justify-content-evenly mt-5 py-2 bg-light'>
            <div className='text-center'>
                <FontAwesomeIcon icon={faTruckPlane} className="fa-lg" />
                <div className='icon-title'>Free Delivery</div>
                <div className='text-muted'>For all orders over $2</div>
            </div>
            <div className='text-center'>
                <FontAwesomeIcon icon={faRepeat} className="fa-lg" />
                <div className='icon-title'>90 Days Return</div>
                <div className='text-muted'>If goods have problems</div>
            </div>
            <div className='text-center'>
                <FontAwesomeIcon icon={faCreditCard} className="fa-lg" />
                <div className='icon-title'>Secure Payment</div>
                <div className='text-muted'>100% secure payment</div>
            </div>
            <div className='text-center'>
                <FontAwesomeIcon icon={faComments} className="fa-lg" />
                <div className='icon-title'>24/7 Support</div>
                <div className='text-muted'>Dedicated support</div>
            </div>
            <div className='text-center'>
                <FontAwesomeIcon icon={faGift} className="fa-lg" />
                <div className='icon-title'>Gift Service</div>
                <div className='text-muted'>Support gift service</div>
            </div>
        
         </div>
  )
}

export default Footer