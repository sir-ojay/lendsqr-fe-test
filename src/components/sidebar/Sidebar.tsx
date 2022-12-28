import React from 'react'
import Logo from '../../assets/lendsqr.png';
import Union from '../../assets/Union.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { FaHandshake} from "react-icons/fa";
import {GiCoins } from "react-icons/gi";            
import {MdHouseSiding} from "react-icons/md";                      
import {HiUsers} from "react-icons/hi";                            
import { AiOutlineBarChart  } from "react-icons/ai";
import { FaUsers} from "react-icons/fa";
import { FaUserCheck} from "react-icons/fa";
import { FaUserTimes} from "react-icons/fa";
import { BsFillHouseDoorFill} from "react-icons/bs";
import { FaHandHoldingUsd} from "react-icons/fa";
import { RiToolsLine} from "react-icons/ri";
import { VscSettings} from "react-icons/vsc";
import { TbReportAnalytics} from "react-icons/tb";
import { RiExchangeBoxLine} from "react-icons/ri";
import { GiStabbedNote} from "react-icons/gi";
import SavingsIcon from '@mui/icons-material/Savings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="top">
      
      <Link to="/dashboard" >
        <span className="logo" >
          <img src={Union}   alt="union"
          className="union--img"/>
          <img src={Logo} alt="logoimg" className="logo--img" />
        </span>
      </Link>
    </div>
   
    <div className="center">
      <ul >
        <p className="dashboard"><BusinessCenterIcon className="icon" />Switch Organization <KeyboardArrowDownIcon className="icon" /> </p>
        <li>
          <BsFillHouseDoorFill  className="icon" />
          <span>Dashboard</span>
        </li>

        <p className="title">CUSTOMERS</p>
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
          <li>
            <HiUsers className="icon" />
            <span>Users</span>
          </li>
        </Link>

        <Link to="/dashboard" style={{textDecoration: 'none'}}>
          <li>
            <FaUsers className="icon" />
            <span>Guarantors</span>
          </li>
        </Link>
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
          <li>
            <MonetizationOnIcon  className="icon" />
            <span>Loans</span>
          </li>
        </Link>
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
          <li>
            <FaHandshake className="icon" />
            <span>decision Models</span>
          </li>
        </Link>
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
          <li>
            <SavingsIcon className="icon" />
            <span>savings</span>
          </li>
        </Link>
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
          <li>
            <FaHandHoldingUsd className="icon" />
            <span>Loan Requests</span>
          </li>
        </Link>
        <Link to="/dashboard" style={{textDecoration: 'none'}} >
          <li>
            <FaUserCheck className="icon" />
            <span>Whitelist</span>
          </li>
        </Link>
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
          <li>
            <FaUserTimes className="icon" />
            <span>karma</span>
          </li>
        </Link>
        <p className="title">BUSINESSES</p>
        <li>
          <BusinessCenterIcon className="icon" />
          <span>Organization</span>
        </li>
        <li>
          <FaHandHoldingUsd  className="icon" />
          <span>Loan Products</span>
        </li>
        <li>
          <MdHouseSiding   className="icon" />
          <span>Savings Products</span>
        </li>
        <li>
          <GiCoins className="icon" />
          <span>Fees and Charges</span>
        </li>
        <li>
          <RiExchangeBoxLine  className="icon" />
          <span>Transactions</span>
        </li>
        <li>
          <SettingsSuggestIcon className="icon" />
          <span>Services</span>
        </li>
        <li>
          <ManageAccountsIcon  className="icon" />
          <span>Service Account</span>
        </li>
        <li>
          <GiStabbedNote className="icon" />
          <span>Settlements</span>
        </li>
        <li>
          <AiOutlineBarChart className="icon" />
          <span>Reports</span>
        </li>
        
        <p className="title">SETTINGS</p>
        <li>
          <VscSettings className="icon" />
          <span>Preferences</span>
        </li>
        <li>
          <RiToolsLine className="icon" />
          <span>Fees and Pricing</span>
        </li>
        <li>
          <TbReportAnalytics className="icon" />
          <span>Audit Logs</span>
        </li>
      </ul>
    </div>
   
  </div>
  )
}

export default Sidebar