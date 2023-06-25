import React, { useRef, useState } from 'react';
import './MessageBox.css';

const MessageBox = ({ orderdetails }) => {
  const inputRef = useRef(null);
  const [customermessage, setCustomermessage] = useState('');
  const [displaymessage, setDisplaymessage] = useState(false);

  const handleClearInput = () => {
    inputRef.current.value = '';
    setDisplaymessage(true);
  };

  return (
    <div className="MessageBox">
      <div className="heading">
        <div className="matter">
          {console.log(orderdetails.title)}
          {orderdetails.title}
        </div>
        <div className="image">
          <img src={orderdetails.imageURL} alt="Order" />
        </div>
      </div>
      {!displaymessage && (
        <div className="hello">Send a Message to start chatting with our executive</div>
      )}
      <div className="inputbox">
        <input
          ref={inputRef}
          placeholder="Type a Message..."
          className="chatbox"
          onChange={(e) => {
            setCustomermessage(e.target.value);
          }}
        ></input>
        <img
          src="/Icons/messagesend-icon.png"
          alt=""
          onClick={handleClearInput}
        />
      </div>
      <div>
        {displaymessage ? (
          customermessage.length === 0 ? (
            <div className="nomsgs"></div>
          ) : (
            <div className="chatmsgs">{customermessage}</div>
          )
        ) : null}
      </div>
      {console.log(customermessage)}
    </div>
  );
};

export default MessageBox;
