// import { GiGymBag } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import {IoMdSettings} from 'react-icons/io'
import {CgWebsite} from 'react-icons/cg';
import { AiFillHome } from "react-icons/ai";

export const Main = [
  {
    icon: <AiFillHome size={20} />,
    text: "Home",
    route:'/'
  },
  {
    icon: <BsCreditCard2FrontFill size={20} />,
    text: "Manage Rental",
    route:'/carRental'
  },
  {
    icon: <BsCreditCard2FrontFill size={20} />,
    text: "Manage Shipments",
    route:'/manage-shipments'
  },
  {
    icon: <BiSolidContact size={20}/>,
    text: "Transport Managment",
    route:'/transport-managment'
  },
  {
    icon: <BiSolidContact size={20}/>,
    text: "Manage Trips",
    route:'/manage-trips'
  },
  {
    icon: <BiSolidContact size={20}/>,
    text: "Manage Parcels",
    route:'/ParcelList'
  },
  {
    icon: <FaUsers size={20}/>,
    text: "Manage Employees",
    route:'/manageEmployees'
  },
];

export const GeneralSettting = [
  {
    icon: <CgWebsite size={20} />,
    text: "Website Content",
    route:'/website-content'
  },
  {
    icon: <IoMdSettings size={20}/>,
    text: "Profile Settings",
    route:'#'
  },
];