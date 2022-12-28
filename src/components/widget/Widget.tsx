import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import "./widget.scss";
import {GiCoins } from "react-icons/gi"; 
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";

const Widget = ({type}) => {
   

    let data;

    switch (type) {
        case "users":
          data = {
            title: "USERS",
            value:'2,453',
            icon: (
              <HiOutlineUsers
                className="icon"
                style={{
                  color: "#DF18FF",
                  backgroundColor: "rgb(232, 179, 231)",
                  borderRadius:"100px"
                 
                }}
              />
            ),
          };
          break;
          
        case "active--user":
          data = {
            title: "ACTIVE USERS",
            value:'2,453',
            icon: (
              <HiOutlineUserGroup
                className="icon"
                style={{
                  color: " #5718FF",
                  backgroundColor: "rgb(206, 180, 240)",
                  borderRadius:"100px"
                }}
              />
            ),
          };
          break;
 
        case "users-with--loans":
          data = {
            title: "USERS WITH LOANS",
            value:'12,453',
            icon: (
              < DescriptionIcon 
                className="icon"
                style={{
                  color: "#F55F44",
                  backgroundColor: "rgb(237, 201, 194)",
                  borderRadius:"100px"
                
        
                }}
              />
            ),
          };
          break;
 
        case "users--with--savings":
          data = {
            title: "USERS WITH SAVINGS",
            value:'102,453',
            icon: (
              <GiCoins
                className="icon"
                style={{
                  color: "#FF3366",
                  backgroundColor: "rgb(235, 183, 174)",
                  borderRadius:"100px",
                  
  
                }}
              />
            ),
          };
          break;
        default:
          break;
      }
  return (


    <div className='widget'>
 
      <div className="icon">
         {data.icon}
      </div>

      <div className="title">
        {data.title}
       
      </div>

      <div className='counter'>
        {data.value}
      </div>

    
  
   
    </div>
  
  )
}

export default Widget