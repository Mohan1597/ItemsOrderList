import "./OrderList.css";
import { useState, useEffect } from 'react';
import React from "react";
import MessageBox from "./MessageBox";

const OrderList = () => {
  const [OrderDetails, setOrderDetails] = useState([]);
  const [SearchValue, setSearchValue] = useState("");
  const [FilteredOrders, setFilteredOrders] = useState([]);
  const [isExpanded, setExpandedState] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats')
    .then(response => {
      console.log('Response status:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data);
      setOrderDetails(data);
    })
    .catch(error => {
      console.log('Unable to fetch data from API:', error);
    });
  
  }, []);

  useEffect(() => {
    const filteredItems = OrderDetails.filter(order => {
      return (
        order.title.toLowerCase().includes(SearchValue.toLowerCase()) ||
        order.orderId.toLowerCase().includes(SearchValue.toLowerCase())
      );
    });
    setFilteredOrders(filteredItems);
  }, [SearchValue, OrderDetails]);

  const handleClick = order => {
   if (order===selectedOrder)
   {
    setExpandedState(!isExpanded);
   }
   else{
    setSelectedOrder(order);
    setExpandedState(true);
   }
  };

  return (
    <div className='OrderList'>
      <div className="title">Filter By Title / Order Id</div>
      <div className="search">
        <input
          className="search-input"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={isExpanded ? "container-NX" : "container"}>
        {FilteredOrders.map(order => (
          <div className="box" key={order.id} onClick={() => handleClick(order)}>
            <div className="elements">
              <div>
                <img src={order.imageURL} alt={order.title} className="elements-left"/>
              </div>
              <div className="elements-middle">
                <p>{order.title}</p>
                <p>{order.orderId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isExpanded && <MessageBox orderdetails={selectedOrder} />}
    </div>
  );
};

export default OrderList;
