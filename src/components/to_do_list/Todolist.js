import React, { useState } from 'react';
import './to_do.css';
import {MdDelete } from 'react-icons/md';
import im from '../assessts/VmZHnTO.webp'

const ToDoList = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    if (inputText.trim() !== '') {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText('');
    }
  };

  const handleDelete = (index) => {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  return (

   
   <div className='containertodo'>
   <h1>TO-DO-LIST</h1>



   <img src={im} alt="image"/>
    
        <div className='to_do_input'>
          <input
            type='text'
            style={{ fontSize: '15px', fontWeight: 'bold',color:'white' }}
            value={inputText}
            onChange={handleInputChange}
            placeholder='Type here' 
          />
          <button onClick={handleClick} className='addbtn' >
            ADD
          </button>
          </div >

          
         <div className='to_do_listcontainer'>

         <div className='todoitems'>
         <ul >
         {items.map((item, index) => (
           <li key={index}>{item} <button className='delbtn' onClick={() => handleDelete(index)}> <MdDelete></MdDelete></button>
           </li>
           
         ))}
       </ul></div>

       </div>
        
      </div>
    
  
  );
};

export default ToDoList;
