import React from 'react'
import "./MessageBox.css"
const MessageBox = ({orderdetails}) => {
  return (
    <div className="MessageBox">
        <div className='heading'>
           <div className='matter'>
             {console.log(orderdetails.title)}
             {orderdetails.title}
           </div>
           <div className='image'>
             <img src={orderdetails.imageURL} />
           </div>
        </div>
        <div className='hello'>
            Send a Message to start chatting
        </div>
        <input placeholder='Type a Message' className='inputbox'>
         
        </input>
    </div>
  )
}

export default MessageBox