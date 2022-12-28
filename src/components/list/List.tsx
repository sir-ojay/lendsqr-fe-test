import React from "react";
import { BsEye } from "react-icons/bs";
import { FaUserTimes} from "react-icons/fa";    
import { FaUserCheck} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./list.scss";
const List = () => {
  return (
    <div className="list-of-details">
      <Link to="/userdetails"  style={{textDecoration: 'none'}} >
        <div>
     
        
        <BsEye/>
          <span>View Details</span>
        </div>
         
      </Link>

      <Link to="/dashboard" style={{textDecoration: 'none'}}>
        <div>
        <FaUserTimes className="icon" />      
          <span>Blacklist User</span>
        </div>
      </Link>

      <Link to="/dashboard" style={{textDecoration: 'none'}}>
        <div>
        <FaUserCheck className="icon" />
          <span>Activate User</span>
        </div>
      </Link>   
   
    </div>
  );
};

export default List;
