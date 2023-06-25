import React from 'react';
import "./MessageBox.css";
import { useState } from 'react';
const MessageBox = ({ orderdetails }) => {


  const [customermessage,setCustomermessage] = useState("");
  const [displaymessage, setDisplaymessage] = useState(false);
  return (
    <div className="MessageBox">
      <div className='heading'>
        <div className='matter'>
          {console.log(orderdetails.title)}
          {orderdetails.title}
        </div>
        <div className='image'>
          <img src={orderdetails.imageURL} alt="Order" />
        </div>
      </div>
      { displaymessage === false && 
              <div className='hello'>
              Send a Message to start chatting with our executive
            </div>
      }
      {/* <div>
        {orderdetails.messageList && orderdetails.messageList.length > 0 ? (
          <div>
            <div className="usermessage">
              {orderdetails.messageList[1] && orderdetails.messageList[1].message ? (
                <p>{orderdetails.messageList[1].message}</p>
              ) : null}
            </div>
            <div className="botmessage">
              {orderdetails.messageList[0] && orderdetails.messageList[0].message ? (
                <p>{orderdetails.messageList[0].message}</p>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="usermessage">
            <p>List is empty</p>
          </div>
        )}
      </div> */}
      <div className='inputbox'>
      <input placeholder='Type a Message...' className='chatbox' onChange = {(e) => {setCustomermessage(e.target.value)}} ></input>
      <img src="/Icons/messagesend-icon.png" alt="" onClick={() => 
        {setDisplaymessage(true);
        } }/>
      </div>
      <div>
        {displaymessage &&
          (customermessage.length === 0 ? (
            <div className='nomsgs'></div>
          ) : (
            <div className='chatmsgs'>{customermessage}</div>
          ))}
      </div>
      {console.log(customermessage)}
    </div>
  );
}

export default MessageBox;