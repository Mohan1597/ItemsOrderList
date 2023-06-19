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
        <div>
        {console.log(orderdetails.messageList[1]['message'])}
        <div className='usermessage'>
            <p>{orderdetails.messageList[1]['message']}</p>
        </div>
        <div className='botmessage'>
        <p>{orderdetails.messageList[0]['message']}</p>
        </div>
        </div>
        <input placeholder='Type a Message' className='inputbox'>
         
        </input>
    </div>
  )
}

export default MessageBox